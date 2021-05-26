import { useContext, useState, useEffect } from "react";
import { CartContext } from '../../context/cartContext'
import { ItemCount } from "../ItemCount/itemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [qty, setQty] = useState(0);
    const [finishButton, setFinishButton] = useState(false);

    const goToPayment = () => {
        addToCart(product.id, product.name, product.price, product.image, qty);
    };

    const onAdd = (qty) => {
        setQty(qty);
    };

    useEffect(() => {
        if (qty !== 0) {
            setFinishButton(true);
        }
    }, [qty]);

    return (
        <div className="itemDetail">
            <img src={product.image} alt="Producto cargando..." />
            <h2>{product.name}</h2>
            <h4>${product.price}</h4>
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
            {finishButton ? (
                <Link
                    to="/cart"
                    className="button2"
                    onClick={() => {
                        goToPayment();
                    }}
                >
                    Go to payment
                </Link>
            ) : null}
            <Link
                className="buttonClose"
                to="/"
                onClick={() => {
                    setQty(0);
                }}
            >
                Go Back!
          </Link>
        </div>
    );
}


