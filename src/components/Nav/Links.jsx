/* Importamos NavLink desde react-router-dom */
import { NavLink } from "react-router-dom"
import './ItemStyles.css'


/* Declaramos la funcion Item, pasandole como parametro product */
const Links = ({ category }) => {


    /* La cual devuelve una serie de etiquetas HTML dinamica por cada producto recibido, al hacerle click al producto, redirigira al usuario a la pagina de detalle de ese producto */
    return (
        <NavLink className="link" to={`/product/${category.data().category}`}>
            <h2>{category.data().category}</h2>
        </NavLink>

    )
}


/* Exportamos Item por Default */
export default Links