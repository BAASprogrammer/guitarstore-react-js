export default function Products({dato, addCart, cart}){
    const productsData = dato
    
    const handleAddCart = (item) =>{
        const existingProducts = cart.some((product) => product.id === item.id) //some devuelve true cuando se cumple la condicion
        if (!existingProducts) {
            addCart(item)
        }
    }
    return(
        <section id="products" className="products-section">
            <div className="ppal-text center">
                <h1 className="our-collection">Nuestra Colección</h1>
            </div>
            <div className="menu-container grid">
                {productsData.map((item, index) => (
                    <div className="grid-item" key={index}>   
                        <div className="product-container">
                            <div className="product-img"><img src={`/images/inicio/${item.imagen}`} alt="Guitarra 1"></img></div>
                            <div className="product-data"><p className="product-name font-weight-800">{item.nombre}</p>
                                <p className="product-description">{item.descripcion}</p>
                                <p className="product-value">${item.precio}</p>
                                <button className="add-cart-button" title="Agregar producto al carro de compras" disabled = {cart.some((productsData) => productsData.id === item.id)} onClick={() => handleAddCart(item)}>
                                    {cart.some((productsData) => productsData.id === item.id) ? 'Producto agregado':'Agregar al carrito'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}