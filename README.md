# VoteGuide AI 🗳️

> **Demystifying the Indian Electoral Process through AI and Inclusivity.**

VoteGuide AI is a dynamic, multilingual, and highly accessible web platform built to simplify the complex voting and registration processes in India (targeting the 2026 election cycle). It serves as a comprehensive guide for navigating Form 6/8 documentation, tracking electoral phases, and understanding accessibility rights.

## 🚀 Key Features

* **Multi-Language Support (i18n):** Instant toggling between English, Hindi, and Marathi across the entire application.
* **AI Voice Accessibility:** Built-in Web Speech API integration that dynamically reads out rights and instructions in the user's selected language with appropriate regional accents.
* **Cloud-Synced Persistence:** Powered by Firebase Auth and Firestore, users can securely track their document-gathering and timeline progress across any device.
* **Google Calendar Integration:** One-click integration to push critical 2026 election phases directly to the user's personal Google Calendar via OAuth2.
* **Modern UI/UX:** A responsive, accessible Glassmorphism design with a fully functioning Light/Dark mode toggle.

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite, React Router, vanilla CSS
* **Backend / DB:** Firebase Authentication, Google Cloud Firestore
* **APIs:** Google Calendar API, Web Speech API (Text-to-Speech)
* **Deployment:** Docker, Nginx, Google Cloud Run

## ⚙️ Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kartikeydhale18/VoteGuide-AI.git
   cd VoteGuide-AI
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your Firebase config keys:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```

## 🌐 Deployment (Firebase Hosting)

This application is deployed using Firebase Hosting, ensuring fast, secure, and free global content delivery.

```bash
# Build the production application
npm run build

# Deploy to Firebase Hosting
npx firebase deploy --only hosting
```

## 🏆 Hackathon Submission Details
**Challenge:** PromptWars Virtual (Challenge 2: Civic Education)
**Developed by:** Kartikey A Dhale