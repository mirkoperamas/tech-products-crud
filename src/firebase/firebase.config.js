// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTXeMLYwx8oAQDqGfvTRNwBdX4sG80Jtk",
  authDomain: "registrationsystemtest-74458.firebaseapp.com",
  projectId: "registrationsystemtest-74458",
  storageBucket: "registrationsystemtest-74458.appspot.com",
  messagingSenderId: "827817820071",
  appId: "1:827817820071:web:9d88151b7919d8f2adc082",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
