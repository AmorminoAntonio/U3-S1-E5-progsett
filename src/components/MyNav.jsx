import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { BellFill } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";

const MyNav = () => (
  <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container fluid className="ms-5 me-5">
      <Navbar.Brand href="#home">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png"
          height={130}
          className="ms-3 me-4"
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
        <Nav className="ms-auto align-items-center">
          <Nav.Link href="#home">
            <Search />
          </Nav.Link>
          <Nav.Link href="#features">KIDS</Nav.Link>
          <Nav.Link href="#pricing">
            <BellFill />
          </Nav.Link>
          <Dropdown>
            <Dropdown.Toggle
              className="align-items-baseline"
              variant="dark"
              id="dropdown-basic"
            >
              <img
                src="./src/assets/teenager.png"
                className="bg-danger me-1"
                id="icon-profile"
                alt=""
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="text-bg-dark-subtle" variant="dark">
              <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Gestisci Profili</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Impostazioni</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Lingua</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Chiudi sessione</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Aiuto e Supporto</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Esci da Netflix</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MyNav;
