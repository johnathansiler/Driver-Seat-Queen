# Image Setup Guide for City Girls Driver's Permit Test

## Overview
The app now supports displaying images for questions! Images will automatically appear when available, helping users visualize road signs, pavement markings, traffic signals, and driving scenarios.

## How It Works

### Image Infrastructure
- **Image Folder**: `public/images/`
- **Image Mapping**: `src/data/imageMapping.js` maps question IDs to image filenames
- **Auto Display**: Images appear automatically when the file exists
- **Graceful Fallback**: Questions work perfectly fine without images

### Current Status
✅ Image infrastructure is set up and ready
✅ 175+ images mapped to questions
✅ Code deployed and live
❌ **Images need to be downloaded and added to `public/images/` folder**

## Adding Images

### Step 1: Download Images
Refer to `image-list.md` in the project root for a complete list of needed images with:
- Question IDs
- Descriptions
- Suggested filenames
- Search terms

### Step 2: Save Images
1. Download each image
2. Save it to `public/images/` folder
3. **Use the exact filename** from `imageMapping.js` (or update the mapping)
4. Supported formats: JPG, PNG, GIF, WebP

### Step 3: Rebuild & Deploy
```bash
npm run build
git add .
git commit -m "Add question images"
git push
```

## Image Categories & Priority

### High Priority (Most Impact)
1. **Road Signs** (23 images): Stop, yield, warning signs, etc.
2. **Traffic Signals** (23 images): Red/yellow/green lights, arrows
3. **Pavement Markings** (31 images): Lines, arrows, crosswalks

### Medium Priority
4. **School Bus & Emergency** (5 images): Flashing lights, stop arms
5. **Parking & Distance** (4 images): Fire hydrant, crosswalk distances
6. **Intersections** (9 images): Four-way stops, roundabouts

### Lower Priority (Still Helpful)
7. **Vehicle Equipment** (29 images): Headlights, tires, safety gear
8. **Sharing the Road** (18 images): Bicycles, motorcycles, pedestrians
9. **Emergency Situations** (24 images): Hydroplaning, accidents
10. **Special Scenarios** (14 images): Drowsy driving, parking diagrams

## Image Specifications

### Recommended Dimensions
- Width: 800-1200px (will be responsive)
- Height: 600-900px
- Aspect Ratio: 4:3 or 16:9 works best

### File Size
- Target: 50-200 KB per image
- Max: 500 KB (for performance)
- Use compression tools if needed

### Quality
- Clear and visible
- Good contrast
- High resolution for signs/text
- Real photos preferred, diagrams acceptable

## Finding Images

### Free Stock Photo Sites
- **Unsplash**: unsplash.com (free, high quality)
- **Pexels**: pexels.com (free, no attribution)
- **Pixabay**: pixabay.com (free)

### Official Sources
- **Florida DMV**: flhsmv.gov (for official signs)
- **MUTCD**: Manual on Uniform Traffic Control Devices

### Search Tips
1. Use search terms from `image-list.md`
2. Filter by "free to use" or check licenses
3. Look for Florida-specific images when possible
4. Prefer real photos over illustrations for authenticity

## Image Mapping Structure

Each question ID maps to a filename:
```javascript
export const questionImages = {
  1: 'school-zone-pentagon-sign.jpg',
  2: 'headlights-on-rainy-day.jpg',
  3: 'school-bus-red-lights.jpg',
  // ... etc
}
```

### To Add/Update Mappings
Edit `src/data/imageMapping.js` and update the `questionImages` object.

## Testing Images Locally

1. Add images to `public/images/`
2. Run development server:
   ```bash
   npm run dev
   ```
3. Take a practice test and verify images appear
4. Check that images display correctly on mobile

## Troubleshooting

### Image Not Appearing?
- ✅ Check filename matches exactly (case-sensitive)
- ✅ Verify image is in `public/images/` folder
- ✅ Check browser console for errors
- ✅ Ensure image format is supported (jpg, png, gif, webp)

### Image Too Large/Slow?
- Compress using tools like TinyPNG or Squoosh
- Resize to max 1200px width
- Convert to WebP format for better compression

### Wrong Image Displayed?
- Check `imageMapping.js` for correct question ID
- Verify filename spelling
- Clear browser cache

## Example Workflow

```bash
# 1. Download stop-sign-octagon.jpg from internet
# 2. Save to public/images/stop-sign-octagon.jpg
# 3. Test locally
npm run dev

# 4. Build and deploy
npm run build
git add public/images/stop-sign-octagon.jpg
git commit -m "Add stop sign image for questions 21, 63, 78, 84"
git push
```

## Next Steps

1. **Start with high-priority categories** (road signs, signals, markings)
2. **Download 5-10 images** as a test batch
3. **Deploy and verify** they work correctly
4. **Continue adding** remaining images over time

The app will automatically display images as you add them - no code changes needed! 🎉
