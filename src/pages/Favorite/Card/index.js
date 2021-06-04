import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
function PokemonCard(props) {
  const history = useHistory();
  //function call fetch pokemon get by id base on click read more button
  function getById(event, id) {
    event.preventDefault();
    history.push(`/pokemon/${id}`);
  }
  // get data from props
  const { images, name, types, id, rarity } = props.data;
  // return JSX
  return (
    <Col>
      <Card style={styles} className="mb-3">
        <Card.Img variant="top" src={images.small} />
        <Card.Body style={styles.card}>
          <Card.Title style={styles.card}>
            <strong>
              <center>{name}</center>
            </strong>
          </Card.Title>
          <Row>
            <Col>
              <center>
                <h5>Type: </h5>
                <p>{types.join(", ")}</p>
              </center>
            </Col>
            <Col>
              <center>
                <h5>Rarity: </h5>
                <p>{rarity}</p>
              </center>
            </Col>
          </Row>
          <div>
            <Button
              variant="outline-dark"
              style={{
                backgroundColor: "#6a2c70",
                color: "white",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              onClick={(event) => getById(event, id)}
            >
              Read More
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

const styles = {
  card: {
    backgroundColor: "#f08a5d",
  },
  width: "20rem",
};

export default PokemonCard;
