"""
Image Downloader for Driver's Seat Queen
Downloads educational images for driving permit test questions
Primary: Google Custom Search API
Fallback: Pexels and Unsplash APIs
"""

import os
import json
import time
import requests
from pathlib import Path
import hashlib

# Configuration
IMAGES_DIR = Path("public/images")
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

def get_image_hash(filepath):
    """Calculate MD5 hash of an image file to detect duplicates"""
    try:
        with open(filepath, 'rb') as f:
            return hashlib.md5(f.read()).hexdigest()
    except Exception:
        return None

def scan_existing_images():
    """Scan folder for existing images and return their hashes"""
    existing = {}
    if IMAGES_DIR.exists():
        for file in IMAGES_DIR.glob('*'):
            if file.is_file() and file.suffix.lower() in ['.jpg', '.jpeg', '.png', '.gif', '.webp']:
                file_hash = get_image_hash(file)
                if file_hash:
                    existing[file.name] = file_hash
    return existing

def is_duplicate_image(new_filepath, existing_hashes):
    """Check if a newly downloaded image is a duplicate of an existing one"""
    new_hash = get_image_hash(new_filepath)
    if not new_hash:
        return False

    new_filename = Path(new_filepath).name

    # Check all existing images for same hash
    for existing_name, existing_hash in existing_hashes.items():
        if existing_name != new_filename and new_hash == existing_hash:
            return existing_name  # Return the duplicate filename

    return False

# API Keys
# Google Custom Search API - Get free keys from:
# 1. Google Custom Search: https://developers.google.com/custom-search/v1/overview
# 2. Get API Key: https://console.cloud.google.com/apis/credentials
# 3. Create Search Engine: https://programmablesearchengine.google.com/
GOOGLE_API_KEY = "AIzaSyD25LLaab-B2TxBplJIoXaLBZCkbbYkE18"  # Free - 100 queries/day
GOOGLE_SEARCH_ENGINE_ID = "8071ce718ce6d436c"  # Custom Search Engine ID

# Fallback APIs
UNSPLASH_API_KEY = "unQ_ug9IS77J333DIJvN6L_lz5BMatvvyMMUjGbsb_8"  # Free - 50 requests/hour
PEXELS_API_KEY = "SvWRTahoo6ZoO9gkEkzKEtQoiBcHtgL5Fy7tAxDGBV0mmWmGThf0TugL"  # Free - 200 requests/hour

