import "./App.css";
import { NavBar } from "./components/NavBar/navBar";
import { Product } from "./components/Product/product";
import { ItemListContainer } from "./components/ItemListContainer/itemListContainer";
import { CardGroup } from "react-bootstrap";
import { ItemList } from "./components/ItemList/itemList";
import { useState } from "react";
import { Button, Row } from "react-bootstrap";

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
        </div>
      </header>
    </div>
  );
}

export default App;
