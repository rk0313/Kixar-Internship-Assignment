Kixar App - Internship Assignment

This is a React Native mobile application built with Expo, demonstrating a Turf Booking flow. It was created as part of the Kixar React Native + Full-Stack Internship Assignment.

📱 Deliverables

Turf Details Screen: Replicates the UI from Figma, including banner, amenities, ratings, and reviews.

Booking Screen: Functional date, time, court, and player selection logic with validation.

My Bookings Screen: Displays booked slots using Global Context API.

🛠 Tech Stack

Framework: React Native (Expo)

Navigation: React Navigation (Native Stack)

State Management: React Context API (Global State)

Icons: Lucide React Native

Styling: StyleSheet (Standard React Native)

🚀 Setup Instructions

Clone the repository:

git clone <YOUR_GITHUB_REPO_URL>
cd KixarApp


Install dependencies:

npm install


Run the app:

npx expo start


Test:

Scan the QR code with the Expo Go app on your Android/iOS device.

Or press a to run on Android Emulator / i for iOS Simulator.

⏱️ Time Spent

Total Effort: ~5 hours

Focus Areas: Component structure, Global State integration (Context API), and pixel-perfect UI matching.

📝 Assumptions made

Data: Since no backend was required, strictly static data (turfData.js) is used for the Turf details and reviews.

Auth: User authentication is skipped; the app assumes a guest user flow.

Payment: The "Pay & Book" button simulates a successful payment with an alert, as real gateway integration requires merchant keys and backend verification.

🐛 Known Issues

Map View: The map is currently a static placeholder image (as per Phase 1 requirements) instead of an interactive Google Map.

Persistence: Bookings are stored in Context (RAM). Reloading the app clears "My Bookings".

🔮 Pending Improvements (Future Roadmap)

Google Maps Integration: Replace static image with react-native-maps for live location.

Backend Integration: Connect to Firebase/Node.js to fetch real slots and save bookings.

Persistent Storage: Implement AsyncStorage to keep bookings history after closing the app.

Submitted by [Rahil Khan]
