/* Realizamos todas las importaciones que necesitaremos */
import React from "react";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import "./CartWidgetStyles.css"
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


const theme = createTheme({
    palette: {
      primary: {
        main: purple[50],
      },
      secondary: {
        main: '#e3f2fd',
      },
    },
  });


/* Declaracion de funcion Cart */
function Cart() {


    /* Importamos las funciones a utilizar definidas en el cartContext */
    const { totalQuantity, cartList, totalPrice } = useCartContext()


    /* Mostramos la cantidad de productos seleccionados por el usuario en el icono de Cart en la barra de navegacion */
    const showQuantity = cartList.length === 0 ? <p className="totalQuantity">productos <b>0</b></p> : <p className="totalQuantity">Productos <b>{totalQuantity()}</b></p>

    const showTotalPrice = totalPrice() === 0 ? <p className="totalPrice">$0,00</p> : <p className="totalPrice">${totalPrice()}</p>
    /* Devuelve el icono del Cart con la cantidad de productos en carrito, y al hacer click en el Cart, lleva al usuario al detalle del carrito */
    return (
        <NavLink className='cartWidgetLink' to="/Cart" >
            <section className="cartWidget">
                <section className="data">
                    {showTotalPrice}
                    {showQuantity}
                </section>
                <ion-icon id='cart' name="cart-outline"></ion-icon>
            </section>
        </NavLink>
    );
}


/* Exportamos Cart por Default */
export default Cart;