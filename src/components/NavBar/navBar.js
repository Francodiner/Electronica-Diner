import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { CartWidget } from "../CartWidget/cartWidget";

export const NavBar = () => {

const saludo = () => alert("Bienvenido al sitio");

  return (
    <div className="App">
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand onClick={saludo}>Electronica Diner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="container-fluid">
              <Nav.Item>
                <Nav.Link href="#inicio">Inicio</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mouses</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Teclados</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Auriculares
                  </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#nosotros">Nosotros</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
              <Nav.Item className="ml-auto">
                <Nav.Link>  <CartWidget /></Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
}
