import { Button, Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const MyFooter = () => (
  <>
  <Container className="align-items-center">
  <Row className="mt-5">
      <Col className="">
        <Row className="">
          <Col className=" mb-2">
            <a>
              <Facebook className="ms-0 mx-2" />
            </a>
            <a>
              <Instagram className="mx-2" />
            </a>
            <a>
              <Twitter className="mx-2" />
            </a>
            <a>
              <Youtube className="mx-2" />
            </a>
          </Col>
        </Row>
        <Row className="">
          <Col className="">
            <Row className="">
              <Col className="">
                <p>
                  <a
                    className="text-light text-decoration-none"
                    href="#"
                    title="footer link"
                  >
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a
                    className="text-light text-decoration-none"
                    href="#"
                    title="footer link"
                  >
                    Media Center
                  </a>
                </p>
                <p>
                  <a
                    className="text-light text-decoration-none"
                    href="#"
                    title="footer link"
                  >
                    Privacy
                  </a>
                </p>
                <p>
                  <a
                    className="text-light text-decoration-none"
                    href="#"
                    title="footer link"
                  >
                    Contact us
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="">
            <Row className="">
              <Col className="">
                <p>
                  <a
                    className="text-light text-decoration-none"
                    href="#"
                    title="footer link"
                  >
                    Audio Description
                  </a>
                </p>
                <p>
                  <a
                    className="text-light text-decoration-none"
                    href="#"
                    title="footer link"
                  >
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a
                    className="text-light text-decoration-none"
                    href="#"
                    title="footer link"
                  >
                    Legal Notices
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="">
            <Row className="">
              <Col className="">
                <p>
                  <a
                    className="text-light text-decoration-none"
                    href="#"
                    title="footer link"
                  >
                    Help Center
                  </a>
                </p>
                <p>
                  <a
                    className="text-light text-decoration-none"
                    href="#"
                    title="footer link"
                  >
                    Jobs
                  </a>
                </p>
                <p>
                  <a
                    className="text-light text-decoration-none"
                    href="#"
                    title="footer link"
                  >
                    Cookie Preferences
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="">
            <Row className="">
              <Col className="">
                <p>
                  <a
                    className="text-light text-decoration-none"
                    href="#"
                    title="footer link"
                  >
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a
                    className="text-light text-decoration-none"
                    href="#"
                    title="footer link"
                  >
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a
                    className="text-light text-decoration-none"
                    href="#"
                    title="footer link"
                  >
                    Corporate Information
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="">
          <Col className="">
            <Button
              type="button"
            >
              Service Code
            </Button>
          </Col>
        </Row>
        <Row className="">
          <Col className="">
            N© 1997-2023 Netflix, Inc.
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
   
  </>
);

export default MyFooter;
