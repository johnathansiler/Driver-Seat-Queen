// Florida Driver's Permit Test Questions - 2025
// Test format: 50 questions total (45 road rules + 5 road signs), need 40 correct (80%) to pass

export const floridaQuestions = [
  {
    id: 1,
    type: 'multiple-choice',
    category: 'road-rules',
    question: "What is the speed limit in a school zone in Florida?",
    options: [
      "15 mph",
      "20 mph",
      "25 mph",
      "30 mph"
    ],
    correct: 1,
    explanation: "Florida school zones have a 20 mph speed limit when children are present or when the school zone sign is flashing."
  },
  {
    id: 2,
    category: 'road-rules',
    question: "When must you use your headlights in Florida?",
    options: [
      "Only at night",
      "From sunset to sunrise and during rain",
      "Only during heavy rain",
      "Whenever you feel like it"
    ],
    correct: 1,
    explanation: "Florida law requires headlights from sunset to sunrise and when visibility is less than 1,000 feet (like during rain)."
  },
  {
    id: 3,
    category: 'road-rules',
    question: "What should you do when approaching a stopped school bus with flashing red lights?",
    options: [
      "Slow down and proceed with caution",
      "Stop at least 20 feet away",
      "Change lanes and pass quickly",
      "Honk your horn to alert the driver"
    ],
    correct: 1,
    explanation: "You must stop at least 20 feet away from a school bus with flashing red lights, no matter which direction you're traveling (unless there's a physical barrier)."
  },
  {
    id: 4,
    category: 'road-rules',
    question: "What is the maximum speed limit on Florida highways unless otherwise posted?",
    options: [
      "55 mph",
      "65 mph",
      "70 mph",
      "75 mph"
    ],
    correct: 2,
    explanation: "The maximum speed limit on Florida highways is 70 mph unless signs indicate otherwise."
  },
  {
    id: 5,
    category: 'road-rules',
    question: "How many feet before a turn must you signal in Florida?",
    options: [
      "50 feet",
      "75 feet",
      "100 feet",
      "150 feet"
    ],
    correct: 2,
    explanation: "Florida law requires you to signal at least 100 feet before making a turn."
  },
  {
    id: 6,
    category: 'road-rules',
    question: "If you're under 21 and have a BAC of ____ or higher, your license will be suspended.",
    options: [
      "0.00%",
      "0.02%",
      "0.05%",
      "0.08%"
    ],
    correct: 1,
    explanation: "Florida has a zero-tolerance policy. Drivers under 21 with a BAC of 0.02% or higher face license suspension."
  },
  {
    id: 7,
    category: 'road-rules',
    question: "What does a solid yellow line on your side of the road mean?",
    options: [
      "You can pass anytime",
      "You can pass if it's safe",
      "Do not pass",
      "Passing is recommended"
    ],
    correct: 2,
    explanation: "A solid yellow line on your side means you cannot pass other vehicles."
  },
  {
    id: 10,
    category: 'road-rules',
    question: "What is the minimum following distance you should maintain in good weather?",
    options: [
      "1 second",
      "2 seconds",
      "3 seconds",
      "4 seconds"
    ],
    correct: 2,
    explanation: "The 3-second rule is the minimum safe following distance in good weather conditions."
  },
  {
    id: 11,
    category: 'road-rules',
    question: "When entering a highway from an entrance ramp, you should:",
    options: [
      "Stop and wait for an opening",
      "Slow down to check traffic",
      "Accelerate to match highway speed",
      "Enter slowly and speed up gradually"
    ],
    correct: 2,
    explanation: "You should use the entrance ramp to accelerate to highway speed and merge smoothly with traffic."
  },
  {
    id: 12,
    category: 'road-rules',
    question: "What does Florida's Move Over Law require?",
    options: [
      "Move over for all slow vehicles",
      "Move over or slow down for emergency vehicles and tow trucks",
      "Always drive in the right lane",
      "Change lanes every mile"
    ],
    correct: 1,
    explanation: "Florida's Move Over Law requires drivers to move over a lane (or slow down 20 mph below the speed limit) when approaching emergency vehicles, law enforcement, tow trucks, and utility vehicles with flashing lights."
  },
  {
    id: 13,
    category: 'road-rules',
    question: "At an intersection with a flashing yellow light, you should:",
    options: [
      "Stop completely",
      "Slow down and proceed with caution",
      "Speed up to clear the intersection",
      "Treat it like a stop sign"
    ],
    correct: 1,
    explanation: "A flashing yellow light means slow down and proceed with caution."
  },
  {
    id: 14,
    category: 'road-rules',
    question: "Which lane should you be in to make a left turn from a two-way street?",
    options: [
      "The right lane",
      "The lane nearest to the center line",
      "Any lane",
      "The middle lane"
    ],
    correct: 1,
    explanation: "When turning left from a two-way street, start in the lane nearest to the center line."
  },
  {
    id: 16,
    category: 'road-rules',
    question: "In Florida, it's illegal to text while driving:",
    options: [
      "Only for drivers under 18",
      "Only in school zones",
      "For all drivers",
      "Only on highways"
    ],
    correct: 2,
    explanation: "Florida law prohibits texting while driving for all drivers. It's a primary offense, meaning you can be pulled over just for texting."
  },
  {
    id: 17,
    category: 'road-rules',
    question: "When should you use your high beam headlights?",
    options: [
      "In the city at night",
      "Behind other vehicles",
      "On open country roads when no vehicles are approaching",
      "During heavy rain"
    ],
    correct: 2,
    explanation: "Use high beams on open country roads when no other vehicles are within 500 feet. Dim them for oncoming traffic and when following other vehicles."
  },
  {
    id: 18,
    category: 'road-rules',
    question: "What is the speed limit in residential areas in Florida if not posted?",
    options: [
      "20 mph",
      "25 mph",
      "30 mph",
      "35 mph"
    ],
    correct: 2,
    explanation: "The speed limit in residential areas in Florida is 30 mph unless otherwise posted."
  },
  {
    id: 19,
    category: 'road-rules',
    question: "If you approach an intersection where traffic lights are not working, you should:",
    options: [
      "Go through quickly",
      "Treat it as a four-way stop",
      "Yield to traffic from the right only",
      "Honk and proceed"
    ],
    correct: 1,
    explanation: "When traffic signals are not working, treat the intersection as a four-way stop."
  },
  {
    id: 20,
    category: 'road-rules',
    question: "You must yield to pedestrians in a crosswalk:",
    options: [
      "Only if they have the walk signal",
      "Only at marked crosswalks",
      "At all crosswalks, marked or unmarked",
      "Only during daylight hours"
    ],
    correct: 2,
    explanation: "Florida law requires drivers to yield to pedestrians in all crosswalks, whether marked or unmarked."
  },
  {
    id: 21,
    category: 'road-signs',
    question: "An octagon-shaped sign means:",
    options: [
      "Yield",
      "Stop",
      "Slow down",
      "No passing"
    ],
    correct: 1,
    explanation: "An octagon (8-sided) shaped sign is always a STOP sign."
  },
  {
    id: 22,
    category: 'road-signs',
    question: "A yellow diamond-shaped sign means:",
    options: [
      "School zone",
      "Railroad crossing",
      "Warning or caution",
      "Construction ahead"
    ],
    correct: 2,
    explanation: "Yellow diamond-shaped signs are warning signs that alert you to potential hazards ahead."
  },
  {
    id: 23,
    category: 'road-signs',
    question: "An orange sign indicates:",
    options: [
      "Detour",
      "Construction or work zone",
      "School zone",
      "Hospital zone"
    ],
    correct: 1,
    explanation: "Orange signs indicate construction or work zones ahead."
  },
  {
    id: 24,
    category: 'road-signs',
    question: "A pennant-shaped sign on the left side of the road means:",
    options: [
      "School zone",
      "No passing zone",
      "Narrow bridge",
      "Sharp turn"
    ],
    correct: 1,
    explanation: "A pennant (triangular flag) shaped sign indicates the beginning of a no-passing zone."
  },
  {
    id: 25,
    category: 'road-signs',
    question: "A round sign means:",
    options: [
      "Stop",
      "Yield",
      "Railroad crossing",
      "Merge"
    ],
    correct: 2,
    explanation: "A round sign indicates a railroad crossing ahead."
  },
  {
    id: 29,
    category: 'road-rules',
    question: "What does a green arrow appearing with a red light mean?",
    options: [
      "Stop completely",
      "You may go in the direction of the arrow",
      "Yield before turning",
      "The light is broken"
    ],
    correct: 1,
    explanation: "A green arrow means you may proceed in the direction of the arrow, even if the main light is red."
  },
  {
    id: 30,
    category: 'road-rules',
    question: "When two vehicles arrive at an intersection at the same time, who has the right-of-way?",
    options: [
      "The vehicle on the left",
      "The vehicle on the right",
      "The larger vehicle",
      "Whoever honks first"
    ],
    correct: 1,
    explanation: "When two vehicles arrive at an intersection simultaneously, the vehicle on the right has the right-of-way."
  },
  {
    id: 31,
    category: 'road-rules',
    question: "In Florida, you can make a right turn on red after stopping:",
    options: [
      "Never",
      "Only during the day",
      "Unless a sign prohibits it",
      "Only if no cars are coming"
    ],
    correct: 2,
    explanation: "In Florida, you can turn right on red after coming to a complete stop, unless a sign prohibits it."
  },
  {
    id: 38,
    category: 'road-rules',
    question: "Florida law requires child safety seats for children:",
    options: [
      "Under age 3",
      "Under age 5",
      "Under age 6",
      "Under age 8"
    ],
    correct: 1,
    explanation: "Florida law requires children age 5 and under to be secured in a crash-tested, federally approved child restraint device."
  },
  {
    id: 40,
    category: 'road-rules',
    question: "What should you do if an emergency vehicle is approaching from behind with lights and sirens?",
    options: [
      "Speed up to get out of the way",
      "Stop immediately where you are",
      "Pull to the right and stop",
      "Change lanes quickly"
    ],
    correct: 2,
    explanation: "When an emergency vehicle approaches from behind, pull to the right side of the road and stop."
  },
  {
    id: 41,
    category: 'road-rules',
    question: "Blood alcohol concentration (BAC) depends on:",
    options: [
      "How fast you drink only",
      "Your weight, amount consumed, and time",
      "Only what you drink",
      "If you eat while drinking"
    ],
    correct: 1,
    explanation: "BAC is affected by body weight, amount of alcohol consumed, time period of consumption, and other factors."
  },
  {
    id: 42,
    category: 'road-rules',
    question: "The Florida Safety Belt Law requires:",
    options: [
      "Only the driver to wear a seatbelt",
      "Driver and front seat passengers to wear seatbelts",
      "Everyone in the vehicle to wear seatbelts",
      "Only passengers under 18 to wear seatbelts"
    ],
    correct: 2,
    explanation: "Florida law requires all passengers in a vehicle to wear seatbelts or appropriate restraints."
  },
  {
    id: 43,
    category: 'road-rules',
    question: "You should check your blind spots:",
    options: [
      "Only when changing lanes on highways",
      "Before changing lanes or merging",
      "Only when backing up",
      "Once every few minutes"
    ],
    correct: 1,
    explanation: "Always check your blind spots before changing lanes, merging, or making turns."
  },
  {
    id: 46,
    category: 'road-rules',
    question: "On a four-lane highway, which lane should slower traffic use?",
    options: [
      "Left lane",
      "Right lane",
      "Any lane",
      "Center lane"
    ],
    correct: 1,
    explanation: "Slower traffic should use the right lane. The left lane is for passing."
  },
  {
    id: 48,
    category: 'road-rules',
    question: "When approaching a railroad crossing with flashing lights:",
    options: [
      "Speed up to cross quickly",
      "Slow down and look both ways",
      "Stop at least 15 feet from the nearest rail",
      "Honk your horn"
    ],
    correct: 2,
    explanation: "Stop at least 15 feet from the nearest rail when lights are flashing, gates are down, or a train is approaching."
  },
  {
    id: 50,
    category: 'road-rules',
    type: 'multiple-choice',
    question: "Driving while drowsy is:",
    options: [
      "Safe if you drink coffee",
      "Only dangerous on highways",
      "As dangerous as drunk driving",
      "Only dangerous at night"
    ],
    correct: 2,
    explanation: "Drowsy driving significantly impairs reaction time and judgment, making it as dangerous as drunk driving."
  },
  // TRUE/FALSE QUESTIONS
  {
    id: 52,
    type: 'true-false',
    category: 'road-rules',
    question: "In Florida, you must always wear your seatbelt, even in the back seat.",
    correct: true,
    explanation: "True! Florida law requires all vehicle occupants to wear seatbelts, regardless of seating position."
  },
  {
    id: 53,
    type: 'true-false',
    category: 'road-signs',
    question: "A yellow traffic light means you should speed up to get through the intersection.",
    correct: false,
    explanation: "False! A yellow light means slow down and prepare to stop. It signals that the light is about to turn red."
  },
  {
    id: 57,
    type: 'true-false',
    category: 'road-signs',
    question: "A solid white line means you should not change lanes.",
    correct: true,
    explanation: "True! Solid white lines indicate lane changes are discouraged. Double solid white lines mean lane changes are prohibited."
  },
  // MATCHING QUESTIONS
  {
    id: 59,
    type: 'matching',
    category: 'road-signs',
    question: "Match each road sign shape with its meaning:",
    pairs: [
      { left: "Octagon (8 sides)", right: "Stop" },
      { left: "Triangle (upside down)", right: "Yield" },
      { left: "Diamond", right: "Warning" },
      { left: "Rectangle", right: "Guide/Information" }
    ],
    explanation: "Each sign shape has a specific meaning: Octagon = Stop, Triangle = Yield, Diamond = Warning, Rectangle = Guide/Information."
  },
  {
    id: 60,
    type: 'matching',
    category: 'road-rules',
    question: "Match each speed limit to the correct location in Florida:",
    pairs: [
      { left: "School Zone", right: "20 mph" },
      { left: "Residential Area", right: "30 mph" },
      { left: "Rural Interstate", right: "70 mph" },
      { left: "Urban Interstate", right: "65 mph" }
    ],
    explanation: "Speed limits vary by location: School zones (20 mph), Residential (30 mph), Rural Interstate (70 mph), Urban Interstate (65 mph)."
  },
  {
    id: 61,
    type: 'matching',
    category: 'road-signs',
    question: "Match each sign color with what it typically indicates:",
    pairs: [
      { left: "Red", right: "Stop/Prohibition" },
      { left: "Yellow", right: "Warning/Caution" },
      { left: "Orange", right: "Construction/Work Zone" },
      { left: "Green", right: "Direction/Guide" }
    ],
    explanation: "Sign colors have meanings: Red (stop/prohibition), Yellow (warning), Orange (construction), Green (direction/guide), Blue (services)."
  },

  // ROAD SIGNS - MULTIPLE CHOICE QUESTIONS
  {
    id: 63,
    type: 'multiple-choice',
    category: 'road-signs',
    question: "What does a red octagon (8-sided) sign mean?",
    options: [
      "Yield to traffic",
      "Stop completely",
      "Warning ahead",
      "No parking"
    ],
    correct: 1,
    explanation: "A red octagon sign is the STOP sign. You must come to a complete stop at the stop line, crosswalk, or before entering the intersection."
  },
  {
    id: 65,
    type: 'multiple-choice',
    category: 'road-signs',
    question: "What does a triangular (upside-down triangle) sign mean?",
    options: [
      "Stop",
      "Yield",
      "Merge",
      "No passing"
    ],
    correct: 1,
    explanation: "The upside-down triangle is the YIELD sign. You must slow down and give the right-of-way to pedestrians and vehicles in or approaching the intersection."
  },
  {
    id: 66,
    type: 'multiple-choice',
    category: 'road-signs',
    question: "What does a round sign indicate?",
    options: [
      "School zone",
      "Railroad crossing ahead",
      "Pedestrian crossing",
      "Hospital zone"
    ],
    correct: 1,
    explanation: "Round signs warn of railroad crossings. You must slow down, look both ways, and be prepared to stop if a train is approaching."
  },
  {
    id: 67,
    type: 'multiple-choice',
    category: 'road-signs',
    question: "What does a pentagon-shaped (5-sided) sign indicate?",
    options: [
      "Railroad crossing",
      "School zone/school crossing",
      "Hospital zone",
      "Construction zone"
    ],
    correct: 1,
    explanation: "Pentagon-shaped signs mark school zones and school crossings. Drive with extra caution and watch for children."
  },
  {
    id: 71,
    type: 'multiple-choice',
    category: 'road-signs',
    question: "What does a sign with a red circle and red slash mean?",
    options: [
      "Caution ahead",
      "Prohibited/not allowed",
      "One way",
      "Detour"
    ],
    correct: 1,
    explanation: "A red circle with a red diagonal slash means 'NO' or prohibited. Whatever is shown in the sign is not allowed."
  },
  {
    id: 72,
    type: 'multiple-choice',
    category: 'road-signs',
    question: "What does a white rectangular sign typically indicate?",
    options: [
      "Warning",
      "Guide information",
      "Regulatory requirement",
      "Services available"
    ],
    correct: 2,
    explanation: "White rectangular signs are regulatory signs. They tell you about laws and regulations you must obey, like speed limits and turn restrictions."
  },

  // ROAD SIGNS - TRUE/FALSE QUESTIONS
  {
    id: 74,
    type: 'true-false',
    category: 'road-signs',
    question: "Yellow signs always indicate a warning or caution.",
    correct: true,
    explanation: "True! Yellow (or fluorescent yellow-green) signs warn you of potential hazards, changes in road conditions, or advise caution."
  },
  {
    id: 75,
    type: 'true-false',
    category: 'road-signs',
    question: "A pennant-shaped sign indicates a no-passing zone.",
    correct: true,
    explanation: "True! The pennant (triangular flag) shape on the left side of the road marks the beginning of a no-passing zone."
  },
  {
    id: 77,
    type: 'true-false',
    category: 'road-signs',
    question: "You can ignore warning signs if traffic is light.",
    correct: false,
    explanation: "False! Warning signs alert you to genuine hazards. Always heed warning signs regardless of traffic conditions."
  },

  // ROAD SIGNS - FILL IN THE BLANK QUESTIONS
  {
    id: 78,
    type: 'fill-in-blank',
    category: 'road-signs',
    question: "How many sides does a STOP sign have?",
    correctAnswer: "8",
    explanation: "A STOP sign is an octagon with 8 sides. It's the only sign with this shape, making it easily recognizable even when covered with snow."
  },
  {
    id: 80,
    type: 'fill-in-blank',
    category: 'road-signs',
    question: "How many sides does a YIELD sign have?",
    correctAnswer: "3",
    explanation: "A YIELD sign is a triangle (3 sides) pointing downward. It's the only downward-pointing triangular sign."
  },

  // ROAD SIGNS - MULTIPLE SELECT QUESTIONS
  {
    id: 81,
    type: 'multiple-select',
    category: 'road-signs',
    question: "Which of the following are regulatory signs? (Select all that apply)",
    options: [
      "Speed Limit Sign",
      "Curve Ahead Warning",
      "Stop Sign",
      "No U-Turn Sign",
      "Railroad Crossing"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Regulatory signs include Speed Limit, Stop, and No U-Turn signs. Curve Ahead is a warning sign, and Railroad Crossing is also a warning sign."
  },
  {
    id: 83,
    type: 'multiple-select',
    category: 'road-signs',
    question: "Which of these sign shapes indicate you must take action? (Select all that apply)",
    options: [
      "Octagon (8 sides)",
      "Circle",
      "Upside-down Triangle",
      "Diamond",
      "Rectangle"
    ],
    correctAnswers: [0, 2],
    explanation: "Octagon (STOP) and upside-down triangle (YIELD) require immediate driver action. Circles are for railroads, diamonds are warnings, rectangles are regulatory or guide."
  },

  // ROAD SIGNS - MATCHING QUESTIONS
  {
    id: 84,
    type: 'matching',
    category: 'road-signs',
    question: "Match each sign shape to its primary purpose:",
    pairs: [
      { left: "Octagon", right: "Stop" },
      { left: "Upside-down Triangle", right: "Yield" },
      { left: "Pentagon", right: "School Zone" },
      { left: "Circle", right: "Railroad" }
    ],
    explanation: "Sign shapes have specific meanings: Octagon=Stop, Upside-down Triangle=Yield, Pentagon=School Zone, Circle=Railroad Crossing."
  },
  {
    id: 85,
    type: 'matching',
    category: 'road-signs',
    question: "Match each sign color to what it indicates:",
    pairs: [
      { left: "Red", right: "Stop/Prohibition" },
      { left: "Green", right: "Direction/Guide" },
      { left: "Blue", right: "Motorist Services" },
      { left: "Brown", right: "Recreation/Parks" }
    ],
    explanation: "Sign colors convey information: Red=Stop/Prohibition, Green=Direction/Guide, Blue=Services, Brown=Recreation/Parks."
  },

  // MORE SPECIFIC ROAD SIGNS QUESTIONS
  {
    id: 87,
    type: 'multiple-choice',
    category: 'road-signs',
    question: "What does a 'Do Not Enter' sign look like?",
    options: [
      "Red octagon with white letters",
      "White rectangle with red circle",
      "Red circle with white horizontal bar",
      "Yellow diamond with black symbol"
    ],
    correct: 2,
    explanation: "A 'Do Not Enter' sign is a red circle with a white horizontal bar. It prohibits entry to a road or area."
  },
  {
    id: 88,
    type: 'multiple-choice',
    category: 'road-signs',
    question: "What does a 'Wrong Way' sign indicate?",
    options: [
      "You are going in the correct direction",
      "You are heading the wrong direction on a one-way street or ramp",
      "Road construction ahead",
      "Detour required"
    ],
    correct: 1,
    explanation: "A 'Wrong Way' sign (red rectangle with white letters) means you are going the wrong direction, typically on a one-way street or highway ramp. Turn around immediately!"
  },
  {
    id: 92,
    type: 'multiple-choice',
    category: 'road-signs',
    question: "What does a 'Crossroad' warning sign look like?",
    options: [
      "Circle",
      "Yellow diamond with cross symbol",
      "Red octagon",
      "Green rectangle"
    ],
    correct: 1,
    explanation: "A crossroad sign is a yellow diamond with a cross (+) symbol, warning that a road crosses the highway ahead."
  },
  {
    id: 93,
    type: 'true-false',
    category: 'road-signs',
    question: "A 'Merge' sign means you have the right-of-way over traffic already on the highway.",
    correct: false,
    explanation: "False! When you see a merge sign, you must yield to traffic already on the highway. Adjust your speed to merge safely into the flow of traffic."
  },
  {
    id: 94,
    type: 'true-false',
    category: 'road-signs',
    question: "A fluorescent yellow-green sign indicates a school zone or pedestrian crossing.",
    correct: true,
    explanation: "True! Fluorescent yellow-green signs are used for school zones, school crossings, and pedestrian crossings to increase visibility and awareness."
  },
  {
    id: 95,
    type: 'multiple-select',
    category: 'road-signs',
    question: "Which signs require you to come to a complete stop? (Select all that apply)",
    options: [
      "Stop Sign",
      "Yield Sign",
      "Railroad Crossing with flashing lights",
      "School Bus with flashing red lights",
      "Merge Sign"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "You must stop completely for: Stop signs, railroad crossings with flashing lights/gates, and school buses with flashing red lights. Yield means slow and give way, merge means blend with traffic."
  },

  // PAVEMENT MARKINGS QUESTIONS
  {
    id: 96,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What does a solid yellow line on your side of the center line mean?",
    options: [
      "You may pass if safe",
      "Do not pass",
      "Passing zone ends ahead",
      "Two-way traffic"
    ],
    correct: 1,
    explanation: "A solid yellow line on your side means you cannot pass. If there's a broken yellow line on your side, you may pass when safe."
  },
  {
    id: 97,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What do white arrows painted on the pavement mean?",
    options: [
      "Decoration only",
      "Shows which direction traffic in the lane must go",
      "Indicates parking area",
      "School zone marker"
    ],
    correct: 1,
    explanation: "White arrows show the direction you must travel in that lane. You must follow these directional arrows."
  },
  {
    id: 98,
    type: 'true-false',
    category: 'pavement-markings',
    question: "🛣️ A double solid white line means you can change lanes if it's safe.",
    correct: false,
    explanation: "False! Double solid white lines mean lane changes are prohibited. A single solid white line discourages lane changes but doesn't prohibit them."
  },
  {
    id: 99,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What does a white stop line (stop bar) indicate?",
    options: [
      "Suggested stopping point",
      "Where you must stop before the intersection",
      "Parking boundary",
      "Lane divider"
    ],
    correct: 1,
    explanation: "The white stop line marks where you must stop your vehicle. Stop before the line, not on or past it."
  },
  {
    id: 100,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What do yellow crosshatch markings (diagonal lines) in the road indicate?",
    options: [
      "Parking area",
      "Passing zone",
      "Do not enter this area",
      "Bus stop"
    ],
    correct: 2,
    explanation: "Yellow crosshatch markings indicate an area where you should not drive. These are often used to separate traffic or mark hazardous areas."
  },

  // TRAFFIC SIGNALS QUESTIONS
  {
    id: 101,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What must you do at a flashing yellow traffic light?",
    options: [
      "Stop completely",
      "Slow down and proceed with caution",
      "Speed up to clear the intersection",
      "Treat it like a stop sign"
    ],
    correct: 1,
    explanation: "A flashing yellow light means slow down and proceed with caution. Look for cross traffic and pedestrians."
  },
  {
    id: 102,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What does a flashing red traffic light mean?",
    options: [
      "Slow down",
      "Yield to traffic",
      "Stop, then proceed when safe (treat as stop sign)",
      "Light is broken, ignore it"
    ],
    correct: 2,
    explanation: "A flashing red light means the same as a stop sign: come to a complete stop, yield to traffic and pedestrians, then proceed when safe."
  },
  {
    id: 103,
    type: 'true-false',
    category: 'traffic-signals',
    question: "🚦 You can turn right on a red light in Florida after stopping, unless a sign prohibits it.",
    correct: true,
    explanation: "True! In Florida, you may turn right on red after coming to a complete stop and yielding to traffic and pedestrians, unless a 'No Turn on Red' sign is posted."
  },
  {
    id: 104,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What does a green arrow traffic signal mean?",
    options: [
      "Proceed with caution",
      "You may proceed in the direction of the arrow (protected turn)",
      "Yield to oncoming traffic",
      "Signal is malfunctioning"
    ],
    correct: 1,
    explanation: "A green arrow gives you the right-of-way to make a protected turn in the direction of the arrow. Oncoming traffic should be stopped."
  },
  {
    id: 105,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What should you do when approaching a traffic light that has been green for a while?",
    options: [
      "Speed up to make it through",
      "Maintain speed",
      "Be prepared to stop, it may change soon",
      "Honk your horn"
    ],
    correct: 2,
    explanation: "A light that has been green for a while (called a 'stale green') may change soon. Be prepared to stop safely."
  },

  // SAFE DRIVING QUESTIONS
  {
    id: 106,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 What is the minimum safe following distance in good weather?",
    options: [
      "1 second",
      "2 seconds",
      "3 seconds",
      "5 seconds"
    ],
    correct: 2,
    explanation: "Use the 3-second rule in good weather. Pick a fixed point, and when the car ahead passes it, you should be able to count to 3 before reaching that same point."
  },
  {
    id: 107,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 When should you increase your following distance?",
    options: [
      "Only at night",
      "In bad weather, poor visibility, or when following large vehicles",
      "Never, 3 seconds is always enough",
      "Only on highways"
    ],
    correct: 1,
    explanation: "Increase following distance to 4+ seconds in rain, fog, night driving, or when following motorcycles or large vehicles that block your view."
  },
  {
    id: 108,
    type: 'true-false',
    category: 'safe-driving',
    question: "🦺 Texting while driving is illegal in Florida.",
    correct: true,
    explanation: "True! Florida law prohibits texting while driving. It's a primary offense, meaning officers can pull you over just for texting."
  },
  {
    id: 109,
    type: 'multiple-select',
    category: 'safe-driving',
    question: "🦺 Which of these are defensive driving techniques? (Select all that apply)",
    options: [
      "Scanning ahead for hazards",
      "Maintaining space around your vehicle",
      "Driving at the same speed as traffic",
      "Expecting other drivers to make mistakes",
      "Tailgating to keep traffic moving"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Defensive driving includes scanning ahead, maintaining space cushions, and expecting the unexpected. Tailgating is dangerous, and you should drive at a safe speed, not necessarily the same as all traffic."
  },
  {
    id: 110,
    type: 'fill-in-blank',
    category: 'safe-driving',
    question: "🦺 In Florida, if you're under 21, your BAC must be less than what percentage to avoid license suspension? (Enter as 0.XX)",
    correctAnswer: "0.02",
    explanation: "Florida has zero-tolerance for underage drinking and driving. A BAC of 0.02% or higher for drivers under 21 results in license suspension."
  },

  // SHARING THE ROAD QUESTIONS
  {
    id: 111,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚴 When passing a bicycle, how much space must you leave?",
    options: [
      "1 foot",
      "2 feet",
      "3 feet",
      "No specific requirement"
    ],
    correct: 2,
    explanation: "Florida law requires drivers to give bicyclists at least 3 feet of clearance when passing."
  },
  {
    id: 112,
    type: 'true-false',
    category: 'sharing-road',
    question: "🚴 Bicyclists have the same rights and responsibilities as motor vehicle drivers.",
    correct: true,
    explanation: "True! Bicyclists must follow the same traffic laws as cars and have the same road rights. Treat them as you would any other vehicle."
  },
  {
    id: 113,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚴 What should you do when you see a pedestrian with a white cane or guide dog?",
    options: [
      "Honk to alert them",
      "Stop and yield the right-of-way",
      "Proceed slowly",
      "Flash your headlights"
    ],
    correct: 1,
    explanation: "A white cane or guide dog indicates the person is blind or visually impaired. Always stop and yield the right-of-way."
  },
  {
    id: 114,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚴 When must you yield to pedestrians in a crosswalk?",
    options: [
      "Only at marked crosswalks",
      "Only when a signal tells you to",
      "At both marked and unmarked crosswalks",
      "Never, pedestrians must yield to cars"
    ],
    correct: 2,
    explanation: "You must yield to pedestrians in both marked and unmarked crosswalks at intersections. Pedestrians always have the right-of-way in crosswalks."
  },
  {
    id: 115,
    type: 'multiple-select',
    category: 'sharing-road',
    question: "🚴 When sharing the road with large trucks, you should: (Select all that apply)",
    options: [
      "Avoid their blind spots (No-Zones)",
      "Never cut in front of them suddenly",
      "Give them extra space when they're turning",
      "Pass them on the right side",
      "Allow extra following distance"
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Trucks have large blind spots, need more room to turn and stop, and you should never pass on the right. Give them plenty of space and time."
  },

  // VEHICLE EQUIPMENT QUESTIONS
  {
    id: 116,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 When must you use your headlights in Florida?",
    options: [
      "Only at night",
      "From sunset to sunrise and during rain",
      "Only in heavy rain",
      "Anytime you want"
    ],
    correct: 1,
    explanation: "Florida law requires headlights from sunset to sunrise and when visibility is less than 1,000 feet (like during rain, fog, or smoke)."
  },
  {
    id: 117,
    type: 'true-false',
    category: 'vehicle-equipment',
    question: "🔧 You must wear a seat belt in Florida, regardless of where you're sitting in the vehicle.",
    correct: true,
    explanation: "True! Florida law requires all passengers and the driver to wear seat belts, no matter where they sit in the vehicle."
  },
  {
    id: 118,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 How often should you check your tire pressure?",
    options: [
      "Once a year",
      "Every 6 months",
      "At least once a month",
      "Only when they look low"
    ],
    correct: 2,
    explanation: "Check tire pressure at least once a month and before long trips. Proper tire pressure improves fuel economy and safety."
  },
  {
    id: 119,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 What does it mean if your brake pedal feels spongy or soft?",
    options: [
      "Brakes are working perfectly",
      "Normal wear and tear",
      "Possible brake system problem - get it checked",
      "Time to add brake fluid yourself"
    ],
    correct: 2,
    explanation: "A spongy brake pedal may indicate air in brake lines, low brake fluid, or other brake problems. Have it inspected by a professional immediately."
  },
  {
    id: 120,
    type: 'fill-in-blank',
    category: 'vehicle-equipment',
    question: "🔧 At what age must children use a child restraint device (car seat or booster) in Florida? (Under age X)",
    correctAnswer: "6",
    explanation: "Florida law requires children under age 6 to be in a crash-tested, federally approved child restraint device."
  },

  // EMERGENCY SITUATIONS QUESTIONS
  {
    id: 121,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If your brakes fail while driving, what should you do?",
    options: [
      "Immediately turn off the engine",
      "Pump the brake pedal, shift to lower gear, use parking brake gradually",
      "Swerve into another lane",
      "Jump out of the vehicle"
    ],
    correct: 1,
    explanation: "If brakes fail: pump the pedal to build pressure, shift to a lower gear to slow down, and gradually apply the parking brake. Don't turn off the engine as you'll lose power steering."
  },
  {
    id: 122,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 What should you do if your vehicle starts to hydroplane on wet roads?",
    options: [
      "Brake hard immediately",
      "Turn the steering wheel sharply",
      "Ease off the gas, don't brake, steer straight",
      "Accelerate to regain control"
    ],
    correct: 2,
    explanation: "When hydroplaning, ease off the gas and don't brake. Keep the steering wheel straight and wait for your tires to regain traction."
  },
  {
    id: 123,
    type: 'true-false',
    category: 'emergency-situations',
    question: "🚨 If you're involved in a crash, you must report it to law enforcement if there are injuries or property damage over $500.",
    correct: true,
    explanation: "True! Florida law requires you to report crashes that involve injuries, death, or property damage exceeding $500."
  },
  {
    id: 124,
    type: 'multiple-select',
    category: 'emergency-situations',
    question: "🚨 If you have a tire blowout while driving, you should: (Select all that apply)",
    options: [
      "Grip the steering wheel firmly",
      "Brake hard immediately",
      "Gradually slow down by easing off the gas",
      "Pull off the road when safe",
      "Turn on hazard lights"
    ],
    correctAnswers: [0, 2, 3, 4],
    explanation: "During a blowout: grip the wheel firmly, DON'T brake hard (you'll lose control), ease off the gas to slow down, pull off safely, and use hazard lights."
  },
  {
    id: 125,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 What should you do when an emergency vehicle approaches with lights and sirens?",
    options: [
      "Speed up to get out of the way",
      "Stop immediately wherever you are",
      "Pull over to the right and stop",
      "Change lanes quickly"
    ],
    correct: 2,
    explanation: "When an emergency vehicle approaches with lights/sirens, pull over to the right side of the road and stop until it passes."
  },

  // MORE PAVEMENT MARKINGS QUESTIONS (Adding 25 more)
  {
    id: 126,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What do broken white lines on the road indicate?",
    options: [
      "No passing allowed",
      "Lane changes are permitted",
      "Road ends ahead",
      "School zone"
    ],
    correct: 1,
    explanation: "Broken (dashed) white lines separate lanes of traffic moving in the same direction and indicate that lane changes are permitted."
  },
  {
    id: 127,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What does a broken yellow line on your side with a solid yellow line on the other side mean?",
    options: [
      "You cannot pass",
      "You may pass if safe",
      "Two-way traffic ahead",
      "Merge required"
    ],
    correct: 1,
    explanation: "When the broken yellow line is on your side, you may pass when safe. The solid yellow line on the other side means traffic on that side cannot pass."
  },
  {
    id: 128,
    type: 'true-false',
    category: 'pavement-markings',
    question: "🛣️ Yellow pavement markings separate traffic moving in opposite directions.",
    correct: true,
    explanation: "True! Yellow lines separate traffic traveling in opposite directions, while white lines separate traffic moving in the same direction."
  },
  {
    id: 129,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What do white painted letters 'ONLY' in a lane mean?",
    options: [
      "Parking is allowed",
      "Lane must be used only for movement indicated by arrow",
      "Pedestrians only",
      "Emergency vehicles only"
    ],
    correct: 1,
    explanation: "The word 'ONLY' painted in a lane with a directional arrow means that lane can only be used for the movement shown (turn or straight)."
  },
  {
    id: 130,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What does a thick white line across the road at an intersection indicate?",
    options: [
      "Crosswalk",
      "Stop line",
      "Speed bump ahead",
      "Lane ending"
    ],
    correct: 1,
    explanation: "A thick white line (stop bar) across your lane at an intersection indicates where you must stop for a stop sign or red light."
  },
  {
    id: 131,
    type: 'fill-in-blank',
    category: 'pavement-markings',
    question: "🛣️ What color are the lines that separate traffic going in opposite directions? (one word)",
    correctAnswer: "yellow",
    explanation: "Yellow lines always separate traffic traveling in opposite directions on two-way roads."
  },
  {
    id: 132,
    type: 'multiple-select',
    category: 'pavement-markings',
    question: "🛣️ Which of these pavement markings mean you should NOT cross them? (Select all that apply)",
    options: [
      "Double solid white lines",
      "Broken white lines",
      "Solid yellow line on your side",
      "Broken yellow line on your side",
      "Double solid yellow lines"
    ],
    correctAnswers: [0, 2, 4],
    explanation: "You should NOT cross: double solid white lines, a solid yellow line on your side, or double solid yellow lines. Broken lines indicate passing/lane changes are permitted."
  },
  {
    id: 133,
    type: 'true-false',
    category: 'pavement-markings',
    question: "🛣️ Reflective pavement markers (cat's eyes) that are red indicate you are going the wrong way.",
    correct: true,
    explanation: "True! Red reflective markers mean you're going the wrong direction. White/clear markers show lanes going your direction, yellow marks the center line."
  },
  {
    id: 134,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What do rumble strips on the edge of the road indicate?",
    options: [
      "Speed limit change ahead",
      "Warning that you're leaving the roadway",
      "Passing zone",
      "Rest area ahead"
    ],
    correct: 1,
    explanation: "Rumble strips are grooved or raised patterns on the road edge that create noise/vibration to alert drivers they're drifting off the roadway."
  },
  {
    id: 135,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What do broad white stripes painted across the road indicate?",
    options: [
      "Railroad crossing",
      "Crosswalk for pedestrians",
      "Speed limit zone",
      "No parking zone"
    ],
    correct: 1,
    explanation: "Broad white stripes (zebra stripes) across the road mark a crosswalk where pedestrians have the right-of-way."
  },
  {
    id: 136,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ If there's a bike lane marked with a white line and bicycle symbol, can cars drive in it?",
    options: [
      "Yes, anytime",
      "Only to make a turn when safe",
      "Only at night",
      "Never"
    ],
    correct: 1,
    explanation: "Vehicles may enter a bike lane only to make a turn, and must yield to any bicyclists in the lane."
  },
  {
    id: 137,
    type: 'true-false',
    category: 'pavement-markings',
    question: "🛣️ A single solid white line discourages lane changes but doesn't prohibit them.",
    correct: true,
    explanation: "True! A single solid white line means lane changes are discouraged. Double solid white lines prohibit lane changes."
  },
  {
    id: 138,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What does 'STOP AHEAD' painted on the pavement mean?",
    options: [
      "Stop immediately",
      "Stop sign is coming up ahead",
      "School zone ahead",
      "Intersection ahead"
    ],
    correct: 1,
    explanation: "'STOP AHEAD' warns you that there's a stop sign at the next intersection. Be prepared to stop."
  },
  {
    id: 139,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What do the letters 'R R' painted on the road indicate?",
    options: [
      "Rest area",
      "Railroad crossing ahead",
      "Road repair",
      "Reduced speed"
    ],
    correct: 1,
    explanation: "'R R' or an 'X' painted on the road warns of a railroad crossing ahead. Slow down and look for trains."
  },
  {
    id: 140,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What does a painted triangle (yield symbol) on the road mean?",
    options: [
      "Stop required",
      "Slow down and yield ahead",
      "Merge lane",
      "Turn only"
    ],
    correct: 1,
    explanation: "A painted triangle indicates you're approaching a yield sign. Slow down and be prepared to yield to other traffic."
  },
  {
    id: 141,
    type: 'fill-in-blank',
    category: 'pavement-markings',
    question: "🛣️ What color are the lines that separate lanes going in the SAME direction? (one word)",
    correctAnswer: "white",
    explanation: "White lines separate lanes of traffic moving in the same direction."
  },
  {
    id: 142,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What does a diamond symbol painted in your lane indicate?",
    options: [
      "Passing zone",
      "HOV/carpool lane",
      "Bike lane",
      "Emergency vehicles only"
    ],
    correct: 1,
    explanation: "A diamond symbol marks a High Occupancy Vehicle (HOV) or carpool lane, restricted to vehicles with multiple passengers during certain hours."
  },
  {
    id: 143,
    type: 'true-false',
    category: 'pavement-markings',
    question: "🛣️ You can park in a space marked with blue lines and a wheelchair symbol if you're just running in quickly.",
    correct: false,
    explanation: "False! Spaces marked with blue lines and wheelchair symbols are reserved for vehicles with disabled parking permits/plates ONLY. Parking there without proper authorization results in fines."
  },
  {
    id: 144,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What does a white curb marking indicate?",
    options: [
      "No parking anytime",
      "Loading zone - passenger pickup/dropoff only",
      "Reserved parking",
      "Fire lane"
    ],
    correct: 1,
    explanation: "White curb markings indicate passenger loading zones - you may stop briefly to pick up or drop off passengers, but not park."
  },
  {
    id: 145,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What does a red curb marking indicate?",
    options: [
      "Fire lane - no stopping",
      "Loading zone",
      "Parking allowed for 15 minutes",
      "Bus stop"
    ],
    correct: 0,
    explanation: "Red curb markings mean absolutely no stopping, standing, or parking at any time - usually a fire lane."
  },
  {
    id: 146,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What does a yellow curb marking indicate?",
    options: [
      "No parking anytime",
      "Loading zone - commercial vehicles only",
      "Taxi stand",
      "School bus zone"
    ],
    correct: 1,
    explanation: "Yellow curbs mark commercial loading zones where only commercial vehicles can stop to load/unload goods."
  },
  {
    id: 147,
    type: 'true-false',
    category: 'pavement-markings',
    question: "🛣️ Green curb markings indicate time-limited parking.",
    correct: true,
    explanation: "True! Green curbs usually indicate short-term parking with time limits (like 15 or 30 minutes)."
  },
  {
    id: 148,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What does 'SCHOOL XING' painted on the road mean?",
    options: [
      "School zone speed limit ahead",
      "School crossing - watch for children",
      "School parking only",
      "School bus stop"
    ],
    correct: 1,
    explanation: "'SCHOOL XING' (crossing) warns drivers to watch for children crossing the road, especially during school hours."
  },
  {
    id: 149,
    type: 'multiple-choice',
    category: 'pavement-markings',
    question: "🛣️ What does a painted number (like '35') on the road indicate?",
    options: [
      "Speed limit",
      "Route number",
      "Distance to next exit",
      "Lane number"
    ],
    correct: 0,
    explanation: "Numbers painted on the road typically indicate the speed limit for that section of road."
  },
  {
    id: 150,
    type: 'multiple-select',
    category: 'pavement-markings',
    question: "🛣️ Which pavement markings warn of potential hazards? (Select all that apply)",
    options: [
      "Yellow crosshatch markings",
      "Rumble strips",
      "Red reflective markers",
      "Broken white lines",
      "'STOP AHEAD' painted text"
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Hazard warnings include: crosshatches (don't enter), rumble strips (edge warning), red markers (wrong way), and 'STOP AHEAD' text. Broken white lines just indicate lane changes are allowed."
  },

  // MORE TRAFFIC SIGNALS QUESTIONS (Adding 25 more)
  {
    id: 151,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What does a yellow (amber) traffic light mean?",
    options: [
      "Speed up to get through",
      "Stop if safe to do so, light is about to turn red",
      "Proceed with caution",
      "Same as green light"
    ],
    correct: 1,
    explanation: "Yellow light means the signal is about to turn red. Stop if you can do so safely. If you're already in the intersection or too close to stop safely, proceed through."
  },
  {
    id: 152,
    type: 'true-false',
    category: 'traffic-signals',
    question: "🚦 You can turn left on a red light from a one-way street onto another one-way street in Florida.",
    correct: true,
    explanation: "True! In Florida, you may turn left on red from a one-way street onto another one-way street after stopping and yielding, unless prohibited by a sign."
  },
  {
    id: 153,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What should you do at a steady red traffic light?",
    options: [
      "Slow down and proceed",
      "Stop completely and remain stopped until green",
      "Stop, then proceed when safe",
      "Treat it as a yield sign"
    ],
    correct: 1,
    explanation: "A steady red light means stop and remain stopped until the light turns green (unless making a legal turn on red)."
  },
  {
    id: 154,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What does a red arrow signal mean?",
    options: [
      "You may turn after yielding",
      "You may NOT turn in the direction of the arrow",
      "Caution, turn carefully",
      "Same as yellow light"
    ],
    correct: 1,
    explanation: "A red arrow means you absolutely cannot turn in that direction. You must stop and wait for a green arrow or green light."
  },
  {
    id: 155,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What does a yellow arrow signal mean?",
    options: [
      "Protected turn ending, prepare to stop or yield",
      "Speed up to complete turn",
      "No turns allowed",
      "Proceed with caution"
    ],
    correct: 0,
    explanation: "A yellow arrow means the protected turn phase is ending. If you're in the intersection, complete your turn. Otherwise, prepare to stop or yield to oncoming traffic."
  },
  {
    id: 156,
    type: 'true-false',
    category: 'traffic-signals',
    question: "🚦 A green traffic light means you can proceed without checking for other vehicles or pedestrians.",
    correct: false,
    explanation: "False! Even with a green light, you must still check for pedestrians in the crosswalk and vehicles already in the intersection. Green means 'proceed when safe.'"
  },
  {
    id: 157,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What should you do if a traffic signal is completely dark (not working)?",
    options: [
      "Proceed normally",
      "Treat it as a flashing yellow light",
      "Treat it as a four-way stop",
      "Speed through quickly"
    ],
    correct: 2,
    explanation: "When traffic signals are not working, treat the intersection as an all-way stop. Stop, yield to vehicles that arrived first, then proceed when safe."
  },
  {
    id: 158,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What do pedestrian signals showing a walking person mean?",
    options: [
      "Vehicles must stop",
      "Pedestrians may cross",
      "Pedestrians should run across",
      "Intersection is closed"
    ],
    correct: 1,
    explanation: "A walking person signal (walk symbol) means pedestrians may begin crossing the street."
  },
  {
    id: 159,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What does a flashing 'DON'T WALK' or raised hand pedestrian signal mean?",
    options: [
      "Don't start crossing, but finish if already in crosswalk",
      "Run across quickly",
      "Stop immediately in the crosswalk",
      "Cross at your own risk"
    ],
    correct: 0,
    explanation: "A flashing DON'T WALK or raised hand means don't start crossing. If you're already in the crosswalk, continue to the other side."
  },
  {
    id: 160,
    type: 'fill-in-blank',
    category: 'traffic-signals',
    question: "🚦 How many seconds is a yellow light typically timed for at intersections? (number only)",
    correctAnswer: "3",
    explanation: "Yellow lights are typically timed for 3-5 seconds, depending on the speed limit and intersection size, to give drivers time to stop safely."
  },
  {
    id: 161,
    type: 'multiple-select',
    category: 'traffic-signals',
    question: "🚦 When can you legally proceed through a red light? (Select all that apply)",
    options: [
      "When turning right after stopping (unless prohibited)",
      "When turning left from one-way to one-way after stopping",
      "When no other cars are around",
      "When following an emergency vehicle",
      "When the light has been red for over 5 minutes"
    ],
    correctAnswers: [0, 1],
    explanation: "You may turn right on red after stopping (unless prohibited), or left on red from one-way to one-way. Never run a red light just because no cars are around."
  },
  {
    id: 162,
    type: 'true-false',
    category: 'traffic-signals',
    question: "🚦 You must stop for a school bus with flashing red lights even if there's a median between you and the bus.",
    correct: false,
    explanation: "False! If there's a raised barrier or unpaved median separating you from the school bus, you don't need to stop. But on undivided roads or with painted medians only, you MUST stop."
  },
  {
    id: 163,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What do flashing yellow lights at a school zone sign mean?",
    options: [
      "School is closed",
      "Reduced speed limit is in effect",
      "Stop for children",
      "Proceed normally"
    ],
    correct: 1,
    explanation: "Flashing yellow lights at school zone signs mean the reduced speed limit (usually 15-20 mph) is currently in effect. Slow down and watch for children."
  },
  {
    id: 164,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What should you do when you see amber/yellow flashing lights on a school bus?",
    options: [
      "Stop immediately",
      "Slow down and prepare to stop",
      "Speed up to pass",
      "Maintain current speed"
    ],
    correct: 1,
    explanation: "Amber/yellow flashing lights on a school bus mean it's preparing to stop. Slow down and be ready to stop when the red lights start flashing."
  },
  {
    id: 165,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 At a traffic light, who has the right-of-way when the light turns green?",
    options: [
      "First vehicle to reach the intersection",
      "Vehicles already in the intersection",
      "Left-turning vehicles",
      "All vehicles equally"
    ],
    correct: 1,
    explanation: "Vehicles and pedestrians already lawfully in the intersection when the light turns red have the right-of-way to clear the intersection, even when your light turns green."
  },
  {
    id: 166,
    type: 'true-false',
    category: 'traffic-signals',
    question: "🚦 A flashing red light has the same meaning as a stop sign.",
    correct: true,
    explanation: "True! A flashing red light means stop completely, yield to traffic and pedestrians, then proceed when safe - exactly like a stop sign."
  },
  {
    id: 167,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What does a lane control signal (green arrow pointing down) mean?",
    options: [
      "Lane is closed",
      "You may use this lane",
      "Turn only",
      "Merge required"
    ],
    correct: 1,
    explanation: "A green arrow pointing down over a lane means that lane is open and you may use it. These are common in reversible lanes."
  },
  {
    id: 168,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What does a lane control signal (red X) mean?",
    options: [
      "Slow down in this lane",
      "Merge left",
      "Do not use this lane",
      "Emergency vehicles only"
    ],
    correct: 2,
    explanation: "A red X over a lane means that lane is closed. Do not drive in that lane."
  },
  {
    id: 169,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What does a yellow X lane control signal mean?",
    options: [
      "Caution, lane ends ahead",
      "Move out of this lane, it's about to close",
      "Slow down in this lane",
      "Yield to oncoming traffic"
    ],
    correct: 1,
    explanation: "A yellow X means the lane is about to close. Move out of this lane as soon as safely possible."
  },
  {
    id: 170,
    type: 'fill-in-blank',
    category: 'traffic-signals',
    question: "🚦 How far away must you stop from a school bus with flashing red lights? (number of feet only)",
    correctAnswer: "20",
    explanation: "You must stop at least 20 feet away from a school bus with flashing red lights and remain stopped until the lights stop flashing."
  },
  {
    id: 171,
    type: 'true-false',
    category: 'traffic-signals',
    question: "🚦 You can turn right on red at any intersection unless a sign says 'No Turn on Red.'",
    correct: false,
    explanation: "False! While generally allowed, you cannot turn right on red where prohibited by signs, at certain complex intersections, or when a red arrow is displayed for that turn."
  },
  {
    id: 172,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What do flashing blue lights on a vehicle mean?",
    options: [
      "Police or emergency vehicle",
      "Volunteer firefighter or EMT responding to emergency",
      "Road maintenance vehicle",
      "School bus"
    ],
    correct: 1,
    explanation: "Flashing blue lights typically indicate a volunteer firefighter or EMT responding to an emergency. Yield and give them space."
  },
  {
    id: 173,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What should you do at a green arrow followed by a solid green light?",
    options: [
      "Stop and wait",
      "You had a protected turn, now must yield to oncoming traffic when turning",
      "Speed up",
      "Turn only when arrow is showing"
    ],
    correct: 1,
    explanation: "After a green arrow ends and solid green appears, you may still turn but must yield to oncoming traffic. The protected turn phase has ended."
  },
  {
    id: 174,
    type: 'multiple-select',
    category: 'traffic-signals',
    question: "🚦 Which vehicles must you yield to even when you have a green light? (Select all that apply)",
    options: [
      "Pedestrians in the crosswalk",
      "Emergency vehicles with sirens",
      "Vehicles already in the intersection",
      "Motorcycles",
      "Slow-moving vehicles"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Even with a green light, you must yield to: pedestrians in crosswalks, emergency vehicles with lights/sirens, and vehicles already lawfully in the intersection."
  },
  {
    id: 175,
    type: 'multiple-choice',
    category: 'traffic-signals',
    question: "🚦 What does a steady yellow X over a toll lane mean?",
    options: [
      "Toll booth closed",
      "Drive through without paying",
      "Slow down and prepare to stop",
      "Lane will close soon, prepare to move"
    ],
    correct: 3,
    explanation: "A steady yellow X at a toll plaza means that lane is about to close. Prepare to merge into another lane."
  },

  // MORE SAFE DRIVING QUESTIONS (Adding 25 more)
  {
    id: 176,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 What is the 'Move Over Law' in Florida?",
    options: [
      "Move over for bicycles",
      "Move over one lane or slow down for stopped emergency/service vehicles",
      "Move over for school buses",
      "Move over for slow drivers"
    ],
    correct: 1,
    explanation: "Florida's Move Over Law requires drivers to move over a lane (if safe) or slow to 20 mph below the speed limit when approaching stopped emergency, sanitation, utility, or tow vehicles with flashing lights."
  },
  {
    id: 177,
    type: 'true-false',
    category: 'safe-driving',
    question: "🦺 Using a handheld phone to talk while driving is legal in Florida for drivers over 18.",
    correct: true,
    explanation: "True! While texting is banned, talking on a handheld phone is currently legal in Florida for drivers 18+. However, it's still dangerous and not recommended."
  },
  {
    id: 178,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 When driving in rain, you should increase your following distance to:",
    options: [
      "2 seconds",
      "3 seconds",
      "4-5 seconds or more",
      "Same as normal"
    ],
    correct: 2,
    explanation: "In rain or poor conditions, increase your following distance to at least 4-5 seconds or more. Wet roads increase stopping distance significantly."
  },
  {
    id: 179,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 What should you do if you feel drowsy while driving?",
    options: [
      "Open windows and turn up music",
      "Drink coffee and keep driving",
      "Pull over in a safe place and rest",
      "Drive faster to get home quicker"
    ],
    correct: 2,
    explanation: "If you're drowsy, the only safe solution is to pull over in a safe place and rest. Coffee and fresh air are temporary fixes that don't address real fatigue."
  },
  {
    id: 180,
    type: 'fill-in-blank',
    category: 'safe-driving',
    question: "🦺 What is the maximum BAC (Blood Alcohol Content) for drivers 21 and over in Florida? (Enter as 0.XX)",
    correctAnswer: "0.08",
    explanation: "The legal BAC limit is 0.08% for drivers 21 and over. However, you can be arrested for DUI at lower levels if impaired."
  },
  {
    id: 181,
    type: 'multiple-select',
    category: 'safe-driving',
    question: "🦺 Which are signs of an impaired or aggressive driver? (Select all that apply)",
    options: [
      "Weaving between lanes",
      "Following too closely (tailgating)",
      "Extremely slow or fast speeds",
      "Using turn signals",
      "Sudden braking or acceleration"
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Warning signs include: weaving, tailgating, erratic speeds, and sudden braking/acceleration. Using turn signals properly is good driving behavior."
  },
  {
    id: 182,
    type: 'true-false',
    category: 'safe-driving',
    question: "🦺 You should use your high beams within 500 feet of an oncoming vehicle.",
    correct: false,
    explanation: "False! You must dim your high beams to low beams when within 500 feet of an oncoming vehicle or when following another vehicle within 300 feet."
  },
  {
    id: 183,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 What should you check before backing up your vehicle?",
    options: [
      "Just your rearview mirror",
      "Just your side mirrors",
      "All mirrors AND look over your shoulder",
      "Only if someone is guiding you"
    ],
    correct: 2,
    explanation: "Before backing, check all mirrors AND physically look over your shoulder. Mirrors have blind spots, especially directly behind your vehicle."
  },
  {
    id: 184,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 When should you use your hazard lights?",
    options: [
      "When driving in heavy rain",
      "When your vehicle is disabled or stopped on the roadway",
      "When driving slowly",
      "When parking"
    ],
    correct: 1,
    explanation: "Use hazard lights when your vehicle is disabled/stopped on the roadway as a warning to other drivers. Don't use them while actively driving (except in funeral processions)."
  },
  {
    id: 185,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 How can you avoid highway hypnosis on long trips?",
    options: [
      "Stare at the center line",
      "Take breaks, vary eye movement, avoid cruise control on boring roads",
      "Drive faster to stay alert",
      "Listen to quiet music"
    ],
    correct: 1,
    explanation: "Prevent highway hypnosis by taking regular breaks, scanning your environment, varying your eye position, and avoiding cruise control on monotonous roads."
  },
  {
    id: 186,
    type: 'true-false',
    category: 'safe-driving',
    question: "🦺 It's safe to drive through standing water if it doesn't look too deep.",
    correct: false,
    explanation: "False! Never drive through standing water - you can't tell the depth and just 6 inches can cause loss of control, while 12 inches can float most vehicles. Turn around, don't drown!"
  },
  {
    id: 187,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 What is 'road rage'?",
    options: [
      "Getting angry at road construction",
      "Aggressive or violent behavior by a driver toward other drivers",
      "Honking your horn",
      "Driving too fast"
    ],
    correct: 1,
    explanation: "Road rage is aggressive or violent behavior stemming from a driver's anger, including tailgating, cutting off other drivers, verbal/physical confrontations, or dangerous maneuvers."
  },
  {
    id: 188,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 If another driver is tailgating you, what should you do?",
    options: [
      "Slam on your brakes to teach them a lesson",
      "Speed up to get away",
      "Slow down gradually and let them pass when safe",
      "Tailgate the car in front of you"
    ],
    correct: 2,
    explanation: "If being tailgated, slow down gradually, maintain your lane, and let the aggressive driver pass when safe. Don't brake-check or engage with aggressive drivers."
  },
  {
    id: 189,
    type: 'multiple-select',
    category: 'safe-driving',
    question: "🦺 What should you do to drive safely in fog? (Select all that apply)",
    options: [
      "Use low beam headlights",
      "Use high beams for better visibility",
      "Slow down",
      "Use the right edge of the road as a guide",
      "Speed up to get through fog quickly"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "In fog: use low beams (high beams reflect back and reduce visibility), slow down, and use the road's right edge as a guide. Never speed up in fog."
  },
  {
    id: 190,
    type: 'fill-in-blank',
    category: 'safe-driving',
    question: "🦺 When following a motorcycle, you should keep at least how many seconds of following distance? (number only)",
    correctAnswer: "3",
    explanation: "Keep at least 3-4 seconds following distance from motorcycles. They can stop more quickly than cars, and they need space to maneuver around road hazards."
  },
  {
    id: 191,
    type: 'true-false',
    category: 'safe-driving',
    question: "🦺 You should always wear your seat belt, even for short trips.",
    correct: true,
    explanation: "True! Most crashes occur close to home. Seat belts reduce the risk of death by 45% and serious injury by 50%. Always buckle up, every trip."
  },
  {
    id: 192,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 What does 'scanning' mean in defensive driving?",
    options: [
      "Checking your phone",
      "Continuously checking mirrors and looking ahead for hazards",
      "Looking for parking",
      "Reading road signs"
    ],
    correct: 1,
    explanation: "Scanning means constantly checking your mirrors, looking far ahead, checking blind spots, and being aware of your surroundings to identify potential hazards early."
  },
  {
    id: 193,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 When driving at night, you should be able to stop within:",
    options: [
      "The distance you can see ahead",
      "100 feet",
      "Your headlight range",
      "500 feet"
    ],
    correct: 2,
    explanation: "At night, you should only drive as fast as you can stop within the range of your headlights. If you overdrive your headlights, you won't have time to react to hazards."
  },
  {
    id: 194,
    type: 'true-false',
    category: 'safe-driving',
    question: "🦺 Eating, grooming, or adjusting the radio while driving are forms of distracted driving.",
    correct: true,
    explanation: "True! Any activity that takes your attention from driving is distracted driving - including eating, grooming, adjusting controls, or using electronics."
  },
  {
    id: 195,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 What is a 'blind spot'?",
    options: [
      "A spot on your windshield you can't see through",
      "An area around your vehicle that you can't see in your mirrors",
      "A traffic sign you missed",
      "A dark road at night"
    ],
    correct: 1,
    explanation: "Blind spots are areas around your vehicle that can't be seen in your mirrors, typically to the sides and rear. Always check blind spots by looking over your shoulder before changing lanes."
  },
  {
    id: 196,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 If your accelerator pedal gets stuck, what should you do?",
    options: [
      "Turn off the engine immediately",
      "Shift to neutral and use brakes to slow down",
      "Pull the emergency brake hard",
      "Keep trying to unstick it"
    ],
    correct: 1,
    explanation: "If accelerator sticks: shift to neutral (this disconnects the engine from wheels), use brakes to slow down, pull off road, then turn off engine."
  },
  {
    id: 197,
    type: 'multiple-select',
    category: 'safe-driving',
    question: "🦺 What factors affect your stopping distance? (Select all that apply)",
    options: [
      "Speed",
      "Road conditions",
      "Vehicle weight",
      "Radio volume",
      "Tire condition"
    ],
    correctAnswers: [0, 1, 2, 4],
    explanation: "Stopping distance is affected by: speed, road/weather conditions, vehicle weight, tire condition, and brake condition. Radio volume doesn't affect stopping distance."
  },
  {
    id: 198,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 What is 'carbon monoxide' and why is it dangerous in vehicles?",
    options: [
      "Visible smoke from exhaust",
      "Colorless, odorless gas that can cause drowsiness, illness, or death",
      "Gas that makes you drive faster",
      "Harmless exhaust byproduct"
    ],
    correct: 1,
    explanation: "Carbon monoxide (CO) is a colorless, odorless, deadly gas from exhaust. Never run your engine in enclosed spaces, and get exhaust leaks fixed immediately."
  },
  {
    id: 199,
    type: 'true-false',
    category: 'safe-driving',
    question: "🦺 Anti-lock brakes (ABS) allow you to steer while braking in an emergency.",
    correct: true,
    explanation: "True! ABS prevents wheel lockup, maintaining steering control during hard braking. In an ABS-equipped vehicle, press and hold the brake pedal firmly - don't pump it."
  },
  {
    id: 200,
    type: 'multiple-choice',
    category: 'safe-driving',
    question: "🦺 What does 'overdriving your headlights' mean?",
    options: [
      "Driving with high beams on",
      "Driving too fast to stop within the distance your headlights illuminate",
      "Driving with broken headlights",
      "Using fog lights incorrectly"
    ],
    correct: 1,
    explanation: "Overdriving your headlights means driving so fast that your stopping distance is longer than the distance you can see ahead with your lights."
  },
  {
    id: 201,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚴 When passing a bicycle in Florida, you must give at least:",
    options: [
      "1 foot of clearance",
      "2 feet of clearance",
      "3 feet of clearance",
      "4 feet of clearance"
    ],
    correct: 2,
    explanation: "Florida law requires drivers to give at least 3 feet of clearance when passing a bicycle."
  },
  {
    id: 202,
    type: 'true-false',
    category: 'sharing-road',
    question: "🚴 Bicyclists have the same rights and responsibilities as motor vehicle drivers.",
    correct: true,
    explanation: "True! Bicyclists must follow the same traffic laws as motor vehicles and have the same rights to use the road."
  },
  {
    id: 203,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚶 Who has the right-of-way at an unmarked crosswalk?",
    options: [
      "Vehicles always have the right-of-way",
      "Pedestrians always have the right-of-way",
      "Whoever arrives first",
      "There are no rules for unmarked crosswalks"
    ],
    correct: 1,
    explanation: "Pedestrians have the right-of-way at both marked and unmarked crosswalks. Drivers must yield to pedestrians crossing the road."
  },
  {
    id: 204,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🏍️ Why should you be extra cautious around motorcycles?",
    options: [
      "They are slower than cars",
      "They are harder to see and can stop more quickly",
      "They always have the right-of-way",
      "They don't follow traffic laws"
    ],
    correct: 1,
    explanation: "Motorcycles are smaller and harder to see, and they can stop more quickly than cars. Always check blind spots for motorcycles."
  },
  {
    id: 205,
    type: 'multiple-select',
    category: 'sharing-road',
    question: "🚛 Where are the blind spots (No-Zones) on large trucks?",
    options: [
      "Directly behind the truck",
      "On both sides near the cab",
      "Directly in front of the truck",
      "All of the above"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Large trucks have significant blind spots in all four areas: directly behind, on both sides near the cab, and directly in front. If you can't see the driver's mirrors, they can't see you."
  },
  {
    id: 206,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚌 When must you stop for a school bus?",
    options: [
      "Only when the bus is moving",
      "When the stop arm is extended and red lights are flashing",
      "Only if you're behind the bus",
      "Never, buses don't have priority"
    ],
    correct: 1,
    explanation: "You must stop for a school bus when its stop arm is extended and red lights are flashing, regardless of which direction you're traveling (unless separated by a physical barrier)."
  },
  {
    id: 207,
    type: 'true-false',
    category: 'sharing-road',
    question: "🚌 You must stop at least 20 feet away from a stopped school bus with flashing red lights.",
    correct: true,
    explanation: "True! You must stop at least 20 feet from a school bus displaying flashing red lights and a stop sign."
  },
  {
    id: 208,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚴 When a bicycle is traveling in the same direction as traffic, where should it ride?",
    options: [
      "In the center of the lane",
      "Against traffic so they can see cars",
      "As far right as safely possible",
      "On the sidewalk only"
    ],
    correct: 2,
    explanation: "Bicyclists should ride as far to the right as safely possible, traveling in the same direction as traffic."
  },
  {
    id: 209,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚶 When turning right at an intersection, you should:",
    options: [
      "Speed up to turn quickly",
      "Watch only for vehicles",
      "Check for pedestrians in the crosswalk before turning",
      "Turn without stopping if there's no red light"
    ],
    correct: 2,
    explanation: "Always check for pedestrians in the crosswalk before making any turn, even if you have a green light."
  },
  {
    id: 210,
    type: 'true-false',
    category: 'sharing-road',
    question: "🏍️ When following a motorcycle, you should use a longer following distance than you would with a car.",
    correct: true,
    explanation: "True! Motorcycles can stop more quickly than cars, so you need extra following distance to avoid rear-ending them."
  },
  {
    id: 211,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚧 When driving through a construction zone, you should:",
    options: [
      "Maintain your normal speed",
      "Speed up to get through quickly",
      "Slow down and be alert for workers",
      "Change lanes frequently"
    ],
    correct: 2,
    explanation: "Always slow down in construction zones and stay alert for workers. Fines are often doubled in construction zones."
  },
  {
    id: 212,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚴 What does a bike lane with a solid white line mean?",
    options: [
      "Cars can drive in it anytime",
      "Cars should not enter except to turn or park where permitted",
      "Only electric bikes can use it",
      "It's for pedestrians"
    ],
    correct: 1,
    explanation: "A bike lane with a solid white line means cars should not enter except when necessary to turn or park where permitted."
  },
  {
    id: 213,
    type: 'true-false',
    category: 'sharing-road',
    question: "🚶 Pedestrians jaywalking (crossing illegally) still have the right-of-way.",
    correct: true,
    explanation: "True! Even if a pedestrian is crossing illegally, you must still yield to avoid hitting them. However, pedestrians can be cited for jaywalking."
  },
  {
    id: 214,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🏍️ When passing a motorcycle, you should:",
    options: [
      "Use the entire lane as you would for a car",
      "Share the lane with them",
      "Pass as quickly as possible",
      "Honk to warn them"
    ],
    correct: 0,
    explanation: "Give motorcycles the full width of the lane when passing. Never share a lane with a motorcycle."
  },
  {
    id: 215,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚛 When following a large truck, where should you position your vehicle to stay out of blind spots?",
    options: [
      "Very close behind it",
      "Directly next to the cab",
      "Where you can see the driver's mirrors",
      "It doesn't matter"
    ],
    correct: 2,
    explanation: "If you can see the truck driver's mirrors, they can see you. This keeps you out of their blind spots."
  },
  {
    id: 216,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🦽 What should you do when approaching a person using a white cane or guide dog?",
    options: [
      "Speed up to pass quickly",
      "Honk to alert them",
      "Yield the right-of-way and wait",
      "Drive around them in the bike lane"
    ],
    correct: 2,
    explanation: "A white cane or guide dog indicates a blind pedestrian. Always yield the right-of-way and wait for them to cross safely."
  },
  {
    id: 217,
    type: 'true-false',
    category: 'sharing-road',
    question: "🚴 Bicyclists must use hand signals to indicate turns.",
    correct: true,
    explanation: "True! Bicyclists are required to use hand signals to communicate their intentions, just like using turn signals on a car."
  },
  {
    id: 218,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚸 What should you do when you see children near the roadway?",
    options: [
      "Maintain your speed",
      "Slow down and be prepared to stop",
      "Honk to warn them",
      "Change lanes quickly"
    ],
    correct: 1,
    explanation: "Children can be unpredictable. Always slow down and be prepared to stop when you see children near or on the road."
  },
  {
    id: 219,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚛 Large trucks need extra space when turning because:",
    options: [
      "They turn slower",
      "Their rear wheels follow a different path than front wheels (off-tracking)",
      "They always turn from the right lane",
      "They need to signal longer"
    ],
    correct: 1,
    explanation: "Large trucks experience 'off-tracking' - their rear wheels follow a shorter path than the front wheels, so they need extra room to complete turns."
  },
  {
    id: 220,
    type: 'true-false',
    category: 'sharing-road',
    question: "🚌 On a four-lane road with a median, you must stop for a school bus on the opposite side.",
    correct: false,
    explanation: "False! If a physical barrier or median separates the roadway, you don't have to stop for a school bus on the opposite side."
  },
  {
    id: 221,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🏍️ Motorcycles are entitled to:",
    options: [
      "Half of a traffic lane",
      "A full traffic lane, just like a car",
      "Only the bike lane",
      "Only the shoulder"
    ],
    correct: 1,
    explanation: "Motorcycles are entitled to the full width of a traffic lane, just like any other vehicle."
  },
  {
    id: 222,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚴 What should you check before opening your car door after parking?",
    options: [
      "Your mirrors only",
      "Nothing, just open it",
      "Check mirrors and look over your shoulder for bicycles and pedestrians",
      "Wait 5 seconds then open"
    ],
    correct: 2,
    explanation: "Always check mirrors and look over your shoulder before opening your door to avoid 'dooring' a cyclist or pedestrian."
  },
  {
    id: 223,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🦽 When driving near a person in a wheelchair, you should:",
    options: [
      "Honk to warn them",
      "Yield the right-of-way as you would for any pedestrian",
      "Pass them quickly",
      "Drive in the bike lane around them"
    ],
    correct: 1,
    explanation: "People using wheelchairs or mobility devices have the same pedestrian rights. Always yield the right-of-way."
  },
  {
    id: 224,
    type: 'true-false',
    category: 'sharing-road',
    question: "🚧 Fines for speeding in construction zones are typically doubled.",
    correct: true,
    explanation: "True! Most states, including Florida, double fines for traffic violations in active construction zones to protect workers."
  },
  {
    id: 225,
    type: 'multiple-choice',
    category: 'sharing-road',
    question: "🚴 If there is no bike lane, where can a bicyclist legally ride?",
    options: [
      "Only on the sidewalk",
      "In the traffic lane with other vehicles",
      "Against traffic on the shoulder",
      "They cannot ride without a bike lane"
    ],
    correct: 1,
    explanation: "Without a bike lane, bicyclists can legally ride in the traffic lane with other vehicles, staying as far right as safely possible."
  },
  {
    id: 226,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 When must you use your headlights in Florida?",
    options: [
      "Only at night",
      "Between sunset and sunrise, and when visibility is less than 500 feet",
      "Only in bad weather",
      "Whenever you want"
    ],
    correct: 1,
    explanation: "Florida law requires headlights between sunset and sunrise, and any time visibility is less than 500 feet due to weather or other conditions."
  },
  {
    id: 227,
    type: 'true-false',
    category: 'vehicle-equipment',
    question: "🔧 You must use headlights when using your windshield wipers in the rain.",
    correct: true,
    explanation: "True! Florida law requires headlights to be on whenever you use your windshield wipers due to rain or other precipitation."
  },
  {
    id: 228,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 What is the minimum tire tread depth required by law?",
    options: [
      "1/8 inch",
      "1/4 inch",
      "1/16 inch",
      "1/2 inch"
    ],
    correct: 2,
    explanation: "The legal minimum tire tread depth is 1/16 of an inch, though 1/8 inch is recommended for better safety."
  },
  {
    id: 229,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 How can you check your tire tread depth?",
    options: [
      "Visual inspection only",
      "Use a penny - if you can see Lincoln's entire head, tires are too worn",
      "Tires never need checking",
      "Only mechanics can check"
    ],
    correct: 1,
    explanation: "The 'penny test': Insert a penny into the tread with Lincoln's head upside down. If you can see all of Lincoln's head, your tires need replacing."
  },
  {
    id: 230,
    type: 'true-false',
    category: 'vehicle-equipment',
    question: "🔧 All passengers in a vehicle must wear seat belts, regardless of seating position.",
    correct: true,
    explanation: "True! Florida law requires all passengers to wear seat belts, whether in the front or back seat."
  },
  {
    id: 231,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 Children under what age must be secured in a child restraint device?",
    options: [
      "3 years old",
      "4 years old",
      "5 years old",
      "6 years old"
    ],
    correct: 2,
    explanation: "Florida law requires children 5 years old and younger to be secured in a crash-tested, federally approved child restraint device."
  },
  {
    id: 232,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 What should you check before starting your vehicle?",
    options: [
      "Only the fuel gauge",
      "Mirrors, seat position, and that all passengers are buckled",
      "Just turn the key",
      "Only the radio"
    ],
    correct: 1,
    explanation: "Before starting, adjust mirrors and seat, ensure all passengers are buckled, and check that the path is clear."
  },
  {
    id: 233,
    type: 'true-false',
    category: 'vehicle-equipment',
    question: "🔧 Your horn should only be used to warn others of danger.",
    correct: true,
    explanation: "True! Your horn is a safety device to warn others of potential danger, not for expressing anger or greeting friends."
  },
  {
    id: 234,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 How often should you check your tire pressure?",
    options: [
      "Once a year",
      "Every 6 months",
      "At least once a month",
      "Never, it self-regulates"
    ],
    correct: 2,
    explanation: "Check tire pressure at least once a month and before long trips. Proper tire pressure improves safety, fuel economy, and tire life."
  },
  {
    id: 235,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 What do you check to ensure your brake lights are working?",
    options: [
      "Back up to a wall or window and press the brake",
      "They don't need checking",
      "Only mechanics can check",
      "Just assume they work"
    ],
    correct: 0,
    explanation: "Back up to a wall, garage door, or window and press the brake pedal to see the reflection of your brake lights, or have someone watch while you press the brake."
  },
  {
    id: 236,
    type: 'true-false',
    category: 'vehicle-equipment',
    question: "🔧 Cracked or damaged mirrors must be replaced for safe driving.",
    correct: true,
    explanation: "True! All required mirrors must be in good condition. Cracked or damaged mirrors reduce visibility and are unsafe."
  },
  {
    id: 237,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 What color must your rear license plate light be?",
    options: [
      "Red",
      "White",
      "Yellow",
      "Any color"
    ],
    correct: 1,
    explanation: "The rear license plate must be illuminated by a white light, making it visible from 50 feet away."
  },
  {
    id: 238,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 Window tinting in Florida is restricted to:",
    options: [
      "Any darkness you prefer",
      "35% light transmission for front side windows",
      "Completely black windows are allowed",
      "No tinting is allowed"
    ],
    correct: 1,
    explanation: "Florida law requires front side windows to allow at least 28% light transmission. Windshields can only have tint on the top 5 inches."
  },
  {
    id: 239,
    type: 'true-false',
    category: 'vehicle-equipment',
    question: "🔧 Your vehicle must have at least two rear-view mirrors.",
    correct: false,
    explanation: "False! You need one inside rear-view mirror and one outside mirror (driver's side at minimum). If the inside view is obstructed, you need two outside mirrors."
  },
  {
    id: 240,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 What does a yellow ABS warning light indicate?",
    options: [
      "Everything is fine",
      "Your anti-lock brake system may not be functioning",
      "You need gas",
      "Change the oil"
    ],
    correct: 1,
    explanation: "A yellow ABS warning light indicates a problem with the anti-lock brake system. Regular brakes still work, but have the system checked."
  },
  {
    id: 241,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 Worn wiper blades should be replaced:",
    options: [
      "Every 5 years",
      "Never",
      "Every 6-12 months or when they streak",
      "Only when completely broken"
    ],
    correct: 2,
    explanation: "Replace wiper blades every 6-12 months or sooner if they streak, skip, or don't clear the windshield properly."
  },
  {
    id: 242,
    type: 'true-false',
    category: 'vehicle-equipment',
    question: "🔧 Vehicles manufactured after 1968 must have side marker lights.",
    correct: true,
    explanation: "True! Vehicles made after 1968 are required to have amber side marker lights in front and red ones in rear for visibility."
  },
  {
    id: 243,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 What should you do if your check engine light comes on while driving?",
    options: [
      "Ignore it",
      "Stop immediately on the highway",
      "Have it checked as soon as possible - drive carefully if car operates normally",
      "Disconnect the battery"
    ],
    correct: 2,
    explanation: "If the check engine light is steady (not flashing), have it checked soon. If it's flashing, pull over safely - it indicates a serious problem."
  },
  {
    id: 244,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 Your parking brake should be used:",
    options: [
      "Only on hills",
      "Only in emergencies",
      "Every time you park",
      "Never"
    ],
    correct: 2,
    explanation: "Use your parking brake every time you park to prevent the vehicle from rolling, and to keep the brake in good working condition."
  },
  {
    id: 245,
    type: 'true-false',
    category: 'vehicle-equipment',
    question: "🔧 Deactivating your airbag without permission is illegal.",
    correct: true,
    explanation: "True! Airbags are required safety equipment. They can only be deactivated with proper authorization (e.g., medical exemption)."
  },
  {
    id: 246,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 What is the proper following distance to maintain your visibility?",
    options: [
      "1 second",
      "At least 3-4 seconds",
      "6 inches",
      "As close as possible"
    ],
    correct: 1,
    explanation: "Maintain at least a 3-4 second following distance in good conditions. Increase this in bad weather or at higher speeds."
  },
  {
    id: 247,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 When should you check your oil level?",
    options: [
      "While engine is running",
      "When engine is hot",
      "When engine is cold and on level ground",
      "Never check it yourself"
    ],
    correct: 2,
    explanation: "Check oil when the engine is cold and the vehicle is on level ground for an accurate reading. Wait a few minutes after turning off a warm engine."
  },
  {
    id: 248,
    type: 'true-false',
    category: 'vehicle-equipment',
    question: "🔧 Bald tires (worn smooth) provide better traction in wet conditions.",
    correct: false,
    explanation: "False! Bald tires are extremely dangerous in wet conditions. Tread grooves channel water away - without them, you can hydroplane."
  },
  {
    id: 249,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 What does the oil pressure warning light indicate?",
    options: [
      "Time for an oil change",
      "Low oil pressure - pull over safely and turn off engine",
      "Oil is too cold",
      "Nothing important"
    ],
    correct: 1,
    explanation: "A red oil pressure warning light means dangerously low oil pressure. Pull over safely immediately and turn off the engine to prevent damage."
  },
  {
    id: 250,
    type: 'multiple-choice',
    category: 'vehicle-equipment',
    question: "🔧 Studded tires are:",
    options: [
      "Required in Florida winters",
      "Allowed year-round in Florida",
      "Not permitted in Florida",
      "Only for commercial vehicles"
    ],
    correct: 2,
    explanation: "Studded tires are not permitted in Florida as they damage road surfaces and are unnecessary in Florida's climate."
  },
  {
    id: 251,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If you have a tire blowout while driving, you should:",
    options: [
      "Brake hard immediately",
      "Grip steering wheel firmly, ease off gas, and brake gently",
      "Speed up to maintain control",
      "Turn sharply to the side of the road"
    ],
    correct: 1,
    explanation: "During a blowout, grip the steering wheel firmly, gradually ease off the gas pedal, and brake gently once you have control. Don't brake hard or turn sharply."
  },
  {
    id: 252,
    type: 'true-false',
    category: 'emergency-situations',
    question: "🚨 If your brakes fail, you should pump the brake pedal rapidly.",
    correct: true,
    explanation: "True! If brakes fail, pump the brake pedal rapidly to build up brake pressure. Also downshift to lower gears and use the parking brake gradually."
  },
  {
    id: 253,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If your vehicle catches fire, you should:",
    options: [
      "Drive to the nearest gas station",
      "Pull over safely, turn off the engine, and get everyone out",
      "Open the hood to see what's burning",
      "Continue driving home"
    ],
    correct: 1,
    explanation: "Pull over immediately, turn off the engine, get everyone out and away from the vehicle, and call 911. Never open the hood - this adds oxygen to the fire."
  },
  {
    id: 254,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If your vehicle starts to skid, you should:",
    options: [
      "Brake hard and turn the opposite direction",
      "Take your foot off the gas and steer in the direction you want to go",
      "Accelerate to regain control",
      "Close your eyes and hope for the best"
    ],
    correct: 1,
    explanation: "In a skid, ease off the gas and steer in the direction you want the front of the car to go. Don't brake hard or oversteer."
  },
  {
    id: 255,
    type: 'true-false',
    category: 'emergency-situations',
    question: "🚨 Hydroplaning occurs when your tires lose contact with the road due to water.",
    correct: true,
    explanation: "True! Hydroplaning happens when water builds up in front of your tires faster than the weight of your vehicle can push it away, causing loss of traction."
  },
  {
    id: 256,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If you start to hydroplane, you should:",
    options: [
      "Brake hard to slow down",
      "Accelerate to get through the water",
      "Ease off the gas and steer straight until you regain traction",
      "Turn the wheel sharply"
    ],
    correct: 2,
    explanation: "When hydroplaning, ease off the gas pedal and hold the steering wheel straight until you regain traction. Don't brake or turn sharply."
  },
  {
    id: 257,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If your headlights suddenly go out at night, you should:",
    options: [
      "Stop immediately in your lane",
      "Try the headlight switch, use parking lights/hazards, and pull off safely",
      "Continue driving without lights",
      "Flash your high beams"
    ],
    correct: 1,
    explanation: "Try the headlight switch and dimmer. Use parking lights and emergency flashers, and pull off the road as safely as possible."
  },
  {
    id: 258,
    type: 'true-false',
    category: 'emergency-situations',
    question: "🚨 If an oncoming vehicle drifts into your lane, you should move to the right.",
    correct: true,
    explanation: "True! If a vehicle is coming toward you in your lane, slow down, move to the right, and sound your horn. Never swerve left into their lane."
  },
  {
    id: 259,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If your vehicle goes into water, you should:",
    options: [
      "Stay in the car and wait for rescue",
      "Open windows immediately and get out as soon as possible",
      "Try to drive out of the water",
      "Open the door underwater"
    ],
    correct: 1,
    explanation: "Open windows immediately (before water pressure makes it impossible) and get out as quickly as possible. Don't wait - cars sink quickly."
  },
  {
    id: 260,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 What should you do first if you are in an accident?",
    options: [
      "Leave the scene immediately",
      "Check for injuries and call 911 if needed",
      "Take photos for social media",
      "Argue about who's at fault"
    ],
    correct: 1,
    explanation: "First check for injuries and call 911 if anyone is hurt. Then move vehicles out of traffic if possible, exchange information, and report to police if required."
  },
  {
    id: 261,
    type: 'true-false',
    category: 'emergency-situations',
    question: "🚨 You must report any accident involving injury, death, or property damage over $500.",
    correct: true,
    explanation: "True! Florida law requires you to report any crash involving injury, death, or property damage exceeding $500 to law enforcement."
  },
  {
    id: 262,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If your vehicle breaks down on the highway, you should:",
    options: [
      "Stop in the left lane",
      "Pull as far right as safely possible, turn on hazards",
      "Stop in the middle of the road",
      "Keep driving until you get home"
    ],
    correct: 1,
    explanation: "Pull as far to the right as safely possible, turn on emergency flashers, and stay in your vehicle if it's safe. If you must exit, get well off the roadway."
  },
  {
    id: 263,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 When should you use your emergency flashers?",
    options: [
      "When driving in rain",
      "When your vehicle is disabled or you're driving unusually slowly",
      "When you're running late",
      "Whenever you want to park"
    ],
    correct: 1,
    explanation: "Use emergency flashers when your vehicle is disabled, you're driving significantly below the speed limit, or to warn others of a hazard ahead."
  },
  {
    id: 264,
    type: 'true-false',
    category: 'emergency-situations',
    question: "🚨 If you have a flat tire on the highway, it's safest to drive to the next exit if it's close.",
    correct: false,
    explanation: "False! Pull over as soon as it's safe to do so. Driving on a flat tire damages the wheel and makes the vehicle harder to control, potentially causing an accident."
  },
  {
    id: 265,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If your engine overheats, you should:",
    options: [
      "Keep driving to your destination",
      "Pull over safely, turn off engine, and let it cool before checking coolant",
      "Pour cold water on the engine immediately",
      "Rev the engine to cool it down"
    ],
    correct: 1,
    explanation: "Pull over safely, turn off the engine, and wait for it to cool completely before checking coolant. Never remove the radiator cap when hot - it can cause severe burns."
  },
  {
    id: 266,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If you see an emergency vehicle with flashing lights approaching from behind, you must:",
    options: [
      "Speed up to get out of the way",
      "Stop immediately wherever you are",
      "Pull over to the right and stop",
      "Change lanes to the left"
    ],
    correct: 2,
    explanation: "Pull over to the right edge of the road and stop until the emergency vehicle has passed. Check for others that may be following."
  },
  {
    id: 267,
    type: 'true-false',
    category: 'emergency-situations',
    question: "🚨 The Move Over Law requires you to move over a lane for stopped emergency vehicles.",
    correct: true,
    explanation: "True! Florida's Move Over Law requires you to move over a lane (if safe) or slow down to 20 mph below the speed limit when passing stopped emergency, sanitation, utility, or tow vehicles."
  },
  {
    id: 268,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If your steering fails, you should:",
    options: [
      "Pump the gas pedal",
      "Turn off the ignition immediately",
      "Use your brakes to slow down and pull off the road",
      "Shift into reverse"
    ],
    correct: 2,
    explanation: "If steering fails, take your foot off the gas, use the brakes to slow down, turn on hazard lights, and try to pull off the road safely."
  },
  {
    id: 269,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 What should you do if you miss your exit on the highway?",
    options: [
      "Reverse back to the exit",
      "Stop and back up",
      "Continue to the next exit",
      "Make a U-turn on the highway"
    ],
    correct: 2,
    explanation: "Never stop, back up, or reverse on a highway. Continue to the next exit. It's safer to go a little out of your way than risk a serious accident."
  },
  {
    id: 270,
    type: 'true-false',
    category: 'emergency-situations',
    question: "🚨 If you're involved in a minor accident with no injuries, you must still call the police.",
    correct: false,
    explanation: "False! In Florida, you only need to call police if there are injuries, deaths, or if vehicles are disabled and blocking traffic. However, you must exchange information and file a crash report if damages exceed $500."
  },
  {
    id: 271,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If someone is injured in an accident, you should:",
    options: [
      "Move them immediately",
      "Give them food and water",
      "Call 911 and keep them calm without moving them unless necessary",
      "Drive them to the hospital yourself"
    ],
    correct: 2,
    explanation: "Call 911 immediately. Don't move injured people unless they're in immediate danger (fire, traffic). Keep them calm and wait for professional help."
  },
  {
    id: 272,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If your car stalls on railroad tracks, you should:",
    options: [
      "Stay in the car and call for help",
      "Try to restart the car",
      "Get out immediately and move away from the tracks at a 45-degree angle",
      "Wait for the train to push your car off"
    ],
    correct: 2,
    explanation: "Get out immediately and run away from the tracks at a 45-degree angle in the direction the train is coming from. Call 911 once you're safe."
  },
  {
    id: 273,
    type: 'true-false',
    category: 'emergency-situations',
    question: "🚨 You should keep an emergency kit in your vehicle with items like water, flashlight, and first aid supplies.",
    correct: true,
    explanation: "True! An emergency kit should include water, non-perishable food, flashlight, batteries, first aid kit, jumper cables, tire repair kit, and blanket."
  },
  {
    id: 274,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 If you witness an accident, you should:",
    options: [
      "Leave quickly to avoid involvement",
      "Stop to help if safe, call 911, and provide a statement if needed",
      "Post about it on social media first",
      "Direct traffic yourself"
    ],
    correct: 1,
    explanation: "Stop safely away from the accident scene, call 911, offer assistance if you're able, and stay to provide a witness statement to police if requested."
  },
  {
    id: 275,
    type: 'multiple-choice',
    category: 'emergency-situations',
    question: "🚨 The best way to prevent your vehicle from being stolen is to:",
    options: [
      "Leave it running to warm up",
      "Hide a spare key under the car",
      "Lock doors, take keys, park in well-lit areas",
      "Leave windows down for ventilation"
    ],
    correct: 2,
    explanation: "Always lock your doors, take your keys, close windows, park in well-lit areas, and use anti-theft devices. Never leave your car running unattended."
  }
];

// Shuffle function to randomize questions
export const shuffleQuestions = (questions) => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
