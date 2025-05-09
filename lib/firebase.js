// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCNFXRTgqrOYylmbB6BNDaPCa9U7s1_08Q",
    authDomain: "lumifusion-70f76.firebaseapp.com",
    projectId: "lumifusion-70f76",
    storageBucket: "lumifusion-70f76.firebasestorage.app",
    messagingSenderId: "50185060642",
    appId: "1:50185060642:web:8e7c19863d4be83270657b"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
