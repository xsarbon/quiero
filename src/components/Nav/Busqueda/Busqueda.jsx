import './BusquedaStyles.css';
import { collection, getDoc, query, where } from "firebase/firestore"; 
import { db } from '../../firebase/firebase'
import { useForm } from "react-hook-form";

const Busqueda = () => {
    const { register, handleSubmit } = useForm({})
    const search=async({texto})=>{
        const querySnapshot = await getDoc(collection(db, "categories"))
        const queri=query(querySnapshot,where('name','==',`${texto}`))
    }

    return (
        <div className='busqueda'>
            <span>
                <ion-icon name="search-outline"></ion-icon>
            </span> 
            <form onSubmit={handleSubmit(search)}>
                <input onChange={search()} className='busqueda' type="text" {...register} />
            </form>
        </div>
    )
}
export default Busqueda