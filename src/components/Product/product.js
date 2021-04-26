import { Card, Row, Form, FormControl } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/itemCount"

export const Product = (props) => {

  const oferta = () => {
    alert(`Compra esta ${props.title} que esta en promoción`);
  }

  const [filtroBusqueda, setFiltroBusqueda] = useState('')

  const editarValorFiltro = (e) => {
    setFiltroBusqueda(e.target.value)
  }


  const [consolas, setConsolas] = useState([
    {
      title: 'Play 5',
      price: '500',
      description: 'Full HD 4k',
      imagen: 'https://i.blogs.es/6a4b55/ps5/450_1000.jpg',
    },
    {
      title: 'Play 4',
      price: '400',
      description: 'Full HD',
      imagen: 'https://images-na.ssl-images-amazon.com/images/I/71PGvPXpk5L._SX466_.jpg',
    },
    {
      title: 'Play 3',
      price: '300',
      description: 'Not HD',
      imagen: 'https://i.blogs.es/feaa2f/nueva_sony_ps3_slim/450_1000.jpg',
    },
  ])

  const [consolasFiltradas, setConsolasFiltradas] = useState(consolas);

  useEffect(() => {
    //Cambio los productos filtrados
    const nuevasConsolasFiltradas = consolas.filter(consola => consola.title.toLowerCase().includes(filtroBusqueda.toLowerCase())
    )
    setConsolasFiltradas(nuevasConsolasFiltradas)
  }, [filtroBusqueda]
  )

  /* ARMO LA ESTRUCTURA DEL PRODUCTO (LO QUE QUIERO MOSTRAR Y COMO LO QUIERO MOSTRAR) */
  return (

    <div>
      <Form inline>
        <FormControl className="text-center" type='text' placeholder="Buscar Productos..." style={{ marginBottom: "20px" }}
          value={filtroBusqueda}
          onChange={editarValorFiltro}
        />
      </Form>
      <Row>
        {consolasFiltradas.map((consola) => (
          <Card>
            <Card.Img variant="top" style={{ height: '300px' }} src={consola.imagen} />
            <Card.Body>
              <Card.Title>{consola.title}</Card.Title>
              <Card.Text>
                ${consola.price}
              </Card.Text>
              <Card.Text>
                {consola.description}
              </Card.Text>
              <ItemCount stock="5" initial="1" />
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>


  )
}
