import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import LoginWithApp from "../LoginWithApp/LoginWithApp";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [loginInfo, setLoginInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleEmail = (e) => {
    const email = e.target.value;
    if (/\S+@\S+\.\S+/.test(email) === false) {
      setLoginError({ ...loginError, emailError: `not a valid mail!` });
      setLoginInfo({ ...loginInfo, email: "" });
    } else {
      setLoginInfo({ ...loginInfo, email });
      setLoginError({ ...loginError, emailError: "" });
    }
  };

  const handlePassword = (e) => {
    const password = e.target.value;

    if (/.{6,}/.test(password) === false) {
      setLoginError({...loginError,passwordError: `minimum characters must be 6!`,});
      setLoginInfo({ ...loginInfo, password: "" });
    } else {
      setLoginInfo({ ...loginInfo, password });
      setLoginError({ ...loginError, passwordError: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(loginInfo.email, loginInfo.password);
  };

  useEffect(() => {
    if (user) {
      Swal.fire({
        title: "Welcome",
        text: "Successfully logged in",
        icon: "success",
      });
      navigate(from, { replace: true });
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  }, [error]);

  console.log(loginError);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="w-25">
        <h3 className="text-success text-center">Login</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmail}
              required
            />
            <div className="text-danger">
              {loginError?.emailError ? loginError.emailError : ""}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              required
            />
            <div className="text-danger">
              {loginError?.passwordError ? loginError.passwordError : ""}
            </div>
          </Form.Group>

          <Button className="w-100" variant="success" type="submit">
            Login
          </Button>
        </Form>
        <p className="my-3 text-center">
          Don't have an account?{" "}
          <Link className="text-success text-decoration-none" to={"/signup"}>
            Signup
          </Link>
        </p>

        <LoginWithApp></LoginWithApp>
      </div>
    </div>
  );
};

export default Login;
