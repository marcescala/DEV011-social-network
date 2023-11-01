import { async } from 'regenerator-runtime';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,
  auth, provider, db, addDoc, collection, getDocs, onSnapshot, orderBy, query,
  updateDoc, arrayUnion, arrayRemove, doc, getDoc, deleteDoc,
} from './firebase.js';

export { auth, db, doc };

const postCollection = collection(db, 'posts');

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

export const addPost = (message, postType, userID) => {
  addDoc(postCollection, {
    message,
    postType,
    usuario: userID,
    likes: [],
    date: Date.now(),
  });
};

export const obtenerUsuario = () => {
  const user = auth.currentUser;
  if (user !== null) return user;
  return 'no hay usuarios';
};

// Función para poder traer los post de la base de datos
export const querySnapshot = getDocs(postCollection);

export const q = query(postCollection, orderBy('date', 'desc'));

// Función para poder ver la data en tiempo real
export const renderRealTime = (callback) => onSnapshot(q, callback);

// Función para borrar un post
export const deletePost = (id) => {
  deleteDoc(doc(db, 'posts', id));
};

// Pruebas para la función del like

export const addLike = async (id, userID) => {
  const docRef = doc(db, 'posts', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const likes = docSnap.data().likes;
    if (!likes.includes(userID)) {
      // Agrega el UID del usuario al array utilizando arrayUnion
      updateDoc(docRef, {
        likes: arrayUnion(userID),
      })
        .then(() => {
          // Verifica el número de usuarios que han dado click
          const numLikes = likes.length + 1;
          console.log(`Número de usuarios que han dado click: ${numLikes}`);
        });
    }
  }
};

export const removeLike = (id, userID) => {
  const docRef = doc(db, 'posts', id);
  updateDoc(docRef, {
    likes: arrayRemove(userID),
  });
};

// Función que nos sugirió chat GPT

/* export const addLike = (docRef) => {
  getDoc(docRef)
    .then(() => {
      if (doc.exists) {
      // Obtiene el array actual de UIDs (si existe)
        const likes = docRef.data().likes || [];
        console.log(likes);

        // Verifica si el UID del usuario ya está en el array
        if (!likes.includes(userID)) {
        // Agrega el UID del usuario al array utilizando arrayUnion
          updateDoc(docRef, {
            likes: arrayUnion(userID),
          })
            .then(() => {
              console.log('UID del usuario agregado al array con éxito.');

              // Verifica el número de usuarios que han dado click
              const numClicks = likes.length + 1;
              console.log(`Número de usuarios que han dado click: ${numClicks}`);
            })
            .catch((error) => {
              console.error('Error al agregar el UID al array:', error);
            });
        } else {
          console.log('El usuario ya ha dado click.');
        }
      } else {
        // console.log('El documento no existe.');
      }
    })
    .catch((error) => {
      console.error('Error al obtener el documento:', error);
    });
};
*/
