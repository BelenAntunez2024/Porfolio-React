import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar glass-effect py-3 mt-3 mx-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          Belen<span>Antúnez</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end className="nav-item-custom">
              INICIO
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className="nav-item-custom">
              PROYECTOS
            </Nav.Link>
            <Nav.Link as={NavLink} to="/skills" className="nav-item-custom">
              SKILLS
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto" className="btn-contact-nav ms-lg-3 mt-3 mt-lg-0">
              CONTACTO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;