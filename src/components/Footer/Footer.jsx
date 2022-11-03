import logo from '../images/logo.png';
import './FooterStyles.css';

function Footer() {
    return (
        <section className='footer'>
            <section className="tamanio">
                <section className='logoFoot'>
                    <img src={logo} />
                </section>
                <section className='copy'>
                    <p className='copyrigth'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, cupiditate?
                    </p>
                </section>
                <section className='comunic'>
                    <p className='comunication'>Tenés dudas ? Escribinos</p>
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
                <p>
                    Página creada y diseñada por: <a href="https://www.linkedin.com/in/nicolas-santucho-50a881182/">Nicolás Santucho</a>
                </p>
            </section>
        </section >
    );
}

export default Footer;
