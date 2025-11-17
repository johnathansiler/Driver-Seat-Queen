# 🚗 Image Downloader for Driver's Seat Queen 👑

Automated Python script to download educational images for driving permit test questions.

## Quick Start Guide

### Step 1: Install Python
Make sure you have Python 3.7+ installed:
```bash
python --version
```

If not installed, download from: https://www.python.org/downloads/

### Step 2: Install Dependencies
Open terminal/command prompt in the project folder and run:
```bash
pip install -r requirements.txt
```

### Step 3: Get Free API Keys

#### Option A: Pexels API (Recommended - Higher Rate Limit)
1. Go to: https://www.pexels.com/api/
2. Click "Get Started"
3. Sign up for a free account
4. Copy your API key
5. **Rate Limit**: 200 requests/hour (FREE)

#### Option B: Unsplash API
1. Go to: https://unsplash.com/developers
2. Click "Register as a developer"
3. Create a new application
4. Copy your "Access Key"
5. **Rate Limit**: 50 requests/hour (FREE)

#### Best: Get Both APIs
- Use both for better coverage
- Script tries Pexels first, then Unsplash as backup
- Combined: 250 requests/hour

### Step 4: Add API Keys to Script

Open `download_images.py` and replace the placeholder keys:

```python
# Find these lines near the top:
UNSPLASH_API_KEY = "YOUR_UNSPLASH_ACCESS_KEY"  # Replace with your key
PEXELS_API_KEY = "YOUR_PEXELS_API_KEY"  # Replace with your key
```

**Example:**
```python
UNSPLASH_API_KEY = "abc123xyz456..."
PEXELS_API_KEY = "def789uvw012..."
```

### Step 5: Run the Script

```bash
python download_images.py
```

## What the Script Does

1. **Searches** for images using optimized search terms
2. **Downloads** high-quality landscape-oriented images
3. **Saves** them with correct filenames to `public/images/`
4. **Skips** images that already exist
5. **Reports** progress and success/failure stats

## Script Features

✅ **Automatic retry** on network errors
✅ **Rate limiting** to respect API limits
✅ **Progress tracking** with emoji indicators
✅ **Skip existing** files to avoid re-downloading
✅ **Dual API support** for better coverage
✅ **High-quality images** optimized for web

## Expected Output

```
🚗 DRIVER'S SEAT QUEEN - Image Downloader 👑
============================================================
📁 Images will be saved to: C:\...\public\images
📊 Total images to download: 75
============================================================

[1/75] stop-sign-octagon.jpg
   🔍 Searching Pexels: 'red octagon stop sign traffic'
   ⬇️  Downloading from Pexels...
   ✅ Saved: stop-sign-octagon.jpg

[2/75] yield-sign-triangle.jpg
   🔍 Searching Pexels: 'yield sign triangle red white traffic'
   ⬇️  Downloading from Pexels...
   ✅ Saved: yield-sign-triangle.jpg

...

============================================================
📊 DOWNLOAD SUMMARY
============================================================
✅ Successful: 68
⏭️  Skipped (already exist): 0
❌ Failed: 7
📁 Total in folder: 68

🎉 Done! Images ready to use in your app!
```

## Troubleshooting

### "No module named 'requests'"
```bash
pip install requests
```

### "Please set your API key"
- Open `download_images.py`
- Replace placeholder text with actual API keys
- Save the file

### Rate Limit Errors
- Free Pexels: 200 requests/hour
- Free Unsplash: 50 requests/hour
- **Solution**: Wait an hour, or get both APIs

### Some Images Failed
This is normal! Some search terms may not find good matches.

**Options:**
1. **Manually download** failed images from Google Images
2. **Edit search terms** in the script for better results
3. **Run script again** later for retry

### Images Low Quality
Edit the script to use higher resolution:
```python
# For Pexels, change:
image_url = data["photos"][0]["src"]["large"]
# To:
image_url = data["photos"][0]["src"]["large2x"]

# For Unsplash, change:
image_url = data["results"][0]["urls"]["regular"]
# To:
image_url = data["results"][0]["urls"]["full"]
```

## Customizing Search Terms

Edit `IMAGE_SEARCHES` dictionary in the script:

```python
IMAGE_SEARCHES = {
    "stop-sign-octagon.jpg": "red octagon stop sign traffic",  # Original
    "stop-sign-octagon.jpg": "stop sign close up",  # More specific
    # Add more search variations
}
```

## Adding More Images

To download additional images not in the default list:

```python
# Add to IMAGE_SEARCHES dictionary:
IMAGE_SEARCHES = {
    # ... existing entries ...
    "new-image-name.jpg": "search terms for new image",
}
```

## Running in Batches

To avoid rate limits, download in batches:

**Batch 1: Road Signs** (first 20 images)
- Comment out other sections in `IMAGE_SEARCHES`
- Run script
- Wait 1 hour

**Batch 2: Traffic Signals**
- Uncomment traffic signals section
- Run script

## File Size Management

Images are downloaded in "large" quality (~200-500 KB each).

To optimize file sizes after downloading:
1. Use online tools like TinyPNG or Squoosh
2. Or add compression to the script using Pillow library

## Privacy & Copyright

### Are these images legal to use?
✅ **YES** - Both Pexels and Unsplash provide:
- **Free** commercial use
- **No attribution required** (though appreciated)
- **Unlimited downloads**
- **License**: Free to use for educational purposes

### License Information
- **Pexels**: https://www.pexels.com/license/
- **Unsplash**: https://unsplash.com/license

## Advanced: Bulk Download All at Once

To download all images in one run:

```bash
# Make sure you have both API keys set
python download_images.py

# The script will:
# - Try Pexels first (200/hour)
# - Fall back to Unsplash (50/hour)
# - Handle rate limits automatically
# - Retry failed downloads
```

**Estimated Time**:
- 75 images ÷ 200 per hour = ~25 minutes
- With both APIs: ~15 minutes

## Manual Download Alternative

If you prefer manual control:

1. Open `image-list.md`
2. Find the image you need
3. Copy the search terms
4. Search on:
   - Google Images (filter: free to use)
   - Unsplash.com
   - Pexels.com
5. Download and save with exact filename to `public/images/`

## Next Steps After Download

1. **Verify images**: Check `public/images/` folder
2. **Test locally**: Run `npm run dev`
3. **Take practice test**: Verify images display correctly
4. **Deploy**: Run `npm run build` and `git push`

## Support

Having issues? Check:
1. Python version (3.7+)
2. API keys are correct
3. Internet connection
4. `public/images/` folder exists
5. No firewall blocking requests

## Credits

Images sourced from:
- **Pexels**: Free stock photos
- **Unsplash**: Beautiful free images

Script created for educational purposes for Driver's Seat Queen permit test app.

---

🎉 Happy downloading! Your students will love the visual learning experience! 👑
