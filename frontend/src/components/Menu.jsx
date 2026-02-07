import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return(
        <div>
            <div>
                {/* Overlay to close menu when clicking outside */}
                {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
                <button className="menu-toggle-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                    ☰
                </button>
            </div>
            <nav className={`header-menu${isMenuOpen ? ' menu-opened' : ' menu-closed'}`}>
                <Link to="/home" className="menu-link">Home</Link>
                <Link to="/products" className="menu-link">Products</Link>
                <Link to="/about" className="menu-link">About</Link>
                <Link to="/contact" className="menu-link">Contact</Link>
            </nav>
        </div>
    )
}