import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebase'
import { useState, useEffect } from "react";



const FiltroCategory = () => {
    const [category, setCategory] = useState([])
    const arr = []

    const myFuncion = async () => {
        const querySnapshot = await getDocs(collection(db, "categories"));
        querySnapshot.forEach((e) => {
            arr.push({ category: e.data().category, id: e.id })
        })
        try {
            setCategory(arr)
        } catch {
            console.log('hola');
        }
    }

    return (<>
        <form>
            <select onClick={myFuncion}>
                <option value="false" hidden>Seleccione una categoría</option>
                {
                    category.map((e) => (
                        <option value={e.category} key={e.id}>{e.category}</option>
                    ))
                }
            </select>
            <button type="input">filtrar</button>
        </form>

    </>
    )
}

export default FiltroCategory