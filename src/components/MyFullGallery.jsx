import { Container, Row } from "react-bootstrap";
import FirstGallery from "./FirstGallery";
import { Component } from "react";
import SecondGallery from "./SecondGallery";
import ThirdGallery from "./ThirdGallery";

class MyFullGallery extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row className="ms-5 me-5">
            <h3 className="text-light display-6 fs-3 mb-5 mt-2">
              risultato della ricerca di:
              <strong className="fw-bold"> "Demon Slayer"</strong>
            </h3>
            <FirstGallery />
          </Row>
          <br />
          <br />
          <Row className="ms-5 me-5 mt-5">
            <h3 className="text-light display-6 fs-3 mb-5">
              risultato della ricerca di:{" "}
              <strong className="fw-bold">"Sword Art Online"</strong>
            </h3>
            <SecondGallery />
          </Row>
          <br />
          <br />
          <Row className="ms-5 me-5 mt-5">
            <h3 className="text-light display-6 fs-3 mb-5">
              risultato della ricerca di:{" "}
              <strong className="fw-bold">"Attack on titan"</strong>
            </h3>
            <ThirdGallery />
          </Row>
          <br />
          <br />
        </Container>
      </>
    );
  }
}

export default MyFullGallery;
