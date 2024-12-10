// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhfHjRW7UGOtm6uuEumqkeGzZ9VGnC_9U",
  authDomain: "skillshare-15c3f.firebaseapp.com",
  projectId: "skillshare-15c3f",
  storageBucket: "skillshare-15c3f.firebasestorage.app",
  messagingSenderId: "255141009994",
  appId: "1:255141009994:web:62a59cec5a76661e0aa4b3",
  measurementId: "G-EKFZ4N1TRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", app);

const authInstance = getAuth(app);
console.log("Firebase Auth instance initialized:", authInstance);

export const auth = authInstance;
const analytics = getAnalytics(app);
export default app;
