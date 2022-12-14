/* Importamos la base de datos de firebase */
import { db } from "../firebase/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useForm } from "react-hook-form";
import './formStyles.css'
import { useCartContext } from "../../context/CartContext"
import Swal from 'sweetalert2'
import {NavLink} from 'react-router-dom'

/* Declaramos la funcion Formulario */
const Formulario = () => {

    /* Importamos las funciones necesarios desde el cartContext */
    const { cartList, totalPrice, cleanCart, totalQuantity } = useCartContext()

    /* Declaramos la constante total y la igualamos a lo que devuelva la funcion totalPrice  */
    const total = totalPrice()
    
    const quantity=totalQuantity()
    /* Declaramos la constante items y la igualamos a lo que devuelva la funcion cartList  */
    const items = cartList

    /* Declaramos las funciones a utilizar de reack-hook-form y asignamos los valores por defecto que necesitamos*/
    const { register, handleSubmit, formState: { errors }, watch } = useForm({})


    /* Funcion que guarda los datos de la compra y del cliente en la base de datos */
    const onSubmit = (data) => {
        const salesCollection = collection(db, "salesClient");
        addDoc(salesCollection, {
            name:data.name,
            telephone:data.telephone,
            dni:data.dni,
            adress:data.adress,
            localidad:data.localidad,
            total:data.total,
            provincia:data.provincia,
            email:data.email,
            tipo:data.tipo,
            nota:data.nota,
            date:serverTimestamp(),
            items:data.items,
            quantity,
            state:'pending',
            total,
            items
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
                let form=document.getElementById('form')
                form.reset()
                
            })



    }

    /* Funcion para consultar al cliente si desea agregar el numero de telefono */
    const includeDNI = watch('includeDNI');


    return (
        
        /* Estructura HTML y JS que verifica si los datos ingresados se cumplen con los requisitos de seguridad */
        <section className="formPayment">
            <h2 className="formulario">Formulario de compra</h2>
            <form id="form" className="formul" onSubmit={handleSubmit(onSubmit)}>


                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Nombre y apellido</label>
                        <input placeholder="Escriba su nombre y apellido" className="llenar" type="text" {...register('name', { required: true, minLength: 5 })} />
                    </section>
                    {errors.name?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.name?.type === 'minLength' && <p className="alerta">*El nombre de ser mayor a 5 caracteres</p>}
                </section>


                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">N??mero de Tel??fono</label>
                        <input placeholder="N??mero de cont??cto" className="llenar" type="number" {...register('telephone', { required: true, maxLength: 14, minLength: 9 })} />
                    </section>
                    {errors.telephone?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.telephone?.type === 'maxLength' && <p className="alerta">*El nombre debe ser menor a 15 caracteres</p>}
                    {errors.telephone?.type === 'minLength' && <p className="alerta">*El telefono debe ser mayor a 8 caracteres</p>}
                </section>


                <section className="divForm">
                    <label className="name">Incluir documento ?</label>
                    <input className="checkbox" type="checkbox" {...register('includeDNI')} />
                </section>


                <section className="inputLabel">
                    {includeDNI && (
                        <section className="inputLabel">
                            <section className="divForm">
                                <label className="name">N??mero de DNI</label>
                                <input placeholder="Escriba su dni" className="llenar" type="number" {...register('dni', { required: false, maxLength: 9, minLength: 7 })} />
                            </section>
                            {errors.dni?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                            {errors.dni?.type === 'maxLength' && <p className="alerta">*El DNI debe ser menor a 10 caracteres</p>}
                            {errors.dni?.type === 'minLength' && <p className="alerta">*El DNI debe ser mayor a 6 caracteres</p>}
                        </section>
                    )}
                </section>


                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Direcci??n</label>
                        <input placeholder="Direcci??n exacta para env??o" className="llenar" type="text" {...register('adress', { required: true, minLength: 5 })} />
                    </section>
                    {errors.adress?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.adress?.type === 'minLength' && <p className="alerta">*La direccion debe contener al menos 5 caracteres</p>}
                </section>

                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Localidad</label>
                        <input placeholder="Localidad para envio" className="llenar" type="text" {...register('localidad', { required: true, minLength: 4 })} />
                    </section>
                    {errors.localidad?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.localidad?.type === 'minLength' && <p className="alerta">*La localidad debe ser de al menos 4 letras</p>}
                </section>

                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Provincia</label>
                        <input placeholder="Provincia de residencia" className="llenar" type="text" {...register('provincia', { required: true, minLength: 5 })} />
                    </section>
                    {errors.provincia?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.provincia?.type === 'minLength' && <p className="alerta">*Debe escribir al menos 5 letras</p>}
                </section>

                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Email</label>
                        <input placeholder="Escriba su email" className="llenar" type="text" {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} />
                    </section>
                    {errors.email?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.email?.type === 'pattern' && <p className="alerta">*El formato del email es incorrecto</p>}
                </section>

                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Tipo de vendedor</label>
                        <select {...register('tipo')} required className="llenar" placeholder="Seleccione su tipo de vendedor">
                            <option value="Vendedor ambulante">Vendedor ambulante</option>
                            <option value="Ventas por Redes Sociales">Ventas por Redes Sociales</option>
                            <option value="Local al publico">Local al publico</option>
                            <option value="ShowRoom">ShowRoom</option>
                        </select>
                    </section>
                </section>

                <section className="inputLabel">
                    <section className="divForm">
                        <label className="name">Notas de compra</label>
                        <input placeholder="Escribe una nota" className="llenar" type="text" {...register('nota', { required: false })} />
                    </section>
                    {errors.name?.type === 'required' && <p className="alerta">*El campo es requerido</p>}
                    {errors.name?.type === 'minLength' && <p className="alerta">*El nombre de ser mayor a 5 caracteres</p>}
                </section>

                        {
                            totalPrice()>=7499?
                            <input className="submit" type="submit" value="Finalizar pedido" />:
                            <NavLink to='/'><section className="noenviar"><p className="minimo" >Monto m??nimo de compra $7500</p></section></NavLink>
                        }

                
            </form>
        </section>
    )

}

export default Formulario