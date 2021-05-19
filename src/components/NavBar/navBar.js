import { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/cartWidget";

export const NavBar = () => {

  const [filter, setFilter] = useState('');

  useEffect(
    () => {
      console.log('Cambio el filter')
    }, [filter]
  )

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" >Electronica Diner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
            <Nav.Item>
              <Nav.Link href="/">Inicio</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/playstation">Playstation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/category/xbox">Xbox</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Item className="ml-auto">
              <Link to="/cart"> <CartWidget /></Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder="Buscar" value={filter} onChange={(e) => setFilter(e.target.value)} className="mr-sm-2 ml-auto" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
