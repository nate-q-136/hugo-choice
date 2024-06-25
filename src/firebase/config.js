// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5FCO0VmceeZgceIY9fs9QtNHZzUBNCJ8",
  authDomain: "chat-app-react-cc93a.firebaseapp.com",
  projectId: "chat-app-react-cc93a",
  storageBucket: "chat-app-react-cc93a.appspot.com",
  messagingSenderId: "722841471647",
  appId: "1:722841471647:web:d20c07ab1a2b0905dab0aa",
  measurementId: "G-ZCQ8DLN56L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, db, analytics}