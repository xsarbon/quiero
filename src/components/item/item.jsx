/* Importamos NavLink desde react-router-dom */
import { NavLink } from "react-router-dom"
import './ItemStyles.css'


/* Declaramos la funcion Item, pasandole como parametro product */
const Item = ({ product }) => {


    /* La cual devuelve una serie de etiquetas HTML dinamica por cada producto recibido, al hacerle click al producto, redirigira al usuario a la pagina de detalle de ese producto */
    return (
        <NavLink className="link" to={`/product/${product.id}`}>
            <section className="card">
                <img src={product.image} className="image"></img>
                <section className="containerBtn">
                    <h2 className="productos">{product.product}</h2>
                    <h2 className="precios">${product.price}.-</h2>
                </section>
            </section>
        </NavLink>

    )
}


/* Exportamos Item por Default */
export default Item