# Image search terms mapped to filenames
# Short, direct search terms for best accuracy
IMAGE_SEARCHES = {
    # ROAD SIGNS - Short and specific
    "stop-sign-octagon.jpg": "USA stop sign octagon",
    "yield-sign-triangle.jpg": "USA yield sign triangle",
    "warning-sign-diamond-yellow.jpg": "USA yellow diamond warning sign",
    "crossroad-warning-sign.jpg": "USA crossroad warning sign",
    "construction-sign-orange.jpg": "USA orange construction sign",
    "no-passing-pennant-sign.jpg": "USA pennant no passing sign",
    "railroad-crossing-round-sign.jpg": "USA railroad crossing round sign",
    "school-zone-pentagon-sign.jpg": "USA school zone pentagon sign",
    "prohibition-sign-red-circle-slash.jpg": "prohibition sign red circle slash",
    "speed-limit-sign-white-rectangular.jpg": "USA speed limit sign white",
    "do-not-enter-sign.jpg": "USA do not enter sign",
    "wrong-way-sign-red.jpg": "USA wrong way sign",
    "merge-sign-yellow-diamond.jpg": "USA merge sign diamond",
    "fluorescent-yellow-green-pedestrian-sign.jpg": "USA pedestrian crossing sign fluorescent",
    "blue-service-signs.jpg": "USA blue highway service signs",
    "green-guide-signs.jpg": "USA green highway guide signs",
    "brown-recreation-signs.jpg": "USA brown recreation signs",
    "road-signs-shapes-chart.jpg": "USA road signs shapes chart",

    # PAVEMENT MARKINGS - Short and direct
    "double-solid-yellow-lines.jpg": "double yellow lines road",
    "broken-yellow-line.jpg": "dashed yellow line road",
    "solid-yellow-line.jpg": "solid yellow line road",
    "white-lane-lines.jpg": "white lane lines highway",
    "white-edge-line.jpg": "white edge line road",
    "yellow-edge-line.jpg": "yellow edge line road",
    "double-white-lines.jpg": "double white lines road",
    "broken-white-line.jpg": "dashed white line road",
    "yellow-curb-parking.jpg": "yellow curb parking",
    "white-curb-parking.jpg": "white curb parking",
    "red-curb-no-parking.jpg": "red curb no parking",
    "blue-curb-disabled-parking.jpg": "blue handicap curb",
    "crosswalk-markings.jpg": "crosswalk stripes pavement",
    "stop-line-pavement.jpg": "stop line pavement",
    "chevron-markings.jpg": "chevron pavement markings",
    "lane-reduction-arrow.jpg": "lane merge arrow pavement",
    "shared-lane-markings-sharrow.jpg": "sharrow bike marking",
    "reversible-lane-markings.jpg": "reversible lane arrows",
    "railroad-crossing-pavement-markings.jpg": "railroad X pavement",
    "bike-lane-markings.jpg": "bike lane symbol pavement",
    "turn-lane-arrows.jpg": "turn arrows pavement",
    "yield-line-triangle-markings.jpg": "yield triangle pavement",
    "hov-lane-diamond.jpg": "HOV diamond pavement",
    "gore-area-striped.jpg": "gore area stripes highway",
    "rumble-strips.jpg": "rumble strips road",
    "words-on-pavement.jpg": "STOP SCHOOL pavement text",
    "painted-island.jpg": "painted island stripes",

    # TRAFFIC SIGNALS - Short and direct
    "red-traffic-light.jpg": "red traffic light",
    "yellow-traffic-light.jpg": "yellow traffic light",
    "green-traffic-light.jpg": "green traffic light",
    "flashing-red-light.jpg": "flashing red traffic light",
    "flashing-yellow-light.jpg": "flashing yellow traffic light",
    "green-arrow-signal.jpg": "green arrow traffic signal",
    "red-arrow-signal.jpg": "red arrow traffic signal",
    "yellow-arrow-signal.jpg": "yellow arrow traffic signal",
    "pedestrian-walk-signal.jpg": "walk signal pedestrian",
    "pedestrian-dont-walk-signal.jpg": "don't walk signal hand",
    "pedestrian-countdown-signal.jpg": "pedestrian countdown signal",
    "lane-control-signals.jpg": "lane control signals overhead",
    "traffic-signal-out.jpg": "dark traffic signal",
    "flashing-beacon.jpg": "yellow flashing beacon",
    "pedestrian-hybrid-beacon.jpg": "HAWK pedestrian beacon",

    # SCHOOL BUS & EMERGENCY - Short and direct
    "school-bus-red-lights.jpg": "school bus red lights stop",
    "emergency-vehicle-lights.jpg": "police emergency lights",
    "slow-moving-vehicle-triangle.jpg": "orange triangle slow vehicle",

    # VEHICLE EQUIPMENT - Short and direct
    "headlights-on-rainy-day.jpg": "car headlights rain",
    "tire-tread-depth.jpg": "tire tread depth penny",
    "windshield-wipers.jpg": "windshield wipers",
    "mirrors-adjusted.jpg": "car side mirror",
    "seat-belt-fastened.jpg": "seat belt buckled",
    "child-car-seat.jpg": "child car seat",
    "turn-signals.jpg": "turn signal blinker",
    "brake-lights.jpg": "brake lights red",
    "emergency-flashers.jpg": "hazard flashers lights",
    "horn.jpg": "car horn steering wheel",
    "parking-brake.jpg": "parking brake hand",
    "abs-light.jpg": "ABS warning light dashboard",

    # EMERGENCY SITUATIONS - Short and direct
    "hydroplaning-car.jpg": "car hydroplaning water",
    "tire-blowout.jpg": "tire blowout flat",
    "skidding-car.jpg": "car skidding ice",
    "vehicle-fire.jpg": "car fire engine",
    "accident-scene.jpg": "car accident crash",
    "roadside-breakdown.jpg": "car breakdown roadside",
    "emergency-kit.jpg": "car emergency kit",
    "warning-triangle-flares.jpg": "warning triangle road",

    # SHARING THE ROAD - Short and direct
    "bicycle-on-road.jpg": "bicycle road traffic",
    "motorcycle-on-road.jpg": "motorcycle highway",
    "large-truck-blind-spots.jpg": "truck blind spots diagram",
    "pedestrian-crossing.jpg": "pedestrian crosswalk",
    "construction-zone-workers.jpg": "construction workers road",
    "funeral-procession.jpg": "funeral procession cars",

    # PARKING & DISTANCES - Short and direct
    "fire-hydrant-parking.jpg": "fire hydrant parking",
    "crosswalk-parking-distance.jpg": "crosswalk parking distance",

    # INTERSECTIONS - Short and direct
    "four-way-stop.jpg": "four way stop",
    "roundabout-diagram.jpg": "roundabout diagram",
    "left-turn-yield.jpg": "left turn yield diagram",

    # SPECIAL SCENARIOS - Short and direct
    "drowsy-driving.jpg": "drowsy driver yawning",
    "distracted-driving-phone.jpg": "distracted driving phone",
    "following-distance.jpg": "safe following distance",
    "blind-spot-check.jpg": "blind spot check",
    "parallel-parking-diagram.jpg": "parallel parking diagram",
    "night-driving-headlights.jpg": "night driving headlights",
}


