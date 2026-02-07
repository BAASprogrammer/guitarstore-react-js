import Approutes from "./AppRoutes";

export default function Main({dato, addCart, cart}){    
    return(
        <main className="main-container">
            <Approutes
                dato = {dato}
                cart = {cart}
                addCart = {addCart} // passes function to add to shopping cart used in main.jsx
            />
        </main>
    )
}