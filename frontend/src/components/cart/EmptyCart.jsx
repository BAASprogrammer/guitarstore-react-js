export default function EmptyCart({ isOpenCart, handleCart }) {
    return (
        <div className={`modal-shoppingcart ${isOpenCart ? 'data-shoppingcart' : 'closed-shoppingcart'}`}>
            <span className='close-shopping-cart' onClick={handleCart}>×</span>
            <div className="empty-shoppingcart">
                <h3>El carrito está vacío</h3>
            </div>
        </div>
    );
}