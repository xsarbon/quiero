import logo from '../images/logo.png';
import './NavStyles.css';
import Cart from '../CartWidget/Cart'
import { NavLink } from "react-router-dom"

function NavBar() {
    /* La funcion NavBar devuelve la sigueinte estructura */
    return (
        <section className='nav'>
            
            <section className='tamanio'>
                <section  className='burger' id='bur' >
                    <span className='burger1'></span>
                    <span className='burger2'></span>
                    <span className='burger3'></span>
                </section>
                <section className='logoContainer'>
                    <NavLink to="/">
                        <img className='logo' src={logo} ></img>
                    </NavLink>
                    <h1 className='titulo'>Tienda Mayorista</h1>
                </section>
                
            <section className='cartContainer'>
                <section className='links'>
                        <NavLink to="/">
                            <button className='etiqueta' href="#">Inicio</button>
                        </NavLink>
                        <NavLink to="category/notebooks">
                            <button className='etiqueta' href="#">Notebooks</button>
                        </NavLink>
                        <NavLink to="category/celulares">
                            <button className='etiqueta' href="#">Celulares</button>
                        </NavLink>
                        <NavLink to="category/audio">
                            <button className='etiqueta' href="#">Audio</button>
                        </NavLink>
                        <NavLink to="category/hogar">
                            <button className='etiqueta' href="#">Hogar</button>
                        </NavLink>
                    </section>

                    <Cart />
            </section>
                

            </section>
        </section >
    );
}

export default NavBar;
