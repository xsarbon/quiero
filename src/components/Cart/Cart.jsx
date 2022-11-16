/* Realizamos todas las importaciones que necesitaremos */
import { useCartContext } from "../../context/CartContext"
import "../Cart/CartStyles.css"
import { NavLink } from "react-router-dom"


const Cart = () => {
    /* Importamos las funciones a utilizar desde el CartContext */
    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()



    /* Mapeamos cartList y por cada producto devolvemos un codigo HTML dinamico con las propiedades de cada prod, y al hacer click en uno de los productos, lleva al usuario al detalle de ese producto */
    const itemsList = cartList.map(prod =>
        <li className="containerProd" key={prod.id}>
            <section className="containerMainProd" >
                <NavLink className="linkkk" to={`/product/${prod.id}`}>
                    <img className="imgProd" src={prod.image}></img>
                    <section className="container">
                        <section>
                            <h2 className="nameProd" >{prod.product}</h2>
                        </section>
                        <section className="containerPrice">
                            <p className="priceProd" >Precio Unitario: <b>${prod.price + ''}.-</b> </p>
                            <p className="quantityProd" >Catidad en carrito: <b>{prod.quantity}</b></p>
                            <p className="pricePerProd">Precio total: <b>${prod.quantity * prod.price}.-</b></p>
                        </section>
                    </section>
                </NavLink >
                <section className="containerRemove"><button className="removerProd" onClick={() => removeProduct(prod.id)}>Quitar del carrito</button></section>
            </section>
        </li>

    )


    /* Declaramos el priceTotal, donde mostraremos el precio total del carrito de compras del usuario, daremos opcion para borrar el carrito y para avanzar al formulario de pago */
    const priceTotal =
        <li className="priceTotal" >
            <section className="price">
                <h2 className="Total">Total: $<b>{totalPrice()}</b></h2>
            </section>

            <section className="startBuy">
                <NavLink className="starBuy" to={"/formulario"}>
                    <button className="starBuy">Ir a Pagar</button>
                </NavLink>
                <section className="">
                    <button className="clearCart" onClick={(cleanCart)}>Vaciar Carrito</button>
                </section>
            </section>
        </li>


    /* En caso de que el carrito de compras este Vacio, mostraremos un mensaje alentando al cliente a realizar una compra y facilitandole la lista de productos */
    const noProducts = <li className="noProducts">
        <section className="noProds">
            <h2 className="noProd"> No hay productos en el carrito</h2>
        </section>
        <section className="cleanCart">
            <NavLink to={"/"}>
                <button className="inicio">Agregar Productos</button>
            </NavLink >
        </section>
    </li>


    /* En caso de haber productos, Cart mostrara producto por producto, con sus cantidades, precio unitario y precio total por producto, ademas el cliente podra quitar el producto que desee, dicho cambio se vera reflejado en el precio total del carrito y la lista de productos. En caso de no haber productos en el carrito, no se mostraran productos, sino, se mostrara un mensaje dandole aviso al usuario, ademas, se mostrara un boton el cual redirige al usuario a la lista de productos, alentando asi al usuario a realizar una compra */
    return (
        <ul className="ListaProductos">
            <section className="cartContain">
                {itemsList}
            </section>
            {cartList.length === 0 ? noProducts : priceTotal}
        </ul>
    )
}

export default Cart