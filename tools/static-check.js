const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const FRONTEND_FILES = ["index.html", "index.css", "index.js"];
const BACKEND_DIR = path.join(ROOT, "backend");

let failureCount = 0;

function fail(message) {
  failureCount += 1;
  console.error("[fail] " + message);
}

function pass(message) {
  console.log("[ok] " + message);
}

function warn(message) {
  console.warn("[warn] " + message);
}

function readText(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function unique(values) {
  return Array.from(new Set(values));
}

function run(command, args, options = {}) {
  return spawnSync(command, args, {
    cwd: options.cwd || ROOT,
    encoding: "utf8",
    shell: false,
  });
}

function collectFiles(dir, predicate, output = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".venv" || entry.name === "__pycache__") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(fullPath, predicate, output);
    } else if (predicate(fullPath)) {
      output.push(fullPath);
    }
  }
  return output;
}

function checkRequiredFiles() {
  for (const file of FRONTEND_FILES) {
    const absolute = path.join(ROOT, file);
    if (!fs.existsSync(absolute)) {
      fail("missing required file: " + file);
    }
  }

  if (!fs.existsSync(path.join(BACKEND_DIR, "server.py"))) {
    fail("missing backend/server.py");
  }

  if (failureCount === 0) {
    pass("required frontend and backend entry files exist");
  }
}

function checkFrontendSyntax() {
  try {
    new vm.Script(readText("index.js"), { filename: "index.js" });
    pass("index.js passes node --check");
    return;
  } catch (error) {
    fail("index.js syntax check failed");
    console.error(error.message);
  }
}

function checkPythonSyntax() {
  if (!fs.existsSync(BACKEND_DIR)) {
    return;
  }

  const pythonFiles = collectFiles(BACKEND_DIR, file => file.endsWith(".py"));
  if (pythonFiles.length === 0) {
    warn("no backend Python files found");
    return;
  }

  const relativeFiles = pythonFiles.map(file => path.relative(ROOT, file));
  const result = run("python", ["-m", "py_compile", ...relativeFiles]);
  if (result.status === 0) {
    pass("backend Python files pass py_compile");
    return;
  }

  if (result.error && result.error.code === "EPERM") {
    warn("backend Python syntax check skipped because this environment blocks child process execution");
    return;
  }

  fail("backend Python syntax check failed");
  if (result.error) {
    console.error(result.error.message);
  }
  if (result.stderr) {
    console.error(result.stderr.trim());
  }
}

function checkDomIds() {
  const html = readText("index.html");
  const js = readText("index.js");
  const htmlIds = [...html.matchAll(/id="([^"]+)"/g)].map(match => match[1]);
  const dynamicIds = [...js.matchAll(/id="([^"]+)"/g)].map(match => match[1]);
  const assignedIds = [...js.matchAll(/\.id\s*=\s*"([^"]+)"/g)].map(match => match[1]);
  const availableIds = new Set([...htmlIds, ...dynamicIds, ...assignedIds]);
  const refs = unique([...js.matchAll(/getElementById\("([^"]+)"\)/g)].map(match => match[1]));
  const missing = refs.filter(id => !availableIds.has(id));

  if (missing.length === 0) {
    pass("all getElementById references resolve to static or generated DOM ids");
  } else {
    fail("missing DOM ids referenced by index.js: " + missing.join(", "));
  }
}

function checkAssetReferences() {
  const text = FRONTEND_FILES.map(readText).join("\n");
  const assetRefs = unique(
    [...text.matchAll(/["'(](\.\/assets\/[^"'()?#]+)(?:[?#][^"'()]*)?["')]/g)].map(match => match[1])
  );
  const missing = assetRefs.filter(ref => !fs.existsSync(path.join(ROOT, ref.replace(/^\.\//, ""))));

  if (missing.length === 0) {
    pass("all frontend asset references exist (" + assetRefs.length + " checked)");
  } else {
    fail("missing frontend assets:\n  " + missing.join("\n  "));
  }
}

function checkBackendRoutesAgainstFrontendConstants() {
  const js = readText("index.js");
  const routeFiles = collectFiles(path.join(BACKEND_DIR, "app", "routes"), file => file.endsWith(".py"));
  const routeText = routeFiles.map(file => fs.readFileSync(file, "utf8")).join("\n");
  const backendRoutes = unique([...routeText.matchAll(/@api_bp\.route\("([^"]+)"/g)].map(match => "/api" + match[1]));
  const frontendRoutes = unique([...js.matchAll(/http:\/\/127\.0\.0\.1:8000(\/api\/[^"]+)"/g)].map(match => match[1]));
  const missing = frontendRoutes.filter(route => !backendRoutes.includes(route));

  if (missing.length === 0) {
    pass("frontend API constants match backend Flask routes");
  } else {
    fail("frontend references routes not found in backend: " + missing.join(", "));
  }
}

function checkMojibakeHotspots() {
  const sourceFiles = [
    ...FRONTEND_FILES,
    "README.md",
    "backend/README.md",
  ];
  const markers = [
    "鐢",
    "鍓",
    "绔",
    "瑙",
    "濡",
    "鈥",
    "銆",
    "€",
  ];
  const hits = [];

  for (const file of sourceFiles) {
    const absolute = path.join(ROOT, file);
    if (!fs.existsSync(absolute)) {
      continue;
    }

    const lines = fs.readFileSync(absolute, "utf8").split(/\r?\n/);
    lines.forEach((line, index) => {
      if (markers.some(marker => line.includes(marker))) {
        hits.push(file + ":" + (index + 1));
      }
    });
  }

  if (hits.length === 0) {
    pass("no common mojibake markers found in primary source files");
  } else {
    warn("possible mojibake text remains in primary files (" + hits.slice(0, 12).join(", ") + (hits.length > 12 ? ", ..." : "") + ")");
  }
}

function main() {
  console.log("Static check for " + ROOT);
  checkRequiredFiles();
  checkFrontendSyntax();
  checkPythonSyntax();
  checkDomIds();
  checkAssetReferences();
  checkBackendRoutesAgainstFrontendConstants();
  checkMojibakeHotspots();

  if (failureCount > 0) {
    console.error("\nStatic check failed with " + failureCount + " issue(s).");
    process.exit(1);
  }

  console.log("\nStatic check passed.");
}

main();
