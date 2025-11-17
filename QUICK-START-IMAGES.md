# 🚀 Quick Start: Download Images in 5 Minutes

## Step 1: Get API Keys

### Option A: Google Images (BEST - Highest Quality) ⭐
**Setup time: 10 minutes** | **100 images/day FREE**

See detailed guide: **[GOOGLE-API-SETUP.md](GOOGLE-API-SETUP.md)**

Quick version:
1. Go to: https://console.cloud.google.com/
2. Create project → Enable "Custom Search API"
3. Get API key + Create Search Engine
4. Copy both keys to script

### Option B: Pexels (EASIEST - Quick Setup) ⚡
**Setup time: 2 minutes** | **200 images/hour FREE**

1. Go to: https://www.pexels.com/api/
2. Click **"Get Started"**
3. Sign up with email
4. Copy your **API Key**

### Option C: Unsplash (BACKUP)
**Setup time: 3 minutes** | **50 images/hour FREE**

1. Go to: https://unsplash.com/developers
2. Click **"Register as a developer"**
3. Create new app
4. Copy **Access Key**

### Recommended: Use All Three!
- Google for best quality (100/day)
- Pexels as fallback (200/hour)
- Unsplash as last resort (50/hour)
- Script tries Google first, then Pexels, then Unsplash automatically!

## Step 2: Add Keys to Script (30 seconds)

Open `download_images.py` in any text editor and find these lines:

```python
GOOGLE_API_KEY = "YOUR_GOOGLE_API_KEY"
GOOGLE_SEARCH_ENGINE_ID = "YOUR_SEARCH_ENGINE_ID"
PEXELS_API_KEY = "YOUR_PEXELS_API_KEY"
UNSPLASH_API_KEY = "YOUR_UNSPLASH_ACCESS_KEY"
```

Replace with your actual keys:

```python
GOOGLE_API_KEY = "AIzaSyC..."  # If using Google (recommended)
GOOGLE_SEARCH_ENGINE_ID = "a1b2c3d4e..."  # If using Google
PEXELS_API_KEY = "SvWRTahoo..."  # Already set! (you can keep this)
UNSPLASH_API_KEY = "unQ_ug9IS..."  # Already set! (you can keep this)
```

**Note**: Pexels and Unsplash keys are already in the script! You just need to add Google keys for best results.

**Save the file!**

## Step 3: Install Python (if needed)

Check if you have Python:
```bash
python --version
```

If not installed: https://www.python.org/downloads/

## Step 4: Run the Script

### Windows (Easy Way)
Just **double-click** `download_images.bat`

### Windows/Mac/Linux (Command Line)
```bash
# Install dependencies (first time only)
pip install -r requirements.txt

# Run the downloader
python download_images.py
```

## That's It! 🎉

The script will:
- ✅ Download 75+ images automatically
- ✅ Save them to `public/images/` folder
- ✅ Show progress for each image
- ✅ Report success/failures at the end

## What You'll See

```
🚗 DRIVER'S SEAT QUEEN - Image Downloader 👑
============================================================
📁 Images will be saved to: C:\...\public\images
📊 Total images to download: 75
============================================================

📡 Configured APIs:
  ✅ Google Custom Search (PRIMARY - 100 queries/day)
  ✅ Pexels (FALLBACK - 200 requests/hour)
  ✅ Unsplash (FALLBACK - 50 requests/hour)

[1/75] stop-sign-octagon.jpg
   🔍 Searching Google Images: 'red octagon stop sign traffic'
   ⬇️  Downloading from Google Images...
   ✅ Saved: stop-sign-octagon.jpg

[2/75] yield-sign-triangle.jpg
   🔍 Searching Google Images: 'yield sign triangle red white traffic'
   ⬇️  Downloading from Google Images...
   ✅ Saved: yield-sign-triangle.jpg

... (Google downloads 100 images)

[101/175] some-image.jpg
   🔍 Searching Google Images: '...'
   ⚠️  Google API quota exceeded (100/day limit)
   🔄 Trying Pexels...
   ⬇️  Downloading from Pexels...
   ✅ Saved: some-image.jpg

============================================================
📊 DOWNLOAD SUMMARY
============================================================
✅ Successful: 168
⏭️  Skipped (already exist): 0
❌ Failed: 7
📁 Total in folder: 168

🎉 Done! Images ready to use in your app!
```

## Next Steps

1. **Verify**: Check `public/images/` folder for downloaded images
2. **Test**: Run `npm run dev` and take a practice test
3. **Deploy**: Run `npm run build` and `git push`

## Troubleshooting

### "No module named 'requests'"
```bash
pip install requests
```

### Some images failed?
**Totally normal!** Some search terms might not find perfect matches.

You can:
- Run the script again (it will retry failed ones)
- Manually download failed images from Google Images
- Edit search terms in the script for better results

### API Rate Limits?
- Pexels: 200 requests/hour (free)
- Unsplash: 50 requests/hour (free)

If you hit the limit, wait an hour or use both APIs together for 250/hour total.

---

**Need more help?** Check `IMAGE-DOWNLOADER-README.md` for detailed documentation.
