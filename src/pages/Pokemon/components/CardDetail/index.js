import React from "react";
import { Card, Row, Col, Nav, Tab, Button } from "react-bootstrap";

const styles = {
  margin: { margin: "0" },
  padding: { padding: "0" },
};

function CardDetail(props) {
  const { detail, toUrl } = props;
  return (
    <Row>
      <Card.Img
        src={detail.images.small}
        style={{ width: "300px", marginLeft: "15.3px" }}
      />
      <Col xs="12" md="8">
        <h2>{detail.name}</h2>
        <p>{detail.set.name}</p>
        <Row>
          <Col xs={2}>
            <p style={{ margin: "0", padding: "0" }}>
              <strong>Hp</strong>: {detail.hp}
            </p>
          </Col>
          <Col xs={4} style={styles.padding}>
            <p style={styles.margin}>
              <strong>Pokemon Type</strong>: {detail.types.join(", ")}
            </p>
          </Col>
          <Col style={styles.padding}>
            <p style={styles.margin}>
              <strong>Rarity</strong>: {detail.rarity}
            </p>
          </Col>
          <Col style={styles.padding}>
            <p style={styles.margin}>
              <strong>Weakeness</strong>:
              {detail.weaknesses
                ? " " + detail.weaknesses[0].type
                : " All type"}
            </p>
          </Col>
        </Row>
        <h2></h2>
        <hr style={{ margin: "10px 0" }} />
        <Tab.Container transition={false} defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="tabs" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Attack</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Prices</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {detail.attacks.map((attack, i) => (
                    <Card key={i}>
                      <Card.Body style={{ padding: "10px" }}>
                        <p>
                          <strong>Name/Damage: </strong> {attack.name} /
                          {attack.damage ? attack.damage : "-"}
                        </p>
                        <p>
                          <strong>Description: </strong>
                          {attack.text ? attack.text : "No description"}
                        </p>
                      </Card.Body>
                    </Card>
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {detail.tcgplayer ? (
                    <>
                      <strong>Low: </strong> $
                      {detail.tcgplayer.prices.holofoil.low}
                      <br /> <br />
                      <strong>Mid: </strong> $
                      {detail.tcgplayer.prices.holofoil.mid} <br /> <br />
                      <strong>High: </strong> $
                      {detail.tcgplayer.prices.holofoil.high} <br />
                      <br />
                      <strong>Market: </strong> $
                      {detail.tcgplayer.prices.holofoil.market}
                    </>
                  ) : (
                    ""
                  )}
                  <br />
                  <br />
                  <Button onClick={toUrl} variant="info">
                    Buy
                  </Button>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Col>
    </Row>
  );
}

export default CardDetail;
