"""
Image Downloader for Driver's Seat Queen
Downloads educational images for driving permit test questions
Uses free image APIs: Unsplash and Pexels
"""

import os
import json
import time
import requests
from pathlib import Path

# Configuration
IMAGES_DIR = Path("public/images")
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

# API Keys - Get free keys from:
# Unsplash: https://unsplash.com/developers
# Pexels: https://www.pexels.com/api/
UNSPLASH_API_KEY = "YOUR_UNSPLASH_ACCESS_KEY"  # Free - 50 requests/hour
PEXELS_API_KEY = "YOUR_PEXELS_API_KEY"  # Free - 200 requests/hour

# Image search terms mapped to filenames
IMAGE_SEARCHES = {
    # ROAD SIGNS
    "stop-sign-octagon.jpg": "red octagon stop sign traffic",
    "yield-sign-triangle.jpg": "yield sign triangle red white traffic",
    "warning-sign-diamond-yellow.jpg": "yellow diamond warning sign caution",
    "crossroad-warning-sign.jpg": "crossroad intersection warning sign yellow",
    "construction-sign-orange.jpg": "orange construction work zone sign",
    "no-passing-pennant-sign.jpg": "no passing zone pennant sign yellow",
    "railroad-crossing-round-sign.jpg": "railroad crossing round yellow sign RR",
    "school-zone-pentagon-sign.jpg": "school zone crossing pentagon sign",
    "prohibition-sign-red-circle-slash.jpg": "prohibition no entry red circle slash",
    "speed-limit-sign-white-rectangular.jpg": "speed limit sign white rectangular",
    "do-not-enter-sign.jpg": "do not enter sign red circle white bar",
    "wrong-way-sign-red.jpg": "wrong way sign red rectangular",
    "merge-sign-yellow-diamond.jpg": "merge sign yellow diamond traffic",
    "fluorescent-yellow-green-pedestrian-sign.jpg": "pedestrian crossing fluorescent yellow green sign",
    "blue-service-signs.jpg": "blue highway service signs gas food",
    "green-guide-signs.jpg": "green highway guide direction signs",
    "brown-recreation-signs.jpg": "brown recreation park signs",
    "road-signs-shapes-chart.jpg": "traffic road signs shapes chart diagram",

    # PAVEMENT MARKINGS
    "double-solid-yellow-lines.jpg": "double solid yellow lines road pavement",
    "broken-yellow-line.jpg": "broken dashed yellow center line road",
    "solid-yellow-line.jpg": "solid yellow center line road pavement",
    "white-lane-lines.jpg": "white lane lines highway road",
    "white-edge-line.jpg": "white edge line road shoulder",
    "yellow-edge-line.jpg": "yellow left edge line road",
    "double-white-lines.jpg": "double solid white lines lane divider",
    "broken-white-line.jpg": "broken dashed white lane line",
    "yellow-curb-parking.jpg": "yellow painted curb no parking",
    "white-curb-parking.jpg": "white painted curb limited parking",
    "red-curb-no-parking.jpg": "red painted curb no stopping",
    "blue-curb-disabled-parking.jpg": "blue painted curb handicap disabled parking",
    "crosswalk-markings.jpg": "pedestrian crosswalk markings white stripes",
    "stop-line-pavement.jpg": "white stop line pavement marking",
    "chevron-markings.jpg": "chevron markings pavement white stripes",
    "lane-reduction-arrow.jpg": "lane reduction merge arrow pavement",
    "shared-lane-markings-sharrow.jpg": "sharrow shared lane bicycle marking",
    "reversible-lane-markings.jpg": "reversible lane markings arrows",
    "railroad-crossing-pavement-markings.jpg": "railroad crossing X pavement markings",
    "bike-lane-markings.jpg": "bicycle lane markings pavement bike symbol",
    "turn-lane-arrows.jpg": "turn arrows pavement lane markings",
    "yield-line-triangle-markings.jpg": "yield line triangle pavement markings",
    "hov-lane-diamond.jpg": "HOV carpool lane diamond marking",
    "gore-area-striped.jpg": "gore area diagonal stripes highway exit",
    "rumble-strips.jpg": "rumble strips grooved pavement road",
    "words-on-pavement.jpg": "pavement text markings road STOP SCHOOL",
    "painted-island.jpg": "painted median island striped",

    # TRAFFIC SIGNALS
    "red-traffic-light.jpg": "red traffic light signal stop",
    "yellow-traffic-light.jpg": "yellow amber traffic light caution",
    "green-traffic-light.jpg": "green traffic light signal go",
    "flashing-red-light.jpg": "flashing red traffic light signal",
    "flashing-yellow-light.jpg": "flashing yellow traffic light caution",
    "green-arrow-signal.jpg": "green arrow traffic signal turn",
    "red-arrow-signal.jpg": "red arrow traffic signal no turn",
    "yellow-arrow-signal.jpg": "yellow arrow traffic signal caution",
    "pedestrian-walk-signal.jpg": "pedestrian walk signal white walking person",
    "pedestrian-dont-walk-signal.jpg": "pedestrian don't walk hand signal red",
    "pedestrian-countdown-signal.jpg": "pedestrian countdown timer signal crossing",
    "lane-control-signals.jpg": "lane control signals green arrow red X",
    "traffic-signal-out.jpg": "dark traffic signal power outage",
    "flashing-beacon.jpg": "flashing beacon traffic signal yellow",
    "pedestrian-hybrid-beacon.jpg": "pedestrian hybrid beacon HAWK signal",

    # SCHOOL BUS & EMERGENCY
    "school-bus-red-lights.jpg": "school bus flashing red lights stop arm",
    "emergency-vehicle-lights.jpg": "police car emergency lights flashing",
    "slow-moving-vehicle-triangle.jpg": "slow moving vehicle orange triangle reflector",

    # VEHICLE EQUIPMENT
    "headlights-on-rainy-day.jpg": "car headlights on rainy day driving",
    "tire-tread-depth.jpg": "tire tread depth worn check",
    "windshield-wipers.jpg": "windshield wipers rain blades",
    "mirrors-adjusted.jpg": "car side mirror rearview adjusted",
    "seat-belt-fastened.jpg": "seat belt fastened buckled safety",
    "child-car-seat.jpg": "child car seat infant safety",
    "turn-signals.jpg": "turn signal blinker indicator amber",
    "brake-lights.jpg": "brake lights red tail lights car",
    "emergency-flashers.jpg": "emergency hazard flashers lights blinking",
    "horn.jpg": "car horn steering wheel",
    "parking-brake.jpg": "parking brake hand brake emergency",
    "abs-light.jpg": "ABS warning light dashboard",

    # EMERGENCY SITUATIONS
    "hydroplaning-car.jpg": "car hydroplaning water rain wet road",
    "tire-blowout.jpg": "tire blowout burst flat emergency",
    "skidding-car.jpg": "car skidding sliding ice snow",
    "vehicle-fire.jpg": "car engine fire emergency smoke",
    "accident-scene.jpg": "car accident collision crash scene",
    "roadside-breakdown.jpg": "car breakdown roadside shoulder emergency",
    "emergency-kit.jpg": "car emergency kit first aid supplies",
    "warning-triangle-flares.jpg": "emergency warning triangle road flares",

    # SHARING THE ROAD
    "bicycle-on-road.jpg": "bicycle cyclist riding road traffic",
    "motorcycle-on-road.jpg": "motorcycle rider highway traffic",
    "large-truck-blind-spots.jpg": "semi truck blind spots no zone diagram",
    "pedestrian-crossing.jpg": "pedestrian crossing crosswalk street",
    "construction-zone-workers.jpg": "construction zone workers road orange cones",
    "funeral-procession.jpg": "funeral procession cars lights flag",

    # PARKING & DISTANCES
    "fire-hydrant-parking.jpg": "fire hydrant red no parking curb",
    "crosswalk-parking-distance.jpg": "crosswalk parking distance measurement",

    # INTERSECTIONS
    "four-way-stop.jpg": "four way stop intersection all directions",
    "roundabout-diagram.jpg": "roundabout traffic circle diagram arrows",
    "left-turn-yield.jpg": "left turn yield oncoming traffic intersection",

    # SPECIAL SCENARIOS
    "drowsy-driving.jpg": "drowsy tired driver yawning sleepy",
    "distracted-driving-phone.jpg": "distracted driving texting phone dangerous",
    "following-distance.jpg": "safe following distance cars highway",
    "blind-spot-check.jpg": "blind spot check shoulder mirror",
    "parallel-parking-diagram.jpg": "parallel parking diagram steps illustration",
    "night-driving-headlights.jpg": "night driving headlights dark road",
}


