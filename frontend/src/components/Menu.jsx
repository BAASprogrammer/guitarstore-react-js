import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav className="header-menu">
            <Link to="/home" className="menu-link">Inicio</Link>
            <Link to="/products" className="menu-link">Productos</Link>
            <Link to="/about" className="menu-link">Nosotros</Link>
            <Link to="/contact" className="menu-link">Contacto</Link>
        </nav>
    )
}