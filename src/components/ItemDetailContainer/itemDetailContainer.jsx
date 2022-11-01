import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/itemDetail'
import { useParams } from "react-router-dom"
import { doc, getDoc, collection, } from "firebase/firestore"
import { db } from "../firebase/firebase"
import Spinner from '../Spinner/Spinner'

/* Funcion que trae todos los datos del producto y ademas su id guardado en la base de datos */
const ItemDetailContainer = () => {
    const [listProduct, setListProduct] = useState({});

    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    /* Funcion que trae los productos guardados en la base de datos, y a cada uno le asigna como clave id y como valor, el ID de la base de datos, ademas conserva los datos que tenia ese mismo producto */
    useEffect(() => {
        const productsCollection = collection(db, 'listProducts')
        const refDoc = doc(productsCollection, id)
        getDoc(refDoc)
            .then((res) => {
                setListProduct(
                    {
                        id: res.id,
                        ...res.data()
                    }
                )
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])



    return (
        <>
            {!loading ? <ItemDetail listProduct={listProduct} /> : Spinner()}
        </>
    )
}
export default ItemDetailContainer