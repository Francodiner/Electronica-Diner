import "./itemListContainer.css";
import { useState, useEffect } from "react";
import { Card, Row } from "react-bootstrap";

export const ItemListContainer = (props) => {
  const [celulares, setCelulares] = useState([

    {
      title: 'Iphone X',
      price: '500',
      id: 1,
      imagen: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/335/204/products/apple-iphone-x-64gb-silver-used-20191122085356800-_w500_1-8532858c58bff3411615996662135414-640-0.jpg',
    },
    {
      title: 'Iphone 8',
      price: '400',
      id: 2,
      imagen: 'https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/i/p/iphone-8-gris-espacial-frente.jpg',
    }
  ])

  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      console.log('Cargando productos')

      setTimeout(() => {
        resolve(setProducts(celulares))
      }, 2000)
    })
  }, [])

  return (
    <div>
      <h1 style={{marginTop: '20px'}}>Celulares con Promise</h1>
      <Row>
        {products.map((celu) => (
          <Card>
            <Card.Img variant="top" style={{ height: '300px' }} src={celu.imagen} />
            <Card.Body>
              <Card.Title>{celu.title}</Card.Title>
              <Card.Text>
                ${celu.price}
              </Card.Text>
              <Card.Text>
                {celu.id}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  )
}
