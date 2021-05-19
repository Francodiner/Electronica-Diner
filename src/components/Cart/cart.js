
import { useContext, useEffect } from "react";
import { CartContext } from '../../context/cartContext'

export const Cart = () => {
    const { cart, removeProduct } = useContext(CartContext);

    const calculatePrice = (price, qty) => {
        return price * qty;
    };

    return (
        <div className="cartItemsWrapper">
            {cart.length ? (
                cart.map((product) => (
                    <div key={product.id} className="cartItem">
                        <h2>{product.title}</h2>
                        <h4>Qty: {product.stock}</h4>
                        <h4>${calculatePrice(product.price, product.stock)}</h4>
                        <a onClick={() => {
                            removeProduct(product);
                        }}>Remover</a>
                    </div>
                ))
            ) : (
                <h1>No hay items en el carrito</h1>
            )}
        </div>
    );
};