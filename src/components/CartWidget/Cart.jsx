/* Realizamos todas las importaciones que necesitaremos */
import React from "react";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import "./CartWidgetStyles.css"


/* Declaracion de funcion Cart */
function Cart() {


    /* Importamos las funciones a utilizar definidas en el cartContext */
    const { totalQuantity, cartList, totalPrice } = useCartContext()


    /* Mostramos la cantidad de productos seleccionados por el usuario en el icono de Cart en la barra de navegacion */
    const showQuantity = cartList.length === 0 ? <p><b>0</b> productos</p> : <p className="totalQuantity">Productos <b>{totalQuantity()}</b></p>

    const showTotalPrice = totalPrice() === 0 ? <p>$0,00</p> : <p className="totalPrice">${totalPrice()}</p>
    /* Devuelve el icono del Cart con la cantidad de productos en carrito, y al hacer click en el Cart, lleva al usuario al detalle del carrito */
    return (
        <NavLink to="/Cart" >
            <section className="cartWidget">
                <section className="data">
                    {showTotalPrice}
                    {showQuantity}
                </section>
                <ShoppingCartRoundedIcon className="cart" color="primary" fontSize="large" />
            </section>
        </NavLink>
    );
}


/* Exportamos Cart por Default */
export default Cart;