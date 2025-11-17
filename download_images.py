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
# More specific search terms for better accuracy
IMAGE_SEARCHES = {
    # ROAD SIGNS - Very specific terms
    "stop-sign-octagon.jpg": "stop sign octagon red eight sided regulatory traffic sign USA",
    "yield-sign-triangle.jpg": "yield sign inverted triangle red white border traffic regulatory USA",
    "warning-sign-diamond-yellow.jpg": "yellow diamond warning caution sign blank traffic USA MUTCD",
    "crossroad-warning-sign.jpg": "yellow diamond crossroad warning sign black cross symbol USA",
    "construction-sign-orange.jpg": "orange diamond construction work zone road sign USA MUTCD",
    "no-passing-pennant-sign.jpg": "pennant no passing zone sign yellow black traffic USA",
    "railroad-crossing-round-sign.jpg": "railroad crossing advance warning sign round yellow black RR crossbuck USA",
    "school-zone-pentagon-sign.jpg": "school zone sign pentagon five sided yellow black children USA MUTCD",
    "prohibition-sign-red-circle-slash.jpg": "prohibition sign red circle diagonal slash no symbol traffic",
    "speed-limit-sign-white-rectangular.jpg": "speed limit sign white black regulatory rectangle USA MUTCD",
    "do-not-enter-sign.jpg": "do not enter sign red circle white horizontal bar USA traffic",
    "wrong-way-sign-red.jpg": "wrong way sign red rectangle white letters USA traffic regulatory",
    "merge-sign-yellow-diamond.jpg": "merge traffic sign yellow diamond merging lanes arrow USA MUTCD",
    "fluorescent-yellow-green-pedestrian-sign.jpg": "school pedestrian crossing sign fluorescent yellow green USA MUTCD",
    "blue-service-signs.jpg": "blue service guide signs hospital gas food lodging USA interstate",
    "green-guide-signs.jpg": "green guide direction signs highway exit street names USA interstate",
    "brown-recreation-signs.jpg": "brown recreation cultural interest signs park museum USA",
    "road-signs-shapes-chart.jpg": "traffic road signs shapes meanings chart poster octagon triangle diamond USA",

    # PAVEMENT MARKINGS - More specific
    "double-solid-yellow-lines.jpg": "double solid yellow center lines road pavement no passing zone USA",
    "broken-yellow-line.jpg": "broken dashed yellow center line road pavement passing allowed USA",
    "solid-yellow-line.jpg": "single solid yellow center line road pavement no passing USA",
    "white-lane-lines.jpg": "white dashed lane lines highway road pavement traffic USA",
    "white-edge-line.jpg": "solid white edge line road shoulder pavement marking USA",
    "yellow-edge-line.jpg": "solid yellow left edge line road pavement divided highway USA",
    "double-white-lines.jpg": "double solid white lines lane divider no crossing pavement USA",
    "broken-white-line.jpg": "broken dashed white lane line pavement highway USA",
    "yellow-curb-parking.jpg": "yellow painted curb no parking loading zone USA",
    "white-curb-parking.jpg": "white painted curb passenger loading limited parking USA",
    "red-curb-no-parking.jpg": "red painted curb no stopping no parking fire zone USA",
    "blue-curb-disabled-parking.jpg": "blue painted curb handicap disabled parking wheelchair USA",
    "crosswalk-markings.jpg": "pedestrian crosswalk white stripes parallel lines pavement USA",
    "stop-line-pavement.jpg": "white stop bar line pavement marking intersection USA",
    "chevron-markings.jpg": "white chevron arrow markings pavement keep right gore area USA",
    "lane-reduction-arrow.jpg": "lane ends merge arrow pavement marking road narrows USA",
    "shared-lane-markings-sharrow.jpg": "sharrow shared lane bicycle bike arrow pavement marking USA",
    "reversible-lane-markings.jpg": "reversible lane double headed arrows pavement marking USA",
    "railroad-crossing-pavement-markings.jpg": "railroad crossing X pavement white markings crossbuck USA",
    "bike-lane-markings.jpg": "bicycle bike lane white pavement symbol marking USA",
    "turn-lane-arrows.jpg": "turn lane arrows pavement white marking left right straight USA",
    "yield-line-triangle-markings.jpg": "yield line white triangles pavement marking intersection USA",
    "hov-lane-diamond.jpg": "HOV carpool lane white diamond pavement marking USA",
    "gore-area-striped.jpg": "gore area diagonal white stripes pavement highway exit ramp USA",
    "rumble-strips.jpg": "rumble strips grooved pavement shoulder road safety USA",
    "words-on-pavement.jpg": "pavement text white letters STOP SCHOOL road marking USA",
    "painted-island.jpg": "painted median island white diagonal stripes crosshatch pavement USA",

    # TRAFFIC SIGNALS - More specific
    "red-traffic-light.jpg": "red traffic light signal stop round lens intersection USA",
    "yellow-traffic-light.jpg": "yellow amber traffic light signal caution prepare stop USA",
    "green-traffic-light.jpg": "green traffic light signal go proceed intersection USA",
    "flashing-red-light.jpg": "flashing blinking red traffic light signal treat as stop sign USA",
    "flashing-yellow-light.jpg": "flashing blinking yellow traffic light caution signal USA",
    "green-arrow-signal.jpg": "green arrow turn signal protected left right traffic light USA",
    "red-arrow-signal.jpg": "red arrow traffic signal no turn stop prohibition USA",
    "yellow-arrow-signal.jpg": "yellow amber arrow traffic signal caution turning USA",
    "pedestrian-walk-signal.jpg": "pedestrian walk signal white walking person symbol crosswalk USA",
    "pedestrian-dont-walk-signal.jpg": "pedestrian don't walk raised hand signal orange red crosswalk USA",
    "pedestrian-countdown-signal.jpg": "pedestrian countdown timer numbers signal crossing seconds USA",
    "lane-control-signals.jpg": "overhead lane control signals green arrow red X reversible lanes USA",
    "traffic-signal-out.jpg": "dark blank traffic signal light power outage treat as stop USA",
    "flashing-beacon.jpg": "flashing yellow beacon warning light traffic signal school zone USA",
    "pedestrian-hybrid-beacon.jpg": "pedestrian hybrid beacon HAWK signal yellow red lights crosswalk USA",

    # SCHOOL BUS & EMERGENCY - More specific
    "school-bus-red-lights.jpg": "yellow school bus flashing red warning lights stop arm extended USA",
    "emergency-vehicle-lights.jpg": "police car emergency red blue flashing lights sirens USA",
    "slow-moving-vehicle-triangle.jpg": "orange fluorescent triangle slow moving vehicle emblem reflector USA",

    # VEHICLE EQUIPMENT - More specific
    "headlights-on-rainy-day.jpg": "car vehicle headlights on rain rainy wet weather driving USA",
    "tire-tread-depth.jpg": "tire tread depth gauge penny test worn bald check USA",
    "windshield-wipers.jpg": "windshield wiper blades rain glass clearing wet USA",
    "mirrors-adjusted.jpg": "car side rearview mirror adjusted proper position driver USA",
    "seat-belt-fastened.jpg": "seat belt safety belt fastened buckled click secure USA",
    "child-car-seat.jpg": "child infant car seat booster safety restraint USA",
    "turn-signals.jpg": "turn signal indicator blinker amber orange light USA",
    "brake-lights.jpg": "brake lights red tail lights stop lamp illuminated USA",
    "emergency-flashers.jpg": "emergency hazard flashers four-way blinkers warning lights USA",
    "horn.jpg": "car vehicle horn button steering wheel center USA",
    "parking-brake.jpg": "parking brake hand brake emergency brake lever pedal USA",
    "abs-light.jpg": "ABS anti-lock brake system warning light dashboard indicator USA",

    # EMERGENCY SITUATIONS - More specific
    "hydroplaning-car.jpg": "car vehicle hydroplaning water rain puddle wet road skidding USA",
    "tire-blowout.jpg": "tire blowout flat burst emergency tread separation USA",
    "skidding-car.jpg": "car vehicle skidding sliding loss control ice snow wet USA",
    "vehicle-fire.jpg": "car vehicle engine fire smoke flames emergency burning USA",
    "accident-scene.jpg": "car vehicle accident collision crash damaged scene USA",
    "roadside-breakdown.jpg": "car vehicle breakdown stopped roadside shoulder hazard emergency USA",
    "emergency-kit.jpg": "car emergency roadside safety kit first aid supplies flashlight USA",
    "warning-triangle-flares.jpg": "emergency warning triangle reflector road flares hazard USA",

    # SHARING THE ROAD - More specific
    "bicycle-on-road.jpg": "bicycle cyclist bike riding road traffic lane sharing USA",
    "motorcycle-on-road.jpg": "motorcycle motorbike rider highway road traffic lane USA",
    "large-truck-blind-spots.jpg": "semi truck tractor trailer blind spots no zone diagram illustration USA",
    "pedestrian-crossing.jpg": "pedestrian person walking crossing crosswalk zebra stripes street USA",
    "construction-zone-workers.jpg": "road construction zone workers orange cones barrels work area USA",
    "funeral-procession.jpg": "funeral procession convoy cars headlights flag escort USA",

    # PARKING & DISTANCES - More specific
    "fire-hydrant-parking.jpg": "fire hydrant red yellow no parking distance curb regulation USA",
    "crosswalk-parking-distance.jpg": "crosswalk pedestrian crossing parking distance regulation measurement USA",

    # INTERSECTIONS - More specific
    "four-way-stop.jpg": "four way all-way stop intersection traffic control USA",
    "roundabout-diagram.jpg": "roundabout traffic circle rotary diagram arrows yield USA",
    "left-turn-yield.jpg": "left turn yield oncoming traffic intersection diagram USA",

    # SPECIAL SCENARIOS - More specific
    "drowsy-driving.jpg": "drowsy tired sleepy driver yawning fatigue danger USA",
    "distracted-driving-phone.jpg": "distracted driving texting cell phone dangerous illegal USA",
    "following-distance.jpg": "safe following distance three second rule cars highway USA",
    "blind-spot-check.jpg": "blind spot check shoulder head turn mirror driver USA",
    "parallel-parking-diagram.jpg": "parallel parking steps diagram illustration curb tutorial USA",
    "night-driving-headlights.jpg": "night driving headlights dark road illuminated highway USA",
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
