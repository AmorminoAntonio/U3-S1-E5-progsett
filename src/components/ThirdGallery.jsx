import { Component } from "react";
import { Card, Row } from "react-bootstrap";

class ThirdGallery extends Component {
  state = {
    filmC: []
  };
  getFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=5fd011cf&s=superman")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new error("Errore nel reperimento dei dati!");
        }
      })
      .then((film) => {
        console.log(film);
        if (film.Search) {
          this.setState({ filmC: film.Search });
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
        <Row xs={1} sm={2} md={3} lg={4} xl={6} className="mb-4">
          {this.state.filmC.map((film) => (
            <Col key={film.imdbID} className="mb-4 text-center px-1">
              <Card className="border-0">
                <Card.Img
                  src={film.Poster}
                  alt={film.Title}
                  className="img-fluid"
                  style={{
                    height: "150px",
                    objectFit: "cover"
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default ThirdGallery;
