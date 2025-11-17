#!/bin/bash

echo ""
echo "========================================"
echo " Driver's Seat Queen Image Downloader"
echo "========================================"
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null
then
    echo "ERROR: Python 3 is not installed!"
    echo "Please install Python from https://www.python.org/downloads/"
    exit 1
fi

echo "Checking dependencies..."
if ! python3 -c "import requests" &> /dev/null; then
    echo "Installing requests library..."
    pip3 install -r requirements.txt
    echo ""
fi

echo "Starting image download..."
echo ""
python3 download_images.py

echo ""
echo "========================================"
echo "Download complete!"
echo "========================================"
