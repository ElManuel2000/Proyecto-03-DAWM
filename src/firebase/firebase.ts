// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNaJgLE0MrINVb8c8UbPK-IhtnWcVFtEs",
  authDomain: "flavors-of-cacao.firebaseapp.com",
  projectId: "flavors-of-cacao",
  storageBucket: "flavors-of-cacao.firebasestorage.app",
  messagingSenderId: "451803692016",
  appId: "1:451803692016:web:8b3a6cc8e5683819a63b35",
  measurementId: "G-XSPW6GMVYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
