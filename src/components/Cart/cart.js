
import { useContext, useEffect, useState } from "react";
import { getFirestore } from '../../firebase'
import { CartContext } from '../../context/cartContext'
import { Link } from "react-router-dom";
import "./cart.css";

export const Cart = () => {

    const { cart, removeProduct } = useContext(CartContext);
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const calculatePrice = (price, qty) => {
        return price * qty;

    };

    function fire(e) {
        e.preventDefault();

        const db = getFirestore();
        db.collection('orders').add(
            {
                buyer: {
                    name,
                    email,
                    phone
                },
                cart: cart
            }
        )
        alert("La compra se ha realizado con exito")
    }

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
            <form>
                <label>Nombre</label>
                <input onChange={(e) => setName(e.target.value)}></input>
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)}></input>
                <label>Telefono</label>
                <input onChange={(e) => setPhone(e.target.value)}></input>
            </form>
            <button color='danger' onClick={(e) => fire(e)}>Realizar Compra</button>
        </div>
    );
};