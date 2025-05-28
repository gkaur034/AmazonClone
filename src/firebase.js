// firebase.js

// Import only what you need from the SDKs
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDtbj-ZLld3EZFB07ReGPujs_2-F6th0Ko",
  authDomain: "clone-8cc26.firebaseapp.com",
  projectId: "clone-8cc26",
  storageBucket: "clone-8cc26.firebasestorage.app",
  messagingSenderId: "295117094040",
  appId: "1:295117094040:web:6a781a80c8360b7bfaa4ed",
  measurementId: "G-D8DTJ6XD0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
