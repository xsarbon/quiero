import {app,db} from '../../firebase/firebase'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, getDocs } from "firebase/firestore";
import {v4}from 'uuid'
import React,{ useState } from 'react'
import { useForm } from "react-hook-form";

const SubirProd = () => {
    const [category,setCategory]=useState([])
    const cat=[]

    const myFuncion=async()=>{
        const querySnapshot = await getDocs(collection(db, "categories"));
        querySnapshot.forEach((doc) => {
        cat.push({category:doc.data().category ,id:doc.id})
        return(setCategory(cat))
        });
    }

    const storage = getStorage(app)

    const [file, setFile]=useState(null);

    /* funcion para subir el archivo */
    async function uploadFile(file){
        const storageRef=ref(storage,'products/'+v4())
        await uploadBytes(storageRef,file)
        const url = await getDownloadURL(storageRef)
        return url
    }
    const { register, handleSubmit } = useForm({

    })




    /* al clickear en subir con async/await */
    const onSubmit=async(e)=>{
        try {
            const result = await uploadFile(file);
            const productsCollection = collection(db, "listProducts");
            console.log(e);
            addDoc(productsCollection, {
                product:e.product, image:result, price:e.price, description:e.description, initial:1,category:e.category, alt:e.alt
            })            




            let formul = document.getElementById('formul')
            formul.reset() 
            
        }catch(error){
            console.log(error);
            alert('Fallo al subir, vuelva a intentar')
        }
    }

    return (<>
        <form id='formul' onSubmit={handleSubmit(onSubmit)} >
                    <br /><br /><br /><br /><br /><br /><br />
            <section>
                <label className="name">Nombre de producto</label>
                            <input placeholder="Nombre de producto" className="llenar" type="text" {...register('product', { required: true })} />
            </section>
            <section>
                <label className="name">Precio del producto</label>
                            <input placeholder="Precio del producto" className="llenar" type="number" {...register('price', { required: true })} />
            </section>
            <section>
                <label className="name">Descripcion del producto</label>
                            <input placeholder="Descripcion del producto" className="llenar" type="text" {...register('description', { required: false })} />
            </section>
            
            <section>
            <label>Seleccione categoria: </label>
                
                <select {...register('category')} onClick={myFuncion}>
                <option value='false' hidden placeholder='Categoria'>Seleccione categoria</option>
                    {
                        category.map((e)=>{
                            return (<option value={e.category} key={e.id} >{e.category}</option>)
                        })
                    }
        </select>       
            </section>

            <section>
                <label className="name">Optimizacion SEO</label>
                            <input placeholder="SEO" className="llenar" type="text" {...register('alt', { required: true })} />
            </section>
            <section>
                <label>Seleccione una imagen</label>
                <input required type="file" onChange={e=>setFile(e.target.files[0])} />
            </section>
            
            <button>Subir</button>
        </form>
        </>
    )


}
export default SubirProd