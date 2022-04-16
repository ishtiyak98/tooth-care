import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleEmail = (e) => {
    const email = e.target.value;
    setUserInfo({...userInfo, email})
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setUserInfo({...userInfo, password})
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userInfo);
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  if (user) {
    Swal.fire({
        title: "Account created!",
        text: "You can login now",
        icon: "success",
      });
      navigate('/login');
  }

  
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="w-25">
        <h3 className="text-success text-center">Signup</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={handleEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required onChange={handlePassword}/>
          </Form.Group>

          <Button className="w-100" variant="success" type="submit">
            Login
          </Button>
        </Form>
        <p className="my-3 text-center">
          Already have an account?{" "}
          <Link className="text-success text-decoration-none" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
