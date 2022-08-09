import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCA-0YXezScy-bC_p0qx1DBOkFNtYttNBY",
  authDomain: "ijadi-real-estate.firebaseapp.com",
  projectId: "ijadi-real-estate",
  storageBucket: "ijadi-real-estate.appspot.com",
  messagingSenderId: "530862260785",
  appId: "1:530862260785:web:a2132ebe2d321fbe0d4b10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
