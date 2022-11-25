/* Importamos las funciones de firebase */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'


/* Declaramos las configuraciones de firebase */
const firebaseConfig = {
  apiKey: "AIzaSyCdFg7NLiNtfI8E0jrDIPhnm7b0ZRrtt0E",
  authDomain: "quiero-todo.firebaseapp.com",
  projectId: "quiero-todo",
  storageBucket: "quiero-todo.appspot.com",
  messagingSenderId: "956790258584",
  appId: "1:956790258584:web:6826869434b349fa8349ed",
  measurementId: "G-NEWDQDDJBM"
};




// Inicializa Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);