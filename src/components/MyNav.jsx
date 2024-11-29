import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BellFill } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";

const MyNav = () => (
  <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container fluid className="mx-5">
      <Navbar.Brand href="#home">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png"
          height={150}
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Tv shows">Tv shows</Nav.Link>
          <Nav.Link href="#Movies">Movies</Nav.Link>
          <Nav.Link href="#Recently Added">Recently Added</Nav.Link>
          <Nav.Link href="#My List">My List</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="#home">
            <Search />
          </Nav.Link>
          <Nav.Link href="#features">KIDS</Nav.Link>
          <Nav.Link href="#pricing">
            <BellFill />
          </Nav.Link>
          <NavDropdown title={<PersonFill />} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MyNav;
