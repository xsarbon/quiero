import {db} from '../firebase/firebase'
import { collection, getDocs } from "firebase/firestore";
import {NavLink} from 'react-router-dom'


async function Categories(){
    const refDocs=await getDocs (collection(db, 'categories'))
    
}

export default Categories