import "./cartWidget.css";

export const CartWidget = () => {

  return (
    <div>
      <i className="fas fa-shopping-cart cart-size"></i>
      <span class='badge badge-warning'> 0 </span>
    </div>
  );
}