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
                        <img className='logo' src={logo} ></img>
                    </NavLink>
                    <h1 className='titulo'>TIENDA MAYORISTA</h1>
                </section>
                <section className='cartContainer'>
                        <NavLink className='etiqueta' to="/">
                            <a className='log' >Inicio</a>
                        </NavLink>                        

                        <NavLink className='etiqueta' id='cartbtn' to="/cart">
                            <a className='log'>Carrito</a>
                        </NavLink>

                        <section  className='etiqueta'>
                        <a className='log' target={'_blank'} href="https://firebasestorage.googleapis.com/v0/b/quierotodo-db.appspot.com/o/catalogo%2Fcatalogo?alt=media&token=d430a822-3310-4707-ba40-45adc1e04d6a">Catálogo</a>
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
