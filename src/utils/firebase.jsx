// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD111phrIPwqOKf4pCIMSAWqEaawipdzJ8",
  authDomain: "streamverse-f4a42.firebaseapp.com",
  projectId: "streamverse-f4a42",
  storageBucket: "streamverse-f4a42.appspot.com",
  messagingSenderId: "416527273181",
  appId: "1:416527273181:web:7eba7c0a7a533da6201f34",
  measurementId: "G-T0T6DSLS8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase auth
export const auth = getAuth();