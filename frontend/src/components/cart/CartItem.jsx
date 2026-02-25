export default function CartItem({ item, cantidad, addProduct, deleteProduct, handleChange, formatCurrency }) {
    return (
        <div className="grid modal-row">
            <div className="grid-item-modal">
                <img src={require(`../../assets/images/products/${item.imagen}`)} alt="Guitarra" />
            </div>
            <div className="grid-item-modal" data-price={formatCurrency(item.precio)}>
                <label title={item.nombre}>{item.nombre}</label>
            </div>
            <div className="grid-item-modal">
                <label>{formatCurrency(item.precio)}</label>
            </div>
            <div className="grid-item-modal">
                <div className='flex justify-center align-center quantity-container'>
                    <button className="add-del-cart" onClick={() => deleteProduct(item.id)} title='Disminuir cantidad'>-</button>
                    <input
                        className='quantity-cart'
                        value={cantidad[item.id] || 1}
                        onChange={(e) => handleChange(e, item.id)}
                    />
                    <button className="add-del-cart" onClick={() => addProduct(item.id)} title='Aumentar cantidad'>+</button>
                </div>
            </div>
        </div>
    );
}