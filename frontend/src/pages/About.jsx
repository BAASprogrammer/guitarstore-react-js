import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMusic, faUsers } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/about.css";

export default function About() {
    return (
        <section id="about" className="about-section center">
            <div className="about-hero-container">
                <h1 className="about-title">Sobre <span className="title-accent">Nosotros<span className="title-underline"></span></span></h1>
                <p className="about-subtitle">Conectando pasiones, una cuerda a la vez</p>
            </div>

            <div className="about-content-grid">
                <div className="about-card glassmorphism-card">
                    <div className="about-icon-wrapper">
                        <FontAwesomeIcon icon={faHeart} className="about-icon" />
                    </div>
                    <h3 className="about-card-title">Nuestra Pasión</h3>
                    <p className="about-card-text">
                        En GuitarStore, somos más que una tienda; somos apasionados por la música. Nos dedicamos a ofrecer las mejores guitarras y accesorios para músicos de todos los niveles.
                    </p>
                </div>

                <div className="about-card glassmorphism-card">
                    <div className="about-icon-wrapper">
                        <FontAwesomeIcon icon={faMusic} className="about-icon" />
                    </div>
                    <h3 className="about-card-title">Nuestra Misión</h3>
                    <p className="about-card-text">
                        Nuestra misión es proporcionar productos de alta calidad a precios competitivos, asegurando que cada músico encuentre el tono perfecto junto con un servicio excepcional.
                    </p>
                </div>

                <div className="about-card glassmorphism-card">
                    <div className="about-icon-wrapper">
                        <FontAwesomeIcon icon={faUsers} className="about-icon" />
                    </div>
                    <h3 className="about-card-title">Nuestro Equipo</h3>
                    <p className="about-card-text">
                        Compuesto por músicos experimentados que entienden tus necesidades. Estamos comprometidos a brindar asesoramiento experto y apoyo en cada acorde de tu viaje.
                    </p>
                </div>
            </div>
        </section>
    );
}