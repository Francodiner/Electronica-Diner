import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [quantity, setQuantity] = useState(0)

    const [cart, setCart] = useState([])

    const addToCart = (id, name, price, image, qty) => {
        const existingIndex = cart.findIndex((item) => item.id === id);

        if (existingIndex >= 0) {
            cart[existingIndex] = {
                ...cart[existingIndex],
                qty: cart[existingIndex].qty + qty,
            }
        } else {
            setCart([
                ...cart,
                {
                    id: id,
                    name: name,
                    price: price,
                    image: image,
                    qty: qty,
                },
            ])
        }
    };

    const removeProduct = (itemInCart) => {
        const existingIndex = cart.findIndex((item) => item.id === itemInCart.id);
        const cartCopy = Array.from(cart);

        if (existingIndex >= 0) {
            cartCopy.splice(existingIndex, 1);
            setCart(cartCopy);
        }
    };

    useEffect(
        () => {
            console.log(cart)
        }, []
    )

    return (
        <CartContext.Provider value={{ addToCart, cart, setCart, removeProduct, quantity }}>
            {children}
        </CartContext.Provider>
    )
}