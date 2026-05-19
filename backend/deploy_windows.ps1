$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

$pythonCommand = $null
if (Get-Command py -ErrorAction SilentlyContinue) {
  $pythonCommand = @("py", "-3")
} elseif (Get-Command python -ErrorAction SilentlyContinue) {
  $pythonCommand = @("python")
} else {
  throw "Python was not found. Install Python 3.10+ and check 'Add python.exe to PATH'."
}

if (Test-Path ".\.venv\Scripts\python.exe") {
  & ".\.venv\Scripts\python.exe" --version | Out-Null
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Existing .venv is invalid on this server. Recreating it..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force ".\.venv"
  }
}

if (-not (Test-Path ".\.venv\Scripts\python.exe")) {
  if ($pythonCommand.Length -gt 1) {
    & $pythonCommand[0] @($pythonCommand[1..($pythonCommand.Length - 1)]) -m venv .venv
  } else {
    & $pythonCommand[0] -m venv .venv
  }
}

& ".\.venv\Scripts\python.exe" -m pip install --upgrade pip
& ".\.venv\Scripts\python.exe" -m pip install -r requirements.txt

if (-not (Test-Path ".\.env")) {
  Copy-Item ".\.env.example" ".\.env"
  Write-Host "Created .env from .env.example. Fill DASHSCOPE_API_KEY before starting." -ForegroundColor Yellow
}

Write-Host "Deployment dependencies are ready." -ForegroundColor Green
Write-Host "Next: edit backend\.env, then run .\start_windows.ps1" -ForegroundColor Green
