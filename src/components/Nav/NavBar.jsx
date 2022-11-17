import logo from '../images/logo.png';
import './NavStyles.css';
import Cart from '../CartWidget/Cart'
import { NavLink } from "react-router-dom"
import myFunction from './Toggle'
import DownloadCatalogo from '../Admin/SubirCatalogo/DownloadCatalogo';
import Busqueda from './Busqueda/Busqueda';

function NavBar() {
    /* La funcion NavBar devuelve la sigueinte estructura */
    /*<NavLink to="category/notebooks">
                            <button className='etiqueta' >Notebooks</button>
                        </NavLink>
                        <NavLink to="category/celulares">
                            <button className='etiqueta' >Celulares</button>
                        </NavLink>
                        <NavLink to="category/audio">
                            <button className='etiqueta' >Audio</button>
                        </NavLink>
                        <NavLink to="category/hogar">
                            <button className='etiqueta' >Hogar</button>
                        </NavLink>*/


    return (
        <section className='nav'>
            <section className='tamanio'>
                <section className="toggle" onClick={myFunction}>
                    <span></span>
                    <span></span>
                    <span></span>
                </section>

                <section className='logoContainer'>
                    <NavLink to="/">
                        <img className='logo' src={logo} ></img>
                    </NavLink>
                    <h1 className='titulo'>TIENDA MAYORISTA</h1>
                </section>
                <Busqueda/>
                
            </section>
            <section className='cartContainer'>
                    <section className='links'>
                        <NavLink to="/">
                            <button className='etiqueta' >Inicio</button>
                        </NavLink>

                        <a className='etiqueta log' target={'_blank'} href="https://www.jupitertec.com.ar">Minorista</a>

                        <NavLink to="/cart">
                            <button className='etiqueta' id='cartbtn' >Carrito</button>
                        </NavLink>

                        <a className='etiqueta log' target={'_blank'} href="https://firebasestorage.googleapis.com/v0/b/quiero-todo-prueba.appspot.com/o/catalogo%2Fcatalogo?alt=media&token=834145ea-e715-4e78-afe0-95035c14309a">Catálogo</a>

                        <NavLink to="/cart" className='log'>
                            <button className='etiqueta' >LogIn</button>
                        </NavLink>

                    </section>
                        
                    <Cart className='carrito' />
                </section>
        </section >
    );
}

export default NavBar;
