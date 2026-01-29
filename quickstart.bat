@echo off
REM Frame Studio - Quick Start Script (Windows)
REM This script helps you get started with Frame Studio

cls
echo.
echo ============================================
echo    Frame Studio - Quick Start
echo ============================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo Error: Node.js is not installed or not in PATH
    echo.
    echo Please download and install Node.js 16+ from:
    echo   https://nodejs.org
    echo.
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.

echo Installing dependencies...
call npm install

if errorlevel 1 (
    echo.
    echo Error: npm install failed
    pause
    exit /b 1
)

echo.
echo Dependencies installed successfully!
echo.

echo ============================================
echo  Available Commands
echo ============================================
echo.
echo  Development Server:
echo    npm run dev
echo    (Starts local server on http://localhost:5173)
echo.
echo  Production Build:
echo    npm run build
echo    (Creates optimized build in dist/)
echo.
echo  Preview Production:
echo    npm run preview
echo    (Preview production build locally)
echo.
echo ============================================
echo.

set /p "start=Start development server now? (y/n): "

if /i "%start%"=="y" (
    echo.
    echo Starting development server...
    echo Press Ctrl+C to stop
    echo.
    call npm run dev
) else (
    echo.
    echo To get started, run:
    echo   npm run dev
    echo.
    echo Happy framing! ^_^
    pause
)
