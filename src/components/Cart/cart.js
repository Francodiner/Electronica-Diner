
import { useContext } from "react";
import { CartContext } from '../../context/cartContext'
import { Link } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
    const { cart, removeProduct } = useContext(CartContext);

    const calculatePrice = (price, qty) => {
        return price * qty;
    };

    return (
        <div className="cartItemsWrapper">
            {cart.length ? (
                cart.map((product) => (
                    <div key={product.id} className="itemCart">
                        <img src={product.image} alt="Producto cargando..." />
                        <h2>{product.title}</h2>
                        <h4>Cantidad: {product.qty}</h4>
                        <h4>${calculatePrice(product.price, product.qty)}</h4>
                        <Link
                            className="buttonRemove"
                            onClick={() => {
                                removeProduct(product);
                            }}
                        >
                            Remover
                        </Link>
                    </div>
                ))
            ) : (
                <h1>No hay items en el carrito</h1>
            )}
        </div>
    );
};