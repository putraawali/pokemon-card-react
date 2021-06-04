import React from "react";
import { Container, Spinner, Row } from "react-bootstrap";

function LoadingPage() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <h1 style={{ fontSize: "100px" }}>
            Loading... <br />
            <center>
              <Spinner animation="border" />
            </center>
          </h1>
        </Row>
      </Container>
    </>
  );
}

export default LoadingPage;
