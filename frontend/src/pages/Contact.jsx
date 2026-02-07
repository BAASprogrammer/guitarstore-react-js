import "../assets/css/contact.css";

export default function Contact(){
    return(
        <section id="contact" className="contact-section position-relative">
            {/* Decorative animated dots (non-interactive, aria-hidden) */}
            <div className="dots-bg z-index-1" aria-hidden>
                <span className="dot dot--1"></span>
                <span className="dot dot--2"></span>
                <span className="dot dot--3"></span>
                <span className="dot dot--4"></span>
                <span className="dot dot--5"></span>
                <span className="dot dot--6"></span>
            </div>

            <div className="contact-container position-relative z-index-10">
                <h2 className="section-title center">Contáctenos</h2>
                <form className="contact-form flex flex-column align-center">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Enviar</button>
                </form>
            </div>
        </section>
    )
}