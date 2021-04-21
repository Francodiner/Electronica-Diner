import "./App.css";
import { NavBar } from "./components/NavBar/navBar";
import { Product } from "./components/Product/product";
import { ItemListContainer } from "./components/ItemListContainer/itemListContainer";
import { CardGroup } from "react-bootstrap";

function App() {

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
        </div>
      </header>
    </div>
  );
}

export default App;
