import logo from '../images/logo.png';
import './FooterStyles.css';
import { NavLink } from "react-router-dom"

function Footer() {
    return (
        <section className='footer'>
            <section className="tamanioFoot">
                <section className='containerFoot'>
                    <section className='logoContainer'>
                        <NavLink to='/'>
                            <img className='logoFoot' src={logo} /></NavLink>
                    </section>
                    <section className='copy'>
                        <p className='copyrigth'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, cupiditate?
                        </p>
                    </section>
                    <section className='comunic'>
                        <p className='comunication'>Tenés dudas ? <b className='escribinos'>Escribinos</b></p>
                        <section className='contact'>
                            <a href="#">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </a>
                            <a href="#">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </a>
                            <a href="#">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </section>
                    </section>
                </section>
                <p className='creador'>
                    Página creada y diseñada por: <a className='creador' href="https://www.linkedin.com/in/nicolas-santucho-50a881182/">Nicolás Santucho</a>
                </p>
            </section>
        </section >
    );
}

export default Footer;