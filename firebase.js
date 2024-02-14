// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithEmailLink, } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFU5DsYJTOxf9n1byUv2e5c0NUxijwJBA",
  authDomain: "news24-9cf46.firebaseapp.com",
  projectId: "news24-9cf46",
  storageBucket: "news24-9cf46.appspot.com",
  messagingSenderId: "135010045052",
  appId: "1:135010045052:web:7f3f997a7434ed83b0cdf9",
  measurementId: "G-RW25KN79TP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
// export const newprovider = signInWithEmailLink
// export const analytics = getAnalytics(app);