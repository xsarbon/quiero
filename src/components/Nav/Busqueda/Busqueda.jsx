import './BusquedaStyles.css';
import { collection, getDoc, query, where } from "firebase/firestore"; 
import { db } from '../../firebase/firebase'
import { useForm } from "react-hook-form";

const Busqueda = () => {
    const { register, handleSubmit } = useForm({})
    
    return (
        <div className='busqueda'>
            <span>
                <ion-icon name="search-outline"></ion-icon>
            </span> 
            <form onSubmit={handleSubmit()}>
                <input onChange={''} className='busqueda' type="text" {...register} />
            </form>
        </div>
    )
}
export default Busqueda