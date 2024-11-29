import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { Grid, List } from "react-bootstrap-icons";

const MyMain = () => (
  <>
    <Container
      fluid
      className="d-flex justify-content-between align-items-center"
    >
      <Row className="ms-5">
        <Col className="d-flex align-items-center p">
          <h1 className="text-light display-2 me-4">Tv shows</h1>
          <Dropdown>
            <Dropdown.Toggle className="px-4 py-2" variant="secondary" id="dropdown-basic">
              Categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Anime</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Romantico</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Storico</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="me-5">
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
