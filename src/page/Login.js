import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const userLogin = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <div>
      <Container className="login-structure">
        <div>
          <img src="./images/loginPage.webp" width={800} />
        </div>
        <Container className="custom-container">
          <Form onSubmit={(event) => userLogin(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong>Email address</strong>
              </Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
              <Form.Text className="text-muted">
                By signing in or creating a member account, you agree to the Terms of
                Use and acknowledge the Privacy Policy.{" "}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong>Password</strong>
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="success" type="submit">
              Sign in
            </Button>
          </Form>
        </Container>
      </Container>
    </div>
  );
};

export default Login;
