//import { navigateTo } from "../main";
import { getRedirectResult, getAuth, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase";
import { auth, provider } from './firebase';

//Función que redirecciona al acceso con Google
export function callLoginGoogle() {
    return signInWithRedirect(auth, provider)
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
  