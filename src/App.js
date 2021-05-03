import "./App.css";
import { NavBar } from "./components/NavBar/navBar";
import { ItemListContainer } from "./components/ItemListContainer/itemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/itemDetailContainer";
import { CardGroup } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <CardGroup>
              <ItemListContainer />
            </CardGroup>
          </Route>
          <Route path='/category/:categoryId' >
              <ItemListContainer />
          </Route>
          <Route path='/item/:productId' >
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