def download_from_google(search_query, filename, existing_hashes, max_retries=3):
    """Download image from Google Custom Search API"""
    if GOOGLE_API_KEY == "YOUR_GOOGLE_API_KEY" or GOOGLE_SEARCH_ENGINE_ID == "YOUR_SEARCH_ENGINE_ID":
        print("   ⚠️  Google API not configured, skipping...")
        return False

    url = "https://www.googleapis.com/customsearch/v1"
    params = {
        "key": GOOGLE_API_KEY,
        "cx": GOOGLE_SEARCH_ENGINE_ID,
        "q": search_query,
        "searchType": "image",
        "num": 1,
        "imgSize": "large",
        "imgType": "photo",
        "safe": "active",
        "rights": "cc_publicdomain|cc_attribute|cc_sharealike"  # Free to use images
    }

    for attempt in range(max_retries):
        try:
            print(f"   🔍 Searching Google Images: '{search_query}'")
            response = requests.get(url, params=params, timeout=10)
            response.raise_for_status()

            data = response.json()

            # Check for API errors
            if "error" in data:
                error_msg = data["error"].get("message", "Unknown error")
                if "quota" in error_msg.lower():
                    print(f"   ⚠️  Google API quota exceeded (100/day limit)")
                else:
                    print(f"   ❌ Google API error: {error_msg}")
                return False

            if "items" in data and len(data["items"]) > 0:
                image_url = data["items"][0]["link"]

                # Download the image
                print(f"   ⬇️  Downloading from Google Images...")
                img_response = requests.get(image_url, timeout=15, headers={
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                })
                img_response.raise_for_status()

                # Save the image
                filepath = IMAGES_DIR / filename
                with open(filepath, 'wb') as f:
                    f.write(img_response.content)

                # Check for duplicates
                duplicate_of = is_duplicate_image(filepath, existing_hashes)
                if duplicate_of:
                    print(f"   ⚠️  Duplicate of '{duplicate_of}' - Deleting...")
                    filepath.unlink()  # Delete the duplicate
                    return False

                # Update existing hashes
                new_hash = get_image_hash(filepath)
                if new_hash:
                    existing_hashes[filename] = new_hash

                print(f"   ✅ Saved: {filename}")
                return True
            else:
                print(f"   ⚠️  No results found on Google Images")
                return False

        except requests.exceptions.RequestException as e:
            print(f"   ❌ Error (attempt {attempt + 1}/{max_retries}): {e}")
            if attempt < max_retries - 1:
                time.sleep(2)

    return False


