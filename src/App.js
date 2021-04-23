import "./App.css";
import { NavBar } from "./components/NavBar/navBar";
import { Product } from "./components/Product/product";
import { ItemListContainer } from "./components/ItemListContainer/itemListContainer";
import { CardGroup } from "react-bootstrap";
import { ItemList } from "./components/ItemList/itemList";
import { useState } from "react";
import { Button, Row } from "react-bootstrap";

function App() {

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
    },
    {
      title: 'Iphone 7',
      price: '300',
      id: 3,
      imagen: 'https://images-na.ssl-images-amazon.com/images/I/61fhAPdYm-L._AC_SX679_.jpg',
    }
  ])
  const [seMuestra, setSeMuestra] = useState(false)

  const handleClick = async () => {
    /* PROMISE */

    new Promise((resolve, reject) => {
      console.log('Ahora vengo con tu trago')

      setTimeout(() => {
        resolve(setSeMuestra(true))
        console.log(seMuestra)
      }, 1000)

    })
  }
  return (
    <div className="App">
      <header>
        <NavBar />
        <div>
          <ItemListContainer>
            <CardGroup>
              <Product />
            </CardGroup>
          </ItemListContainer>
          <Button onClick={handleClick} style={{ marginTop: '20px', marginBottom: '20px' }}>Buscar celulares con Promise</Button>
          {seMuestra &&
            <Row>
              <ItemList celulares={celulares} />
            </Row>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
