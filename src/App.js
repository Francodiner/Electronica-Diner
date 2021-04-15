import "./App.css";
import { NavBar } from "./components/NavBar/navBar";
import { Products } from "./components/Products/products";
import { ItemListContainer } from "./components/ItemListContainer/itemListContainer";
import { CardGroup } from "react-bootstrap";

function App() {

  const productos = [
    {
      title: 'Play 5',
      price: '500',
      description: 'Full HD 4k',
      imagen: 'https://i.blogs.es/6a4b55/ps5/450_1000.jpg'
    },
    {
      title: 'Play 4',
      price: '400',
      description: 'Full HD',
      imagen: 'https://images-na.ssl-images-amazon.com/images/I/71PGvPXpk5L._SX466_.jpg'
    },
    {
      title: 'Play 3',
      price: '300',
      description: 'Not HD',
      imagen: 'https://i.blogs.es/feaa2f/nueva_sony_ps3_slim/450_1000.jpg'
    }
  ]

  return (
    <div className="App">
      <header>
        <NavBar />
        <div>
          <ItemListContainer>
          <CardGroup>
          <Products products={productos} />
          </CardGroup>
          </ItemListContainer>
        </div>
      </header>
    </div>
  );
}

export default App;
