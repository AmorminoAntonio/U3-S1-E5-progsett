import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class FirstGallery extends Component {
  state = {
    filmA: []
  };
  getFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=5fd011cf&s=demon slayer")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel reperimento dei dati!");
        }
      })
      .then((film) => {
        console.log(film);
        if (film.Search) {
          this.setState({ filmA: film.Search.slice(0, 6) });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  componentDidMount() {
    this.getFilm();
  }

  render() {
    return (
      <Container fluid>
        <Row xs={1} sm={2} md={3} xl={6} className="align-items-center">
          {this.state.filmA.map((film) => (
            <Col key={film.imdbID} id="card-img">
              <Card className="border-none border-dark rounded-4">
                <Card.Img
                  src={film.Poster}
                  alt={film.Title}
                  className="rounded-3"
                />
              </Card>
              <Card.Title className="text-light fs-6">{film.Title}</Card.Title>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default FirstGallery;
