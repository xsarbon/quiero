import logo from '../images/logo.png';
import './FooterStyles.css';
import { NavLink } from "react-router-dom"
import Preguntas from '../PreguntasFrecuentes/Preguntas'

function Footer() {
    return (
        <body>

            <footer className='footer'>
                <section className="footer_container">
                    <div className='footer_top'>
                        <div>
                            <h6 className='footer_title'>Información</h6>
                            <ul className='footer_list'>
                                <li className='footer_list-item'>
                                    <NavLink id='none' to='/preguntas-frecuentes'>
                                    <a href="" className='footer_list-link'>Preguntas Frecuentes</a>
                                    </NavLink>
                                </li>
                                
                            </ul>
                        </div>

                        <div>
                            <h6 className='footer_title'>Contacto</h6>
                            <ul className='footer_list'>
                                <li className='footer_list-item'>
                                    <a target="_blank" href="https://wa.me/qr/PFBTETJPDO4IO1" className='footer_list-link'>WhatsApp Andrés</a>
                                </li>
                                <li className='footer_list-item'>
                                    <a target="_blank" href="https://wa.me/message/57S7GYW7SXQKI1" className='footer_list-link'>WhatsApp Guada</a>
                                </li>
                                <li className='footer_list-item'>
                                    <a target="_blank" href="https://wa.me/message/6SC6X25KWN75H1" className='footer_list-link'>WhatsApp Agustín</a>
                                </li>
                                <li className='footer_list-item'>
                                    <a target='_blank' href="https://www.instagram.com/quierotodotec/" className='footer_list-link'>Instagram</a>
                                </li>
                                <li className='footer_list-item'>
                                    
                                Dirección:
                                <br/>9 de Julio 79, San Miguel de Tucumán,<br/> Tucumán, Argentina                                  
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='footer_title'>Horarios</h6>
                            <ul className='footer_list'>
                                <li className='footer_list-item'>
                                    <p href="">Lunes a Viernes:<br/>
                                    9:00hs a 13:00hs<br/>
                                    17:00hs a 21:00hs
                                    </p>
                                </li>
                                <li className='footer_list-item'>
                                    <p >Sábados:
                                    <br/>10:00hs a 14:00hs
                                    </p>
                                </li>
                                <li className='footer_list-item'>
                                    <p >Feriados:
                                    <br/>Consultar
                                    </p>
                                </li>

                            </ul>
                        </div>

                    </div>

                    <hr className='footer_divider' />

                    <section className='footer_bottom'>
                        <span className="copyright">© Copyright Quiero Todo 2022 | Diseño y Desarrollo <a id='creator' target='_blank' href='https://www.linkedin.com/in/nicolas-santucho-50a881182/'>Nicolas Santucho</a></span>
                        <ul className='footer_list'>
                            <li className="footer_list-item">
                                <a target='_blank' href="https://www.facebook.com/quierotodotec" className="footer_list-link">
                                    <ion-icon id='icon' name="logo-facebook"></ion-icon>
                                </a>
                            </li>
                            <li className="footer_list-item">
                                <a target='_blank' href="https://www.instagram.com/quierotodotec/" className="footer_list-link">
                                    <ion-icon id='icon' name="logo-instagram"></ion-icon>
                                </a>
                            </li>
                            <li className="footer_list-item">
                                <a target='_blank' href="https://wa.me/qr/PFBTETJPDO4IO1" className="footer_list-link">
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
