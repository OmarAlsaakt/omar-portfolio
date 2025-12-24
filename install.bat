@echo off
echo ==================================
echo Omar Al-Saket Portfolio Setup
echo ==================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [31mNode.js is not installed![0m
    echo Please install Node.js from: https://nodejs.org
    pause
    exit /b 1
)

echo [32mNode.js is installed[0m
node --version
echo [32mnpm is installed[0m
npm --version
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

if %ERRORLEVEL% EQU 0 (
    echo [32mDependencies installed successfully![0m
) else (
    echo [31mFailed to install dependencies[0m
    pause
    exit /b 1
)

echo.
echo ==================================
echo Setup Complete! [32m[0m
echo ==================================
echo.
echo Next steps:
echo 1. Run 'npm run dev' to start development server
echo 2. Run 'npm run build' to create production build
echo 3. Run 'npm run preview' to preview production build
echo.
echo For deployment instructions, see SETUP_GUIDE.md
echo.
pause
