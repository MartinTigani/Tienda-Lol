// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIOS2YSWI47jsIgt-jMyGSuJkue8Capfc",
  authDomain: "mittiendalol.firebaseapp.com",
  projectId: "mittiendalol",
  storageBucket: "mittiendalol.firebasestorage.app",
  messagingSenderId: "1020559188665",
  appId: "1:1020559188665:web:1e14187e834dddb45b7168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

const auth = getAuth(app);
export {db, auth };