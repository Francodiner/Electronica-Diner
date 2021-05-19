
import { useContext, useEffect } from "react";
import { CartContext } from '../../context/cartContext'

export const Cart = () => {
    const { facu } = useContext(CartContext)

    useEffect(
        () => {
            console.log(facu)
        }, [facu]
    )
  
    return (
        <div></div>
    )
};