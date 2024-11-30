import { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

class SecondGallery extends Component {
  state = {
    filmB: []
  };
  getFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=5fd011cf&s=sword art online")
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
          this.setState({ filmB: film.Search.slice(0, 6) });
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
      <>
        <Row xs={1} sm={2} md={3} xl={6} className="align-items-center">
          {this.state.filmB.map((film) => (
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
      </>
    );
  }
}

export default SecondGallery;
