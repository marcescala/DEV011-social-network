import {
  getFirestore, addDoc, collection, getDocs, orderBy, query, where,
} from 'firebase/firestore';
import {
  getStorage, ref, getDownloadURL, uploadBytes,
} from 'firebase/storage';

import { app } from './firebase.js';

export const db = getFirestore(app);


export {
  getFirestore, addDoc, collection, getDocs, orderBy, query, where,
};
export {
  getStorage, ref, getDownloadURL, uploadBytes,
};
