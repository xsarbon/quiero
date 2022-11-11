/* Importamos la base de datos de firebase */
import { db } from "../firebase/firebase"
import { useForm } from "react-hook-form";
import { uploadFile } from "../firebase/firebase";
import { useState } from "react";

/* Declaramos la funcion Formulario */


const Admin = () => {

    /* Subida de archivo al servidor */
    const [file, setfile] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await uploadFile(file)
            console.log(result);
        } catch (error) {
            console.error(error)
            alert('Fallo al subir, intente mas tarde')
        }
    }



    return (
        <>
            <br /><br /><br /><br /><br /><br /><br />
            <h1>Cargar producto</h1>
            <form onSubmit={handleSubmit}>

                <input type="file" name="" id="" onChange={e => setfile(e.target.files[0])} />
                <button>
                    Subir
                </button>
            </form>
        </>
    )

}

export default Admin