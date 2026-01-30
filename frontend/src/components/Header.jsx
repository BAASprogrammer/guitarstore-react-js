import ShoppingCart from "./ShoppingCart";
import "../assets/css/modedarklight.css";
import Switch from "./Switch";
import Menu from "./Menu";

export default function Header({dataCart, deleteCart, emptyCart}){
    const nombretienda = "GuitarStore"
    return(
        <header className="sticky-menu">
            <div className="header-container">
                <div className="header-logo left">
                    <img src={require("../assets/images/inicio/guitarra.png")} alt="Logo" width={'50px'} height={'50px'}></img>
                    <h1>{nombretienda}</h1> 
                </div>
                <div>
                    <Menu/>
                </div>
                <div className="darkmode-shop right">
                    <Switch/>
                    <ShoppingCart
                        dataCart = {dataCart}
                        deleteCart={deleteCart} 
                        emptyCart = {emptyCart}
                    />
                </div>
            </div>
        </header>
    )
}
