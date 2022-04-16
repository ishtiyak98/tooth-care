import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaTooth } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="w-25">
        <h3 className="text-success text-center">Login</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
