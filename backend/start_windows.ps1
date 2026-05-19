$ErrorActionPreference = "Stop"

Set-Location $PSScriptRoot

$env:APP_HOST = "0.0.0.0"
$env:APP_PORT = "8000"
$env:APP_DEBUG = "false"
$env:USE_WAITRESS = "true"

.\.venv\Scripts\python.exe server.py
