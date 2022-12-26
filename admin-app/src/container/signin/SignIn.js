import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputText from "../../components/InputText/InputText";

function SignIn() {
  return (
    <div>
      <Header />
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Form className="main-section">
              <InputText
                label="Email Address"
                placeholder="Email Address"
                value=""
                type="email"
                onChange={() => {}}
              />
              <InputText
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => {}}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignIn;
