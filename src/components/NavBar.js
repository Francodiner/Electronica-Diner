import "./App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

//ESTE COMPONENTE DEBERIA SER LLAMADO EN EL APP PARA EVITAR DUPLICAR CODIGO IGUAL.

function NavBar() {
    return (
      <div className="App">
        <title>Diner S.A</title>
        <header>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand onClick={saludo}>Electronica Diner</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Mouses</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Teclados</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Auriculares
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Nosotros</Nav.Link>
                <Nav.Link href="#link">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    );
  }
  
  const saludo = () => alert("Bienvenido al sitio");
  