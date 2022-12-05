import React from "react";
import '../ItemCount/ItemCount'
import ItemList from "../itemList/itemList"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { db } from "../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"
import Spinner from '../Spinner/Spinner'
import './ItemListContainer.css'

/* Declaracion de ItemListContainer */
function ItemListContainer() {

  const [listProduct, setListProduct] = useState([])
  const [loading, setLoading] = useState(true)

  /* traemos category desde useParams de react-router-dom */
  const { category } = useParams()
  


  useEffect(() => {
    /* Funcion que apunta a nuestra base de datos y a la colleccion "listProducts" */
    const productsCollection = collection(db, 'listProducts')

    /* Funcion que pregunta si la categoria es especificada */
    if (category) {

      /* Si la categoria es especificada, entonces mostrara todos los productos que el valor de category sea exactamente igual a la categoria pasada por parametro */
      const q = query(productsCollection, where('category', '==', `${category}`))
      getDocs(q)
        .then((data) => {
          const list = data.docs.map((prod) => {
            return {
              ...prod.data(),
              id: prod.id
            }
          })

          setListProduct(list)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {

      /* Si la categoria no es especificada, entonces mostrará todos los productos de la base de datos */
      getDocs(productsCollection)
        .then((data) => {
          const list = data.docs.map((prod) => {
            return {
              ...prod.data(),
              id: prod.id
            }
          })

          setListProduct(list)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [category])


  /* Esto devolverá la lista de productos filtrada o no por categoria, con un timeOut de 500ms */
  return (
    <div className="productsContainer">

      {!loading
        ?
        <ItemList listProduct={listProduct} />
        :
        Spinner()}
    </div>
  )
}


export default ItemListContainer
