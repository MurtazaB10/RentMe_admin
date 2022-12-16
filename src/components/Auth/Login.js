import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Snackbar from "../Alert/SnackBar";
// import {useUserContext} from '../../context/userContext';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);
  const history = useHistory();
  // const { logIn } = useUserContext();

  async function loginFormHandler(e) {
    e.preventDefault();
    if (email === 'karunmourya4@gmail.com' && password=='123456789') {
      setEmail(localStorage.setItem("user", email));
      setConfirmationSnackbarMessage("Login Successfull!");
      setConfirmationSnackbarOpen(true);
      history.push("/");
      window.location.reload();
    } else {
      setConfirmationSnackbarMessage("Invalid email or password!");
      setConfirmationSnackbarOpen(true);
    }
  }

  return (
    <div className="container">
      <Row style={{ marginBottom: "16rem", marginTop: "8rem" }}>
        <Col lg={3}></Col>
        <Col lg={6}>
          <h1 className="text-center mb-3 h3" style={{ color: "#664986" }}>
            Login to your Account
          </h1>
          <Form onSubmit={loginFormHandler} className="block p-40">
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              className="btn-block mt-3"
              variant="primary"
              type="submit"
              size="lg"
            >
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={3}></Col>
          <Snackbar
            confirmationSnackbarMessage={confirmationSnackbarMessage}
            confirmationSnackbarOpen={confirmationSnackbarOpen}
            setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
          />
      </Row>
    </div>
  );
}

export default Login;
