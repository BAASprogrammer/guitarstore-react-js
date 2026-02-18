import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container grid">
                <div className="footer-brand">
                    <h2 className="footer-logo">Guitar<span className="logo-accent">Store</span></h2>
                    <p className="footer-desc">
                        Tu tienda de confianza para encontrar el instrumento perfecto.
                        Calidad, pasión y música en cada cuerda.
                    </p>
                    <div className="social-icons flex gap-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-wrapper facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-wrapper instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon-wrapper twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon-wrapper youtube">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Explorar</h3>
                    <ul className="footer-menu">
                        <li><a href="/home">Inicio</a></li>
                        <li><a href="#products">Productos</a></li>
                        <li><a href="/about">Nosotros</a></li>
                        <li><a href="/contact">Contacto</a></li>
                    </ul>
                </div>

                <div className="footer-newsletter">
                    <h3>Boletín</h3>
                    <p>Suscríbete para recibir ofertas exclusivas.</p>
                    <form className="newsletter-form flex" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Tu email..." />
                        <button type="submit">Suscribir</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom center">
                <p>© GuitarStore 2026 - Todos los derechos reservados</p>
            </div>
        </footer>
    )
}