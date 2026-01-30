import Approutes from "./AppRoutes";

export default function Main({dato, addCart, cart}){    
    return(
        <main className="main-container">
            <Approutes
                dato = {dato}
                cart = {cart}
                addCart = {addCart} //se traspasa función para agregar a carro de compra utilizado en main.jsx
            />
        </main>
    )
}