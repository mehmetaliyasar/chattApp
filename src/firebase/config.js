// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBokGZEWzdt-N8rpGMuI9wW30BxVI6QP3o",
  authDomain: "chat-app-bfeb9.firebaseapp.com",
  projectId: "chat-app-bfeb9",
  storageBucket: "chat-app-bfeb9.appspot.com",
  messagingSenderId: "825002276100",
  appId: "1:825002276100:web:7698e658fe7a3024c90c51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//authentication hizmetinin referansını al
export const auth = getAuth(app);

//google sağlayıcısının kurulumunu yap
export const provider = new GoogleAuthProvider();

// veritabanı hizemetinin referansını al
export const db = getFirestore(app);
