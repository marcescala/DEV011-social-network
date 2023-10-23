import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
import { getRedirectResult, getAuth, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export { getRedirectResult, getAuth, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } ;
const firebaseConfig = {
  apiKey: "AIzaSyBr5Z4iOCJqUFUVsIJYjm4-fS6ZYJTalls",
  authDomain: "habitate-5e51d.firebaseapp.com",
  projectId: "habitate-5e51d",
  storageBucket: "habitate-5e51d.appspot.com",
  messagingSenderId: "700997763612",
  appId: "1:700997763612:web:2c069c2a7f4b49a316d5d9",
  measurementId: "G-W5HYR984QH"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();