def download_from_unsplash(search_query, filename, existing_hashes, max_retries=3):
    """Download image from Unsplash API"""
    if UNSPLASH_API_KEY == "YOUR_UNSPLASH_ACCESS_KEY":
        print("❌ Please set your UNSPLASH_API_KEY in the script")
        return False

    url = "https://api.unsplash.com/search/photos"
    headers = {"Authorization": f"Client-ID {UNSPLASH_API_KEY}"}
    params = {
        "query": search_query,
        "per_page": 1,
        "orientation": "landscape"
    }

    for attempt in range(max_retries):
        try:
            print(f"   🔍 Searching Unsplash: '{search_query}'")
            response = requests.get(url, headers=headers, params=params, timeout=10)
            response.raise_for_status()

            data = response.json()
            if data["results"]:
                image_url = data["results"][0]["urls"]["regular"]

                # Download the image
                print(f"   ⬇️  Downloading from Unsplash...")
                img_response = requests.get(image_url, timeout=15)
                img_response.raise_for_status()

                # Save the image
                filepath = IMAGES_DIR / filename
                with open(filepath, 'wb') as f:
                    f.write(img_response.content)

                # Check for duplicates
                duplicate_of = is_duplicate_image(filepath, existing_hashes)
                if duplicate_of:
                    print(f"   ⚠️  Duplicate of '{duplicate_of}' - Deleting...")
                    filepath.unlink()  # Delete the duplicate
                    return False

                # Update existing hashes
                new_hash = get_image_hash(filepath)
                if new_hash:
                    existing_hashes[filename] = new_hash

                print(f"   ✅ Saved: {filename}")
                return True
            else:
                print(f"   ⚠️  No results found on Unsplash")
                return False

        except requests.exceptions.RequestException as e:
            print(f"   ❌ Error (attempt {attempt + 1}/{max_retries}): {e}")
            if attempt < max_retries - 1:
                time.sleep(2)

    return False


def download_from_pexels(search_query, filename, existing_hashes, max_retries=3):
    """Download image from Pexels API"""
    if PEXELS_API_KEY == "YOUR_PEXELS_API_KEY":
        print("❌ Please set your PEXELS_API_KEY in the script")
        return False

    url = "https://api.pexels.com/v1/search"
    headers = {"Authorization": PEXELS_API_KEY}
    params = {
        "query": search_query,
        "per_page": 1,
        "orientation": "landscape"
    }

    for attempt in range(max_retries):
        try:
            print(f"   🔍 Searching Pexels: '{search_query}'")
            response = requests.get(url, headers=headers, params=params, timeout=10)
            response.raise_for_status()

            data = response.json()
            if data["photos"]:
                image_url = data["photos"][0]["src"]["large"]

                # Download the image
                print(f"   ⬇️  Downloading from Pexels...")
                img_response = requests.get(image_url, timeout=15)
                img_response.raise_for_status()

                # Save the image
                filepath = IMAGES_DIR / filename
                with open(filepath, 'wb') as f:
                    f.write(img_response.content)

                # Check for duplicates
                duplicate_of = is_duplicate_image(filepath, existing_hashes)
                if duplicate_of:
                    print(f"   ⚠️  Duplicate of '{duplicate_of}' - Deleting...")
                    filepath.unlink()  # Delete the duplicate
                    return False

                # Update existing hashes
                new_hash = get_image_hash(filepath)
                if new_hash:
                    existing_hashes[filename] = new_hash

                print(f"   ✅ Saved: {filename}")
                return True
            else:
                print(f"   ⚠️  No results found on Pexels")
                return False

        except requests.exceptions.RequestException as e:
            print(f"   ❌ Error (attempt {attempt + 1}/{max_retries}): {e}")
            if attempt < max_retries - 1:
                time.sleep(2)

    return False


