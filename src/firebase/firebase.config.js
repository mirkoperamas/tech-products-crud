// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2zSXIxdommQlb2iuxUi8Dr2MwhTdQ0g8",
  authDomain: "registrationsystemtest.firebaseapp.com",
  projectId: "registrationsystemtest",
  storageBucket: "registrationsystemtest.appspot.com",
  messagingSenderId: "491616452778",
  appId: "1:491616452778:web:07a2835baaa75c71c390d3",
  measurementId: "G-B8M7H7KBV7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
