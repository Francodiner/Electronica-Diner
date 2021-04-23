import { Product } from "../Product/product"


export const Products = (props) => {
  /* RECORRE EL ARREGLO PERO CADA ELEMENTO SE LO PASA A LA FUNCION - TRAIGO LA ESTRUCTURA DE PRODUCTO Y LA RECORRO PARA MOSTRAR VARIOS*/
  return props.products.map((product) => (
    
    <Product
      title={product.title}
      price={product.price}
      description={product.description}
      imagen={product.imagen}
    />
  ))
}
