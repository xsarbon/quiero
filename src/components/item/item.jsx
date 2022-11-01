/* Importamos NavLink desde react-router-dom */
import { NavLink } from "react-router-dom"


/* Declaramos la funcion Item, pasandole como parametro product */
const Item = ({ product }) => {


    /* La cual devuelve una serie de etiquetas HTML dinamica por cada producto recibido, al hacerle click al producto, redirigira al usuario a la pagina de detalle de ese producto */
    return (
        <NavLink className="link" to={`/product/${product.id}`}>
            <div className="card">
                <img src={product.image} className="image"></img>
                <div className="containerBtn">
                    <h2 className="producto">{product.product}</h2>
                    <h2 className="precio">${product.price}.-</h2>
                    <p className="stock">Disponibles: <b>{product.stock}</b></p>
                </div>
            </div>
        </NavLink>

    )
}


/* Exportamos Item por Default */
export default Item