/* Realizamos todas las importaciones que necesitaremos */
import React from "react";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"


/* Declaracion de funcion Cart */
function Cart() {


    /* Importamos las funciones a utilizar definidas en el cartContext */
    const { totalQuantity, cartList } = useCartContext()


    /* Mostramos la cantidad de productos seleccionados por el usuario en el icono de Cart en la barra de navegacion */
    const showQuantity = cartList.length === 0 ? <p></p> : <p className="totalQuantity">{totalQuantity()}</p>


    /* Devuelve el icono del Cart con la cantidad de productos en carrito, y al hacer click en el Cart, lleva al usuario al detalle del carrito */
    return (
        <NavLink to="/Cart">
            <ShoppingCartRoundedIcon className="cart" color="primary" fontSize="large" />
            {showQuantity}
        </NavLink>
    );
}


/* Exportamos Cart por Default */
export default Cart;