def download_from_unsplash(search_query, filename, max_retries=3):
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


def download_from_pexels(search_query, filename, max_retries=3):
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

    # Check API keys
    if UNSPLASH_API_KEY == "YOUR_UNSPLASH_ACCESS_KEY" and PEXELS_API_KEY == "YOUR_PEXELS_API_KEY":
        print("❌ ERROR: Please set at least one API key in the script!")
        print()
        print("Get free API keys from:")
        print("  • Unsplash: https://unsplash.com/developers")
        print("  • Pexels: https://www.pexels.com/api/")
        return

    successful = 0
    failed = 0
    skipped = 0

    for i, (filename, search_query) in enumerate(IMAGE_SEARCHES.items(), 1):
        print(f"\n[{i}/{len(IMAGE_SEARCHES)}] {filename}")

        # Skip if already exists
        filepath = IMAGES_DIR / filename
        if filepath.exists():
            print(f"   ⏭️  Already exists, skipping")
            skipped += 1
            continue

        # Try Pexels first (higher rate limit), then Unsplash
        success = False

        if PEXELS_API_KEY != "YOUR_PEXELS_API_KEY":
            success = download_from_pexels(search_query, filename)
            if success:
                successful += 1
            else:
                time.sleep(1)  # Rate limiting

        if not success and UNSPLASH_API_KEY != "YOUR_UNSPLASH_ACCESS_KEY":
            print(f"   🔄 Trying Unsplash...")
            success = download_from_unsplash(search_query, filename)
            if success:
                successful += 1

        if not success:
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
    print(f"❌ Failed: {failed}")
    print(f"📁 Total in folder: {len(list(IMAGES_DIR.glob('*')))}")
    print()

    if failed > 0:
        print("💡 TIP: Failed downloads may need:")
        print("   • Different search terms")
        print("   • Manual download from Google Images")
        print("   • Checking API rate limits")

    print("\n🎉 Done! Images ready to use in your app!")


if __name__ == "__main__":
    main()
