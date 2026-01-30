import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../assets/css/about.css";

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="section-title">About Us</h2>
                <p className="ppal-text about-text">                     
                    En Tienda de Guitarras, somos apasionados por la música y nos dedicamos a ofrecer las mejores guitarras y accesorios para músicos de todos los niveles. Nuestra misión es proporcionar productos de alta calidad a precios competitivos, junto con un servicio al cliente excepcional.
                </p>
                <p className="ppal-text about-text">
                    Founded in 2020, Guitar Store has grown rapidly thanks to our dedication to customer satisfaction and our wide selection of products. Whether you're a beginner looking for your first guitar or a professional seeking specialized equipment, we're here to help you find what you need.
                </p>
                <p className="ppal-text about-text">
                    Our team is made up of experienced musicians who understand our customers' needs. We are committed to providing expert advice and support every step of the way.
                </p>
                <p className="ppal-text about-text">
                    Thank you for choosing Guitar Store. We look forward to being part of your musical journey.
                </p>
            </div>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube />
                </a>
            </div>
        </section>
    );
}