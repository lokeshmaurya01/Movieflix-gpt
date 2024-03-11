// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDye6YgqlkAVQyxU_vt1owSC3bvyt6Ho5E",
  authDomain: "movieflixgpt-935cb-f6b80.firebaseapp.com",
  projectId: "movieflixgpt-935cb",
  storageBucket: "movieflixgpt-935cb.appspot.com",
  messagingSenderId: "561617635568",
  appId: "1:561617635568:web:5c7119e06a5e5ae93fda35",
  measurementId: "G-ZEEP2R1MWT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
