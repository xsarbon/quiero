/* Importamos todos los archivos necesarios */
import ItemCount from "../ItemCount/ItemCount"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import './ItemDetailStyles.css'


/* Declaramos la funcion ItemDetail, pasandole por parametro la lista de productos */
const ItemDetail = ({ listProduct }) => {


    /* declaramos los estados de IsAdded */
    const [isAdded, setIsAdded] = useState(false)


    /* importamos la funcion addToCart desde CartContext */
    const { addToCart } = useCartContext()


    /* Declaramos onAdd pasandole dos valores por parametro */
    const onAdd = (listProduct, quantity) => {

        /* al ejectutarse onAdd, se ejecturtara la funcion addToCart definida en cartContext, pasandole por parametros los dos valores recibidos por onAdd */
        addToCart(listProduct, quantity)

        /* Cambia el valor de IsAdded a True */
        setIsAdded(true)
    }


    /* Devuelve codigo HTML mostrando los detalles del producto, y reemplaza el boton de 'Agregar al carrito' por el de 'Terminar mi compra', al hacer click en el mismo, redirigira al usuario a la pagina del detalle del carrito */
    return (
        <section className="itemDetail">
            <section className="itemDetailContainer">
                <img className="imagenDetail" src={listProduct.image} />
                <section className="detalles">
                    <h2 className="producto">{listProduct.product.toUpperCase()}</h2>
                    <p className="description">{listProduct.description}</p>
                    <h3 className="precio">${listProduct.price}</h3>
                    {
                        isAdded ?
                            <NavLink to="/cart">
                                <button className="irAlCarrito">Terminar mi compra</button>
                            </NavLink>
                            : <ItemCount product={listProduct} onAdd={onAdd} />
                    }
                </section>
            </section>
        </section>
    )
}


/* Exportamos ItemDetail por default */
export default ItemDetail
