// src/firebase-config.js

// 1. Remove the line for 'analytics' (unless you specifically need it)
// 2. Add the import for 'getFirestore'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // <--- ADD THIS LINE

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwIKWZtBSxfYv9NAwiFaAOyr6VhX7cD_c",
  authDomain: "website-demo-2-47278.firebaseapp.com",
  projectId: "website-demo-2-47278",
  storageBucket: "website-demo-2-47278.firebasestorage.app",
  messagingSenderId: "404848419048",
  appId: "1:404848419048:web:4a51a33eab7b5a8553a95d",
  measurementId: "G-N78RTDR0F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 3. Initialize and EXPORT Firestore (the database service)
export const db = getFirestore(app); // <--- REPLACE 'const analytics = getAnalytics(app);' with this line