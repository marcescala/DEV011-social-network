import {
  getFirestore, addDoc, collection, getDocs, orderBy, query,
} from 'firebase/firestore';
import { app } from './firebase.js';

export const db = getFirestore(app);

export {
  getFirestore, addDoc, collection, getDocs, orderBy, query,
};