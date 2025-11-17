# 🔍 Google Custom Search API Setup Guide

## Why Google Images?

✅ **Best image quality** - Largest image database
✅ **Most relevant results** - Superior search algorithm
✅ **Free tier available** - 100 queries per day
✅ **Filter by usage rights** - Only downloads free-to-use images

## Quick Setup (10 Minutes)

### Step 1: Create Google Cloud Project (3 min)

1. Go to: **https://console.cloud.google.com/**
2. Click **"Select a project"** → **"New Project"**
3. Enter project name: `driver-seat-queen-images`
4. Click **"Create"**
5. Wait for project creation

### Step 2: Enable Custom Search API (2 min)

1. In Google Cloud Console, go to: **https://console.cloud.google.com/apis/library**
2. Search for: **"Custom Search API"**
3. Click on **"Custom Search API"**
4. Click **"Enable"**
5. Wait for API to enable

### Step 3: Get API Key (2 min)

1. Go to: **https://console.cloud.google.com/apis/credentials**
2. Click **"Create Credentials"** → **"API Key"**
3. **Copy the API Key** (looks like: `AIzaSyC...`)
4. Click **"Restrict Key"** (recommended)
5. Under "API restrictions":
   - Select **"Restrict key"**
   - Check **"Custom Search API"**
   - Click **"Save"**

### Step 4: Create Custom Search Engine (3 min)

1. Go to: **https://programmablesearchengine.google.com/controlpanel/create**
2. Fill in the form:
   - **Search engine name**: `Driver Education Images`
   - **What to search**: Select **"Search the entire web"**
   - **SafeSearch**: Turn **ON**
   - **Image search**: Turn **ON**
3. Click **"Create"**
4. On the next page, click **"Customize"**
5. **Copy the Search Engine ID** (looks like: `a1b2c3d4e5f6g7h8i`)

### Step 5: Add Keys to Script (1 min)

Open `download_images.py` and replace:

```python
GOOGLE_API_KEY = "YOUR_GOOGLE_API_KEY"
GOOGLE_SEARCH_ENGINE_ID = "YOUR_SEARCH_ENGINE_ID"
```

With your actual keys:

```python
GOOGLE_API_KEY = "AIzaSyC..."  # Your API key from Step 3
GOOGLE_SEARCH_ENGINE_ID = "a1b2c3d4e5f6g7h8i"  # Your Search Engine ID from Step 4
```

**Save the file!**

## Run the Script

```bash
python download_images.py
```

The script will:
1. ✅ Try Google Images first (PRIMARY)
2. ✅ Fall back to Pexels if Google fails
3. ✅ Fall back to Unsplash if both fail

## Understanding the Free Tier

### Google Custom Search API Limits
- **100 queries per day** (FREE)
- Resets at midnight Pacific Time
- After 100: API returns quota error

### What This Means
- You can download **100 images per day** with Google
- Script automatically falls back to Pexels/Unsplash after quota
- OR wait until next day to continue

### Download Strategy

**Day 1**: Download 100 images (Google)
**Day 2**: Download remaining images (Google + fallback)

OR

**Single Run**: Use Google for 100, then Pexels/Unsplash for rest (automatic)

## Expected Output

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

... (continues)

[50/75] some-image.jpg
   🔍 Searching Google Images: '...'
   ⚠️  Google API quota exceeded (100/day limit)
   🔄 Trying Pexels...
   ⬇️  Downloading from Pexels...
   ✅ Saved: some-image.jpg

============================================================
📊 DOWNLOAD SUMMARY
============================================================
✅ Successful: 73
⏭️  Skipped (already exist): 0
❌ Failed: 2
📁 Total in folder: 73

🎉 Done! Images ready to use in your app!
```

## Troubleshooting

### "Invalid API key"
- Check you copied the full API key
- Make sure API is enabled in Google Cloud Console
- Verify API key restrictions include "Custom Search API"

### "Invalid Search Engine ID"
- Check you copied the correct Search Engine ID
- Go back to https://programmablesearchengine.google.com/
- Click on your search engine
- Copy the "Search engine ID" from the Overview page

### "Quota exceeded" on first run
- You may have already used your daily quota testing
- Wait until midnight Pacific Time for reset
- OR use fallback APIs (Pexels/Unsplash) for today

### "API not enabled"
- Go to https://console.cloud.google.com/apis/library
- Search "Custom Search API"
- Make sure it shows "API Enabled"

### Images not downloading
- Check internet connection
- Verify all keys are correct
- Try running with just one image first (edit IMAGE_SEARCHES)

## Advanced: Increase Quota

Want more than 100 queries per day?

### Option 1: Billing Account (Pay-as-you-go)
- $5 per 1,000 queries after free tier
- Only charged if you exceed 100/day
- Set up in Google Cloud Console billing

### Option 2: Multiple Search Engines
- Create multiple Custom Search Engines
- Rotate between them in the script
- Still limited to 100/day per API key

### Option 3: Use All Three APIs
- Google: 100/day
- Pexels: 200/hour (4,800/day)
- Unsplash: 50/hour (1,200/day)
- **Combined**: Download all images easily!

## Security Best Practices

### Restrict API Key
1. Go to: https://console.cloud.google.com/apis/credentials
2. Click on your API key
3. Under "API restrictions":
   - Select "Restrict key"
   - Only check "Custom Search API"
4. Under "Application restrictions":
   - Select "IP addresses"
   - Add your IP (optional but recommended)
5. Click "Save"

### Don't Share Keys
- ❌ Never commit API keys to GitHub
- ❌ Never share keys publicly
- ✅ Keep them in the script locally only
- ✅ Add `download_images.py` to `.gitignore` if sharing code

## Alternative: Bing Image Search

If you want another alternative with higher limits:

### Bing Image Search API
- **Free tier**: 1,000 calls/month
- Setup: https://www.microsoft.com/en-us/bing/apis/bing-image-search-api
- Better free tier than Google
- Can be added to the script as another fallback

## Summary

✅ **Google Images** = Best quality, 100/day free
✅ **Pexels** = Good quality, 200/hour free
✅ **Unsplash** = Great quality, 50/hour free

**Combined**: More than enough to download all images!

---

Need help? Check the main README or open an issue on GitHub.
