import {app} from '../../firebase/firebase'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useState } from 'react'
import { useForm } from "react-hook-form";

const SubirCatalogo = () => {

    const storage = getStorage(app)

    const [file, setFile]=useState(null);


    /* funcion para subir el archivo */
    async function uploadCatalogo(file){
        const storageRef=ref(storage,'catalogo/catalogo')
        await uploadBytes(storageRef,file)
        const url = await getDownloadURL(storageRef)
        return url
    }
    const { handleSubmit } = useForm({})


    /* al clickear en subir con async/await */
    const onSubmit=async(e)=>{
        try {
            const result = await uploadCatalogo(file);
            console.log(result);
            return result
            
        }catch(error){
            console.log(error);
            alert('Fallo al subir, vuelva a intentar')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
                    <br /><br /><br /><br /><br /><br /><br />
            <section>
                <label>Seleccione catálogo</label>
                <input required type="file" onChange={e=>setFile(e.target.files[0])} />
            </section>
            <button>Subir</button>
        </form>
    )

}
export default SubirCatalogo