import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { pokemonById } from "../../../../helpers/fetch";
import { useDispatch } from "react-redux";
import { ADD_FAVORITE } from "../../../../store/reducers/anotherAction";
function PokemonCard(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  //function call fetch pokemon get by id base on click read more button
  function getById(event, id) {
    event.preventDefault();
    history.push(`/pokemon/${id}`);
  }
  // function add to favorite base on click love button
  function favorite(event, id) {
    event.preventDefault();
    pokemonById(id).then((data) =>
      dispatch({ type: ADD_FAVORITE, payload: data })
    );
  }
  // get data from props
  const { images, name, types, id, rarity } = props.data;
  // return html
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
                <p>{types?.join(", ")}</p>
              </center>
            </Col>
            <Col>
              <center>
                <h5>Rarity: </h5>
                <p>{rarity}</p>
              </center>
            </Col>
          </Row>
          <div style={{ margin: "0 0 0 19%" }}>
            <Button
              variant="outline-dark"
              style={{ backgroundColor: "#6a2c70", color: "white" }}
              onClick={(event) => getById(event, id)}
            >
              Read More
            </Button>
            <Button
              variant="outline-dark"
              style={{ backgroundColor: "#b83b5e", marginLeft: "10px" }}
              onClick={(event) => favorite(event, id)}
            >
              <i style={{ color: "white" }} className="fas fa-heart"></i>
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
