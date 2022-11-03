/* Importamos la base de datos de firebase */
import { db } from "../firebase/firebase"
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { edadValidator } from "../utils/validators";
import './formStyles.css'
import { useCartContext } from "../../context/CartContext"
import Swal from 'sweetalert2'

/* Declaramos la funcion Formulario */
const Formulario = () => {

    /* Importamos las funciones necesarios desde el cartContext */
    const { cartList, totalPrice, cleanCart } = useCartContext()

    /* Declaramos la constante total y la igualamos a lo que devuelva la funcion totalPrice  */
    const total = totalPrice()

    /* Declaramos la constante items y la igualamos a lo que devuelva la funcion cartList  */
    const items = cartList

    /* Declaramos las funciones a utilizar de reack-hook-form y asignamos los valores por defecto que necesitamos*/
    const { register, handleSubmit, formState: { errors }, watch } = useForm({

    })


    /* Funcion que guarda los datos de la compra y del cliente en la base de datos */
    const onSubmit = (data) => {
        const salesCollection = collection(db, "salesClient");
        addDoc(salesCollection, {
            data, total, items, date: serverTimestamp()
        })

            /* Funcion que agradece al cliente y muestra por alert el ID de su compra */
            .then((res) => {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'gracias por su compra, su ID de pago es ' + res.id,
                    showConfirmButton: true,
                })

            })

        /* Funcion para actualizar el stock  */
        const update = items.map((prod) => {
            const updateStock = doc(db, "listProducts", prod.id)
            const stock = prod.stock - prod.quantity
            updateDoc(updateStock, { stock })

        })



    }

    /* Funcion para consultar al cliente si desea agregar el numero de telefono */
    const includeTel = watch('includeTel');


    return (

        /* Estructura HTML y JS que verifica si los datos ingresados se cumplen con los requisitos de seguridad */
        <section className="formPayment">
            <h2 className="formulario">Formulario de compra</h2>
            <form className="formul" onSubmit={handleSubmit(onSubmit)}>
                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Nombre</label>
                        <input className="llenar" type="text" {...register('name', { required: true, maxLength: 15, minLength: 2 })} />
                    </section>
                    {errors.name?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.name?.type === 'maxLength' && <p className="alerta">*El nombre de ser menor a 15 caracteres</p>}
                    {errors.name?.type === 'minLength' && <p className="alerta">*El nombre de ser mayor a 2 caracteres</p>}
                </section>
                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Apellido</label>
                        <input className="llenar" type="text" {...register('surname', { required: true, maxLength: 15, minLength: 2 })} />
                    </section>

                    {errors.surname?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.surname?.type === 'maxLength' && <p className="alerta">*El nombre de ser menor a 15 caracteres</p>}
                    {errors.surname?.type === 'minLength' && <p className="alerta">*El nombre de ser mayor a 2 caracteres</p>}
                </section>
                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Email</label>
                        <input className="llenar" type="text" {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
                    </section>
                    {errors.email?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.email?.type === 'pattern' && <p className="alerta">*El formato del email es incorrecto</p>}
                </section>
                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Direccion</label>
                        <input className="llenar" type="text" {...register('adress', { required: true, minLength: 5 })} />
                    </section>
                    {errors.adress?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.adress?.type === 'minLength' && <p className="alerta">*La direccion debe contener al menos 5 caracteres</p>}
                </section>
                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Edad</label>
                        <input className="llenar" required type="text" {...register('age', { required: true, validate: edadValidator })} />
                    </section>
                    {errors.age && <p className="alerta">*La edad debe estar entre 18 y 65 años</p>}
                </section>
                <section className="divForm">
                    <label className="name">Desea incluir el telefono ?</label>
                    <input className="checkbox" type="checkbox" {...register('includeTel')} />
                </section>
                <section className="inputLabel">
                    {includeTel && (
                        <section className="inputLabel">
                            <section className="divForm">
                                <label className="name">Telefono</label>
                                <input className="llenar" type="tel" {...register('telephone', { required: true, maxLength: 17, minLength: 9 })} />
                            </section>
                            {errors.telephone?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                            {errors.telephone?.type === 'maxLength' && <p className="alerta">*El telefono debe ser menor a 17 caracteres</p>}
                            {errors.telephone?.type === 'minLength' && <p className="alerta">*El telefono debe ser mayor a 9 caracteres</p>}
                        </section>
                    )}
                </section>
                <input className="submit" type="submit" value="Finalizar pedido" />
            </form>
        </section>
    )

}

export default Formulario