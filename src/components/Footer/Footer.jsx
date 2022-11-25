import logo from '../images/logo.png';
import './FooterStyles.css';
import { NavLink } from "react-router-dom"

function Footer() {
    return (
        <body>

            <footer className='footer'>
                <section className="footer_container">
                    <div className='footer_top'>
                        <div>
                            <h6 className='footer_title'>Información.</h6>
                            <ul className='footer_list'>
                                <li className='footer_list-item'>
                                    <a href="" className='footer_list-link'>Como comprar.</a>
                                </li>
                                <li className='footer_list-item'>
                                    <a href="" className='footer_list-link'>Garantía.</a>
                                </li>
                                <li className='footer_list-item'>
                                    <a href="" className='footer_list-link'>Quienes Somos.</a>
                                </li>
                                <li className='footer_list-item'>
                                    <a href="" className='footer_list-link'>Tienda Minorista.</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6 className='footer_title'>Contacto.</h6>
                            <ul className='footer_list'>
                                <li className='footer_list-item'>
                                    <a href="" className='footer_list-link'>WhatsApp.</a>
                                </li>
                                <li className='footer_list-item'>
                                    <a href="" className='footer_list-link'>WhatsApp 2.</a>
                                </li>
                                <li className='footer_list-item'>
                                    <a href="" className='footer_list-link'>Instagram.</a>
                                </li>
                                <li className='footer_list-item'>
                                    <a href="" className='footer_list-link'>Dirección: 9 de Julio 79, San Miguel de Tucumán, Tucumán, Argentina.</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='footer_title'>Horarios.</h6>
                            <ul className='footer_list'>
                                <li className='footer_list-item'>
                                    <a href="" className='footer_list-link'>Lunes a Viernes: 9 a 13 y 17 a 21.</a>
                                </li>
                                <li className='footer_list-item'>
                                    <a href="" className='footer_list-link'>Sabados: 10 a 14.</a>
                                </li>
                                <li className='footer_list-item'>
                                    <a href="" className='footer_list-link'>Feriados: consultar.</a>
                                </li>

                            </ul>
                        </div>

                    </div>

                    <hr className='footer_divider' />

                    <section className='footer_bottom'>
                        <span className="copyright">© Copyright Quiero Todo 2022 | Diseño y Desarrollo <a id='creator' target='_blank' href='https://www.linkedin.com/in/nicolas-santucho-50a881182/'>Nicolas Santucho</a></span>
                        <ul className='footer_list'>
                            <li className="footer_list-item">
                                <a href="" className="footer_list-link">
                                    <ion-icon id='icon' name="logo-facebook"></ion-icon>
                                </a>
                            </li>
                            <li className="footer_list-item">
                                <a href="" className="footer_list-link">
                                    <ion-icon id='icon' name="logo-instagram"></ion-icon>
                                </a>
                            </li>
                            <li className="footer_list-item">
                                <a href="" className="footer_list-link">
                                    <ion-icon id='icon' name="logo-whatsapp"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </section>

                </section>
            </footer>
        </body>
    );
}

export default Footer;
