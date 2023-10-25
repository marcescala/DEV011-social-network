import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.js";
import { auth, provider } from './firebase';

  //Función que redirecciona al acceso con Google
  export function callLoginGoogle () {
    return signInWithPopup(auth, provider)
  };
  
  //Función que crea un nuevo usuario con firebase y utiliza email y password
  export function submitNewUserInfo(email, password) {
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password)
  };
  
  //Función que hace log in con email y password con firebase
  export function submitUserInfo(email, password) {
    console.log(email, password);
    return signInWithEmailAndPassword(auth, email, password)
  };
  