def main():
    """Main function to download all images"""
    print("🚗 DRIVER'S SEAT QUEEN - Image Downloader 👑")
    print("=" * 60)
    print(f"📁 Images will be saved to: {IMAGES_DIR.absolute()}")
    print(f"📊 Total images to download: {len(IMAGE_SEARCHES)}")
    print("=" * 60)
    print()

    # Scan for existing images
    print("🔍 Scanning for existing images...")
    existing_hashes = scan_existing_images()
    print(f"📦 Found {len(existing_hashes)} existing images in folder")
    print()

    # Check API keys
    google_configured = GOOGLE_API_KEY != "YOUR_GOOGLE_API_KEY" and GOOGLE_SEARCH_ENGINE_ID != "YOUR_SEARCH_ENGINE_ID"
    pexels_configured = PEXELS_API_KEY != "YOUR_PEXELS_API_KEY"
    unsplash_configured = UNSPLASH_API_KEY != "YOUR_UNSPLASH_ACCESS_KEY"

    if not (google_configured or pexels_configured or unsplash_configured):
        print("❌ ERROR: Please set at least one API key in the script!")
        print()
        print("Get free API keys from:")
        print("  • Google Custom Search: https://console.cloud.google.com/apis/credentials")
        print("  • Pexels: https://www.pexels.com/api/")
        print("  • Unsplash: https://unsplash.com/developers")
        return

    # Show which APIs are configured
    print("📡 Configured APIs:")
    if google_configured:
        print("  ✅ Google Custom Search (PRIMARY - 100 queries/day)")
    if pexels_configured:
        print("  ✅ Pexels (FALLBACK - 200 requests/hour)")
    if unsplash_configured:
        print("  ✅ Unsplash (FALLBACK - 50 requests/hour)")
    print()

    successful = 0
    failed = 0
    skipped = 0
    duplicates = 0

    for i, (filename, search_query) in enumerate(IMAGE_SEARCHES.items(), 1):
        print(f"\n[{i}/{len(IMAGE_SEARCHES)}] {filename}")

        # Skip if already exists
        filepath = IMAGES_DIR / filename
        if filepath.exists():
            print(f"   ⏭️  Already exists, skipping")
            skipped += 1
            continue

        # Try Google first (primary), then fallback to Pexels and Unsplash
        success = False
        was_duplicate = False

        # 1. Try Google Custom Search (PRIMARY)
        if google_configured:
            result = download_from_google(search_query, filename, existing_hashes)
            if result:
                success = True
                successful += 1
            elif result == False and "Duplicate" in str(result):
                was_duplicate = True
                duplicates += 1
            else:
                time.sleep(0.5)

        # 2. Try Pexels (FALLBACK 1)
        if not success and not was_duplicate and pexels_configured:
            print(f"   🔄 Trying Pexels...")
            result = download_from_pexels(search_query, filename, existing_hashes)
            if result:
                success = True
                successful += 1
            elif result == False and "Duplicate" in str(result):
                was_duplicate = True
                duplicates += 1
            else:
                time.sleep(0.5)

        # 3. Try Unsplash (FALLBACK 2)
        if not success and not was_duplicate and unsplash_configured:
            print(f"   🔄 Trying Unsplash...")
            result = download_from_unsplash(search_query, filename, existing_hashes)
            if result:
                success = True
                successful += 1
            elif result == False and "Duplicate" in str(result):
                was_duplicate = True
                duplicates += 1

        if not success and not was_duplicate:
            failed += 1
            print(f"   ❌ Failed to download {filename}")

        # Rate limiting - be nice to APIs
        time.sleep(1.5)

    # Summary
    print("\n" + "=" * 60)
    print("📊 DOWNLOAD SUMMARY")
    print("=" * 60)
    print(f"✅ Successful: {successful}")
    print(f"⏭️  Skipped (already exist): {skipped}")
    print(f"🔄 Duplicates detected & removed: {duplicates}")
    print(f"❌ Failed: {failed}")
    print(f"📁 Total in folder: {len(list(IMAGES_DIR.glob('*')))}")
    print()

    if duplicates > 0:
        print("✨ DUPLICATE DETECTION:")
        print(f"   Prevented {duplicates} duplicate images from being saved!")
        print("   This keeps your image folder clean and organized.")
        print()

    if failed > 0:
        print("💡 TIP: Failed downloads may need:")
        print("   • Different search terms")
        print("   • Manual download from Google Images")
        print("   • Checking API rate limits")
        print()

    print("\n🎉 Done! Images ready to use in your app!")


if __name__ == "__main__":
    main()
