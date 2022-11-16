import Item from '../item/item'
import './ItemListStyles.css'

/* Funcion que devuelve por cada producto un div con los parametros que utiliza */
const ItemList = ({ listProduct }) => {
    return (
        <div className='main'>
            {listProduct.map(product => <Item key={product.id} product={product} initial={product.initial} />)}
        </div>
    )
}
export default ItemList
