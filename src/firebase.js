// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";

import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCUuI2xshlDJhHd_yvdYf-Q1LHJHXZxjKA",
  authDomain: "chat-fbd4b.firebaseapp.com",
  projectId: "chat-fbd4b",
  storageBucket: "chat-fbd4b.appspot.com",
  messagingSenderId: "290338427681",
  appId: "1:290338427681:web:5f9cefebba6eb250bc2460",
  measurementId: "G-LDRHV8BD41"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Create a root reference
export const storage = getStorage();

export const auth = getAuth();

export const db = getFirestore();