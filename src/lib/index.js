
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,
  auth, provider,
} from './firebase.js';

// Función que redirecciona al acceso con Google
export function callLoginGoogle() {
  return signInWithPopup(auth, provider);
}

// Función que crea un nuevo usuario con firebase y utiliza email y password
export function submitNewUserInfo(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Función que hace log in con email y password con firebase
export function submitUserInfo(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
