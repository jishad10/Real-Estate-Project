// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e1968.firebaseapp.com",
  projectId: "mern-estate-e1968",
  storageBucket: "mern-estate-e1968.appspot.com",
  messagingSenderId: "256573387713",
  appId: "1:256573387713:web:74853f7158f64eba54b540"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);