import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Products from "../pages/Products"

export default function Approutes({dato, addCart, cart}){
    return(
        <Routes>
            <Route path="/" element={<Home
                dato={dato}
                cart={cart}
                addCart={addCart}
            />} />
            <Route path="/home" element={<Home
                dato={dato}
                cart={cart}
                addCart={addCart}
            />} />
            <Route path="/products" element={<Products
                dato = {dato}
                cart = {cart}
                addCart = {addCart} // passes function to add to shopping cart used in main.jsx
            />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}