import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/itemList"
import { Form, FormControl } from "react-bootstrap";
import { productsGroup } from "../ProductsGroup/productsGroup";
import { useParams } from 'react-router'

export function ItemListContainer() {

  let { categoryId } = useParams()

  const [products, setProducts] = useState(productsGroup)

  const [filtroBusqueda, setFiltroBusqueda] = useState('')

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
            {newProducts.map((item) => (
              <ItemList
                title={item.title}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )




}
