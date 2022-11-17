import { db } from '../firebase/firebase'
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';


const Categories = () => {




    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
        consumirCategories()
    }, [])

    const consumirCategories = async () => {
        const querySnapshot = await getDocs(collection(db, "categories"));
        const category = querySnapshot.forEach((doc) => {
            setPersonajes(personajes.push(doc.data().category))
        });
    }

    return (
        <>
            <br /><br /><br /><br /><br /><br />
            <button >Enviar</button>
            {
                console.log(personajes)
            }
        </>
    )

}

export default Categories