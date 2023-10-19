import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { navigateTo } from "../main";
//import { renderLogin } from './login.js';

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

const provider = new GoogleAuthProvider();
const auth = getAuth();

//Función que redirecciona al acceso con Google
 export function callLoginGoogle() {
  signInWithRedirect(auth, provider);
};

//Función que crea un nuevo usuario con firebase y utiliza email y password
export function submitNewUserInfo(email, password) {
  console.log(email, password);
   return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigateTo('/home');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('error: ', error.message);
    // ..
  });
};

//Función que hace log in con email y password con firebase
export function submitUserInfo(email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};
