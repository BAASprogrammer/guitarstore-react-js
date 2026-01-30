import { useEffect, useState } from 'react';

export default function ShoppingCart({dataCart,deleteCart, emptyCart}){
    const [cantidad, setCantidad] = useState({})
    const [message,setMessage] = useState(false)
    
    
    useEffect(() => {
        setCantidad((prevcantidad)=> {
            // si el carro está vacío deja el objeto vacío
            if (dataCart.length === 0 ) {
                return {}
            }
            // se utiliza reduce para devolver la cantidad tomando como dato la copia de la cantidad previa -> prevcantidad
            const newcantidad = dataCart.reduce((acc, item) => {
                if (acc[item.id] === undefined) {
                    acc[item.id] = 1
                }
                return acc
            },{...prevcantidad})
            return newcantidad
        })
    }, [dataCart]);

    // Disminuir cantidad de producto agregado al carro de compras
    const deleteProduct = (idproducto) => {
        setCantidad((prevcantidad) =>{
            const newcantidad = {...prevcantidad} //crea una copia del objeto original
            if(newcantidad[idproducto] > 0) {
                newcantidad[idproducto] -= 1 
            }
            if (newcantidad[idproducto] === 0) {
                deleteCart(idproducto)
                delete newcantidad[idproducto]
            } 
            return newcantidad
        })
    }
    // Aumentar cantidad de producto agregado al carro de compras
    const addProduct = (idproducto) => {
        setCantidad((prevcantidad)=>{
            const newcantidad = {...prevcantidad}
            newcantidad[idproducto] >= 1 ? newcantidad[idproducto] += 1 : newcantidad[idproducto] = 1
            return newcantidad
        })
    }
    // función que se ejecuta al cambiar el valor del input
    const handleChange = (event, id) =>{
        let eventvalue = /^0+$/.test(event.target.value) || event.target.value === "" ? 0 : parseInt(event.target.value)
        const newcantidad = {...cantidad, [id]: eventvalue}
        if (newcantidad[id] === 0) {
            newcantidad[id] = 1
        }
        setCantidad(newcantidad)
        // no es necesario return porque no se debe retornar ningún valor a utilizar
        // return newcantidad
    }

    // Lógica para manejar el evento de mouse over y mouse out
    useEffect(() => {
        if (message) {
            setMessage(true);
        }        
    }, [message]) // Esto se ejecutará cuando 'message' cambie de estado

    const handleMouseOverPayCart = () => {
        setMessage(true); // Cambia 'message' a true cuando el mouse pasa sobre el botón
    }

    const handleMouseOutPayCart = () => { 
        setMessage(false); // Cambia 'message' a false cuando el mouse sale del botón
    }

    const handlePayCart = () => {
    }
    
    // Calcular total de items en carrito
    const totalCount = dataCart.reduce((acc, item) => acc + (Number(cantidad[item.id]) || 1), 0);

    // Helper: formatea el badge (muestra "999+" si > 999)
    const formatBadgeCount = (count) => {
        return count > 999 ? '999+' : count;
    };

    return(<div className="right shoppingcart">
                <div className="container-shoppingcart center">
                    <button className='button-shoppingcart' title='Carrito de compras'>
                        <img className="header-img cursor-pointer img-shoppingcart" src={require('../images/carro.png')} alt="Carrito" width={20}></img>
                    {/* Badge con cantidad */}
                    {totalCount > 0 && (
                        <span className="cart-badge" aria-live="polite" title={`${totalCount} producto(s) en carrito`}>
                            {formatBadgeCount(totalCount)}
                        </span>
                    )}
                    </button>
                    {dataCart.length !== 0 ? (
                    <div className="modal-shoppingcart data-shoppingcart right">
                        <div className="status-shoppingcart center">
                            <h3>Productos agregados</h3>
                        </div>
                        <div className="contenedor-modal center">
                            <div className="grid modal-row header">
                                <div className="grid-item-modal font-weight-800" ><label>Imagen</label></div>
                                <div className="grid-item-modal font-weight-800"><label>Nombre</label></div>
                                <div className="grid-item-modal font-weight-800"><label>Precio</label></div>
                                <div className="grid-item-modal font-weight-800"><label>Cantidad</label></div>
                            </div>
                            <div>
                                {dataCart && (
                                    <div>
                                        <div className='product-data-container'>
                                            {dataCart.map((item) => (
                                                <div key={item.id} className="grid modal-row">
                                                    <div className="grid-item-modal"><img src={require(`../assets/images/inicio/${item.imagen}`)} alt="Guitarra"></img></div>
                                                    <div className="grid-item-modal"><label title={item.nombre}>{item.nombre}</label></div>
                                                    <div className="grid-item-modal"><label>${item.precio}</label></div>
                                                    <div className="grid-item-modal">
                                                        <button className="add-del-cart" onClick={() => deleteProduct(item.id)} title='Disminuir cantidad'>-</button>
                                                        <input className='quantity-cart' value={cantidad[item.id] || 1} onChange={(e)=>handleChange(e, item.id)}></input>
                                                        <button className="add-del-cart" onClick={() => addProduct(item.id)} title='Aumentar cantidad'>+</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <div className="grid modal-row footer">
                                                <div className="grid-item-modal right" >
                                                    Total a pagar : $ {dataCart.reduce((total, item) => Math.floor(((total + item.valor)*cantidad[item.id] || 1)*100)/100 || item.valor , 0)}
                                                </div>
                                                {dataCart.length !== 0 &&(
                                                    <div>
                                                        <button className="grid-item-modal center empty-cart-button" title='Vaciar productos del carro de compras' onClick={()=>emptyCart()}>Vaciar carrito</button>
                                                        <button className="grid-item-modal center pay-cart-button" title='Realizar pago de los productos' onMouseOver={handleMouseOverPayCart} onMouseOut={handleMouseOutPayCart} onClick={()=>handlePayCart()}>Pagar</button>
                                                    </div>
                                                )}
                                                {message && ( <div className='pay-message'>Función no disponible</div>)}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    ) : (
                        <div className="modal-shoppingcart status-shoppingcart empty-shoppingcart center">
                            <h3>El carrito está vacío</h3>
                        </div>
                    )}
                </div>
            </div>
        )
}