// Import Firebase and Firestore
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Setup Firestore database
const db = getFirestore(app)
export { db }