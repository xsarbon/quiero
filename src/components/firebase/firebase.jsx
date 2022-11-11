/* Importamos las funciones de firebase */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'


/* Declaramos las configuraciones de firebase */
const firebaseConfig = {
    apiKey: "AIzaSyDST0AizoP98U5YZD8QcfD754ApxX7_Pc0",
    authDomain: "quiero-todo-prueba.firebaseapp.com",
    projectId: "quiero-todo-prueba",
    storageBucket: "quiero-todo-prueba.appspot.com",
    messagingSenderId: "402458201024",
    appId: "1:402458201024:web:1b68adf90b3c2c1cc31625",
    measurementId: "G-C53FFNK6DC"
};

//funcion para subir el archivo Bytes

export async function uploadFile(file) {
    const storageRef = ref(storage, v4() + file.name)
    return await uploadBytes(storageRef, file)
}



// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);