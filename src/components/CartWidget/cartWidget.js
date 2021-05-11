import "./cartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext"

export const CartWidget = () => {
  const { quantity } = useContext(CartContext)

  return (
    <div class="widgets-wrap float-md-right">
      <div class="widget-header  mr-3">
        <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></a>
        <span class="badge badge-pill badge-danger notify">{quantity}</span>
      </div>
    </div>
  );
}