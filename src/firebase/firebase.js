
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY0jPAtNan32oNJEmg8HaSHCeNZ5waFI0",
  authDomain: "golden-day-mm.firebaseapp.com",
  databaseURL: "https://golden-day-mm-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "golden-day-mm",
  storageBucket: "golden-day-mm.appspot.com",
  messagingSenderId: "52961655254",
  appId: "1:52961655254:web:5dd6c227a27ee2a1cf8c77",
  measurementId: "G-SXTNKM0KVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = firebase.auth();