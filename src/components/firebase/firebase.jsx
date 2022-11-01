/* Importamos las funciones de firebase */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


/* Declaramos las configuraciones de firebase */
const firebaseConfig = {
    apiKey: "AIzaSyDv0_F_VeQpqoTN22wSkretYlwe20Ef818",
    authDomain: "tiendadetecnologiacoderhouse.firebaseapp.com",
    projectId: "tiendadetecnologiacoderhouse",
    storageBucket: "tiendadetecnologiacoderhouse.appspot.com",
    messagingSenderId: "997977682689",
    appId: "1:997977682689:web:2a0c751ea4fa31b95ca100",
    measurementId: "G-EQYHDSX0ZJ"
};


// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);