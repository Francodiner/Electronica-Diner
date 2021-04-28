import "./App.css";
import { NavBar } from "./components/NavBar/navBar";
import { Product } from "./components/Product/product";
import { ItemListContainer } from "./components/ItemListContainer/itemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/itemDetailContainer";
import { CardGroup } from "react-bootstrap";

function App() {

  return (
    <div className="App">
      <header>
        <NavBar />
        <div>
          <CardGroup>
            <Product />
            <ItemListContainer />
          </CardGroup>
          <ItemDetailContainer />  
        </div>
      </header>
    </div>
  );
}

export default App;
