import './BusquedaStyles.css';

const Busqueda = () => {

    return (
        <div className='busqueda'>
            <span>
                <ion-icon name="search-outline"></ion-icon>
            </span>
            <input className='busqueda' type="text" />
        </div>
    )
}
export default Busqueda