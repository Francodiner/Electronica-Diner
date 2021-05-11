import { useState, useEffect, useContext } from "react";
import { ItemList } from "../ItemList/itemList"
import { Form, FormControl } from "react-bootstrap";
import { productsGroup } from "../ProductsGroup/productsGroup";
import { useParams } from 'react-router'
import { CartContext } from '../../context/cartContext'
import { Fragment } from "react";

export function ItemListContainer() {

  let { categoryId } = useParams()

  const { addToCart } = useContext(CartContext);

  const products = productsGroup.filter((item) => item.category === categoryId)

  const [filtroBusqueda, setFiltroBusqueda] = useState('')

  const [categoriesWithDiscount] = useState(['xbox'])

  const hasDiscounts = (categoryId) => categoriesWithDiscount.some(category => category === categoryId)

  const editarValorFiltro = (e) => {
    categoryId = null;
    setFiltroBusqueda(e.target.value)
  }

  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    if (filtroBusqueda) {
      const nuevasConsolasFiltradas = products.filter(product => product.title.toLowerCase().includes(filtroBusqueda.toLowerCase()))
      setNewProducts(nuevasConsolasFiltradas)
    } else {
      const nuevasConsolasFiltradas = products.filter((product) => product.category === categoryId)
      setNewProducts(nuevasConsolasFiltradas)
    }
    if (!filtroBusqueda && categoryId == null)
      setNewProducts(products)
  }, [filtroBusqueda]
  )

  return (
    <div>
      <Form inline>
        <FormControl className="text-center" type='text' placeholder="Buscar Productos..." style={{ marginBottom: "20px" }}
          value={filtroBusqueda}
          onChange={editarValorFiltro}
        />
      </Form>
      <section class="section-name padding-y-sm">
        <div class="container">
          <div class="row">
          {hasDiscounts(categoryId) && <p>Esta categoria tiene descuento</p>}
            {newProducts.length < 1 ?
              <Fragment>
                <p>Disculpa no tengo </p>
              </Fragment>
              :
              newProducts.map((item) => (
                <ItemList
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  onAdd={() => addToCart(item)}
                />
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )




}
