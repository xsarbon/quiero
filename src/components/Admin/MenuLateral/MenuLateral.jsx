import { NavLink } from "react-router-dom"



const MenuLateral = () => {

    return (
        <>
        <br /><br /><br /><br /><br />
        <section className="aside">
            <h2 className="aside-title">Administrador</h2>
            <NavLink to=''>
                <span>
                    Inicio
                    <ion-icon className='icon-admin' name="home-outline"></ion-icon>
                </span>
            </NavLink>

            <NavLink to='qtadmin-administrator-firebase/ventas'>
                <span>
                    Ventas
                    <ion-icon className='icon-admin' name="bag-handle-outline"></ion-icon>
                </span>
            </NavLink>

            <NavLink to='qtadmin-administrator-firebase/productos'>
                <span>
                    Productos
                    <ion-icon className='icon-admin' name="pricetag-outline"></ion-icon>
                </span>
            </NavLink>

            <NavLink to='/agregarprod'>
                <span>
                    Agregar productos
                    <ion-icon id='icon-admin' name="add-circle-outline"></ion-icon>
                </span>
            </NavLink>

            <NavLink to='/subircatalogo'>
                <span>
                    Actualizar catalogo
                    <ion-icon name="newspaper-outline"></ion-icon>
                </span>
            </NavLink>
        </section>
        </>
    )

}
export default MenuLateral