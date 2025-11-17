# 🚀 Quick Start: Download Images in 5 Minutes

## Step 1: Get API Keys (2 minutes)

### Pexels (Recommended)
1. Go to: https://www.pexels.com/api/
2. Click **"Get Started"**
3. Sign up with email
4. Copy your **API Key**

### Unsplash (Optional - for backup)
1. Go to: https://unsplash.com/developers
2. Click **"Register as a developer"**
3. Create new app
4. Copy **Access Key**

## Step 2: Add Keys to Script (30 seconds)

Open `download_images.py` in any text editor and find these lines:

```python
UNSPLASH_API_KEY = "YOUR_UNSPLASH_ACCESS_KEY"
PEXELS_API_KEY = "YOUR_PEXELS_API_KEY"
```

Replace with your actual keys:

```python
UNSPLASH_API_KEY = "paste_your_unsplash_key_here"
PEXELS_API_KEY = "paste_your_pexels_key_here"
```

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

[1/75] stop-sign-octagon.jpg
   🔍 Searching Pexels: 'red octagon stop sign traffic'
   ⬇️  Downloading from Pexels...
   ✅ Saved: stop-sign-octagon.jpg

[2/75] yield-sign-triangle.jpg
   🔍 Searching Pexels: 'yield sign triangle red white traffic'
   ⬇️  Downloading from Pexels...
   ✅ Saved: yield-sign-triangle.jpg

... (continues for all images)

============================================================
📊 DOWNLOAD SUMMARY
============================================================
✅ Successful: 68
⏭️  Skipped (already exist): 0
❌ Failed: 7
📁 Total in folder: 68

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
