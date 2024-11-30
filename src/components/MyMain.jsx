import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { Grid, List } from "react-bootstrap-icons";

const MyMain = () => (
  <>
    <Container
      fluid
      className="d-flex justify-content-between align-items-center mb-5"
    >
      <Row className="ms-5 mb-5 align-items-cet">
        <Col className="d-flex align-items-center ">
          <h1 className="text-light display-3 me-4">Tv shows</h1>
          <Dropdown>
            <Dropdown.Toggle className="py-1 mt-2" variant="secondary" id="dropdown-basic">
              Categories
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1">Anime</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Commedy</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="me-5 mb-5">
        <Col className="d-flex align-items-center">
          <Button className="bg-secondary border border-1 border-light me-1">
            <List />
          </Button>
          <Button className="bg-secondary border border-1 border-light ms-1">
            <Grid />
          </Button>
        </Col>
      </Row>
    </Container>
  </>
);

export default MyMain;
