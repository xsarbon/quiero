import logo from '../images/logo.png';
import './NavStyles.css';
import Cart from '../CartWidget/Cart'
import { NavLink } from "react-router-dom"
import myFunction from './Toggle'

function NavBar() {
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
                        <img className='logo' src={logo} />
                    </NavLink>
                    <h1 className='titulo'>TIENDA MAYORISTA</h1>
                </section>
                <section className='cartContainer'>
                        <NavLink className='etiqueta' to="/">
                            <p className='log' >Inicio</p>
                        </NavLink>                        

                        <NavLink className='etiqueta' to="/cart">
                            <p className='log'>Carrito</p>
                        </NavLink>

                        <a className='etiqueta' target='_blank' rel='noreferrer' href="https://firebasestorage.googleapis.com/v0/b/quierotodo-db.appspot.com/o/catalogo%2Fcatalogo?alt=media&token=fff7979e-add4-4a6c-b9b0-f586f3a4684e"><p className='log'>Catálogo</p></a>
                        
                        <Cart className='etiqueta' />
                        
                </section>
                
            </section>
            
        </section >
    );
}

export default NavBar;
