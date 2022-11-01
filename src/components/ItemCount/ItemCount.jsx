/* Importamos los archivos a utilizar */
import React from "react";
import { useState } from "react";
import './styles.css'


/* Declaramos la funcion ItemCount, que recibe product y onAdd */
function ItemCount({ product, onAdd }) {


    /* declara useState con la propiedad initial del producto */
    const [count, setCount] = useState(product.initial);


    /* declara useState con la propiedad stock del producto y le resta uno */
    const [countS, setCountS] = useState(product.stock - 1);


    /* Al aumentar la cantidad de productos a comprar, el contador count, incrementa en uno, por cada click, al llegar a la cantidad del stock, se mostrara un mensaje por consola, informando usuario que no se dispone de mas stock */
    const aumentar = () => count >= product.stock ? console.log("supera el stock disponible") : setCount(count + 1);


    /* Al restar la cantidad de productos a comprar, el contador count se reduce hasta el minimo que es initial (la cantidad inicial por defecto), si el usuario continua haciendo click, se le informara por consola que no es posible llegar a cero o numeros negativos */
    const restar = () => count <= 1 ? console.log("No se acepta 0 'cero' o valores negativos") : setCount(count - 1);


    /* Al incrementar la cantidad de productos a comprar, tambien se reduce el numero de productos en stock, si el stock llega a 0, se mostrara un mensaje al usuario que alcanzo el maximo de productos a la venta */
    const bajarStock = () => count >= product.stock ? console.log("supera el stock disponible") : setCountS(countS - 1);


    /* Al reducir la cantidad de productos a comprar, el stock se incrementara, si el stock llega a su valor por defecto, se enviara un mensaje por consola indicando al usuario que debe agregar unidades para la compra */
    const aumentarStock = () => countS >= product.stock - 1 ? console.log("agregue cantidades") : setCountS(countS + 1);


    /* Esto devolvera codigo HTML dinamico con los valores de sotck, initial y quantity, segun se necesite, y se actualizara por cada click que se realice. Al hacer click en Agregar al carrito, se ejecutara la funcion onAdd, pasandole por parametro el producto y el contador para que agregue las cantidades y producto correctos al carrito */
    return (
        <div className="containerbtns">
            <div className="buttons">
                <button className="restar" onClick={() => {
                    restar();
                    aumentarStock();
                }}>-</button>
                <p>{count}</p>
                <p>de<b> {countS}</b> disponible</p>
                <button className="aumentar" onClick={() => {
                    aumentar();
                    bajarStock();
                }}>+</button>
            </div>
            <button className="itemAdd" onClick={() => onAdd(product, count)}>Agregar al carrito</button>
        </div>

    );
}


/* Exportamos ItemCount por default */
export default ItemCount