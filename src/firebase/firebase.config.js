// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdk24i3_XGB7aqIxd0v2RDGQcMq2T7aJs",
  authDomain: "registrationsystemtest-64305.firebaseapp.com",
  projectId: "registrationsystemtest-64305",
  storageBucket: "registrationsystemtest-64305.appspot.com",
  messagingSenderId: "287569086113",
  appId: "1:287569086113:web:c6a482ca0cd1fb060f12e0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
