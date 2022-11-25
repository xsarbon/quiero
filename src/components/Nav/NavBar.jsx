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
                <section className='cartContainer'>
                        <NavLink className='etiqueta' to="/">
                            <a className='log' >Inicio</a>
                        </NavLink>
                        
                        <section className='etiqueta'>
                            <a className='log' target={'_blank'} href="https://www.jupitertec.com.ar">Minorista</a>
                        </section>
                        

                        <NavLink className='etiqueta' id='cartbtn' to="/cart">
                            <a className='log'>Carrito</a>
                        </NavLink>

                        <section  className='etiqueta'>
                        <a className='log' target={'_blank'} href="https://firebasestorage.googleapis.com/v0/b/quiero-todo-prueba.appspot.com/o/catalogo%2Fcatalogo?alt=media&token=834145ea-e715-4e78-afe0-95035c14309a">Catálogo</a>
                        </section>
                        

                        <NavLink id='login' to="/cart" className='log'>
                            <a className='etiqueta' >LogIn</a>  
                        </NavLink>
                        <Cart className='carrito' />
                        
                </section>
                
            </section>
            
        </section >
    );
}

export default NavBar;
