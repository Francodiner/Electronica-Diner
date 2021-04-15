

export const CartWidget = () => {
  return (
    <div>
      <i onClick={info} className="fas fa-shopping-cart"></i>
    </div>
  );
}


const info = () => alert("Actualmente el carrito de compras esta vacio");
