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
                cleanCart()
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
                        <label className="name">Nombre y apellido</label>
                        <input placeholder="escriba su nombre y apellido" className="llenar" type="text" {...register('name', { required: true, minLength: 5 })} />
                    </section>
                    {errors.name?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.name?.type === 'minLength' && <p className="alerta">*El nombre de ser mayor a 5 caracteres</p>}
                </section>


                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Número de Teléfono</label>
                        <input placeholder="número de contácto" className="llenar" type="number" {...register('telephone', { required: true, maxLength: 14, minLength: 9 })} />
                    </section>
                    {errors.telephone?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.telephone?.type === 'maxLength' && <p className="alerta">*El nombre debe ser menor a 15 caracteres</p>}
                    {errors.telephone?.type === 'minLength' && <p className="alerta">*El telefono debe ser mayor a 8 caracteres</p>}
                </section>


                <section className="divForm">
                    <label className="name">Incluir documento ?</label>
                    <input className="checkbox" type="checkbox" {...register('includeTel')} />
                </section>


                <section className="inputLabel">
                    {includeTel && (
                        <section className="inputLabel">
                            <section className="divForm">
                                <label className="name">Número de DNI</label>
                                <input placeholder="escriba su dni" className="llenar" type="number" {...register('dni', { required: true, maxLength: 9, minLength: 7 })} />
                            </section>
                            {errors.dni?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                            {errors.dni?.type === 'maxLength' && <p className="alerta">*El telefono debe ser menor a 10 caracteres</p>}
                            {errors.dni?.type === 'minLength' && <p className="alerta">*El telefono debe ser mayor a 6 caracteres</p>}
                        </section>
                    )}
                </section>


                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Dirección</label>
                        <input placeholder="dirección exacta para envío" className="llenar" type="text" {...register('adress', { required: true, minLength: 5 })} />
                    </section>
                    {errors.adress?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.adress?.type === 'minLength' && <p className="alerta">*La direccion debe contener al menos 5 caracteres</p>}
                </section>


                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Email</label>
                        <input placeholder="escriba su email" className="llenar" type="text" {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
                    </section>
                    {errors.email?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.email?.type === 'pattern' && <p className="alerta">*El formato del email es incorrecto</p>}
                </section>

                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Tipo de vendedor</label>
                        <select className="llenar" placeholder="Seleccione su tipo de vendedor">
                            <option value="Vendedor ambulante">Vendedor ambulante</option>
                            <option value="Ventas por Redes Sociales">Ventas por Redes Sociales</option>
                            <option value="Local al publico">Local al publico</option>
                            <option value="ShowRoom">ShowRoom</option>
                        </select>
                    </section>
                </section>

                <input className="submit" type="submit" value="Finalizar pedido" />
            </form>
        </section>
    )

}

export default Formulario