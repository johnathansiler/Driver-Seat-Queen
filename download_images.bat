@echo off
echo.
echo ========================================
echo  Driver's Seat Queen Image Downloader
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed!
    echo Please install Python from https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

echo Checking dependencies...
pip show requests >nul 2>&1
if errorlevel 1 (
    echo Installing requests library...
    pip install -r requirements.txt
    echo.
)

echo Starting image download...
echo.
python download_images.py

echo.
echo ========================================
echo Download complete!
echo ========================================
pause
