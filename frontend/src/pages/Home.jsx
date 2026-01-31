import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faTruck, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import Products from "./Products";
import HomeGuitar from "../assets/images/home/acoustic-guitar.jpg";
import "../assets/css/home.css";

export default function Home({ dato, cart, addCart }){
    return(
        <section id="index" className="index-section">
            <div className="grid welcome-container">
                <div>
                    <div className="welcome-title font-weight-800">Bienvenido a <span className="store-title">Tienda de Guitarras</span></div>
                    <div className="welcome-txt">Calidad, variedad y el sonido que buscas</div>
                    <span className="welcome-line"></span>
                </div>
                <div>
                    <div><img src={HomeGuitar} width={250} alt="Guitarra de Bienvenida" /></div>
                </div>
            </div>
            <div className="home-products-section">
                <Products dato={dato} cart={cart} addCart={addCart} />
            </div>
            <div className="why-choose-us">
                <div>
                    <div className="why-choose-us-title font-weight-600">¿Por qué <span className="why-choose-us-title-end">elegirnos</span>?</div>
                </div>
                <div className="why-choose-us-grid flex">
                    <div className="why-choose-us-item">
                        <FontAwesomeIcon icon={faCertificate} size="2x" className="wcu-icon" />
                        <div className="wcu-item-title font-weight-600">Calidad Garantizada</div>
                        <p className="wcu-item-description">Trabajamos con las mejores marcas</p>
                    </div>
                    <div className="why-choose-us-item">
                        <FontAwesomeIcon icon={faTruck} size="2x" className="wcu-icon" />
                        <div className="wcu-item-title font-weight-600">Envío Gratis</div>
                        <p className="wcu-item-description">Envío gratis en todo el país</p>
                    </div>
                    <div className="why-choose-us-item">
                        <FontAwesomeIcon icon={faShieldHalved} size="2x" className="wcu-icon" />
                        <div className="wcu-item-title font-weight-600">Garantía Extendida</div>
                        <p className="wcu-item-description">2 años en todos nuestros productos</p>
                    </div>
                </div>
            </div>
        </section>
    )
}