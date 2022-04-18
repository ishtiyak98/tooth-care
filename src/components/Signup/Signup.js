import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import LoginWithApp from "../LoginWithApp/LoginWithApp";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signupError, setSignupError] = useState({
    emailError: "",
    passwordError: "",
  });

  const navigate = useNavigate();

  //!----------- handle name input ------------
  const handleName = (e) => {
    const name = e.target.value;
    setUserInfo({ ...userInfo, name });
  };

  //!----------- handle name input ------------
  const handleEmail = (e) => {
    const email = e.target.value;

    if (/\S+@\S+\.\S+/.test(email) === false) {
      setSignupError({ ...signupError, emailError: `not a valid mail!` });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setUserInfo({ ...userInfo, email });
      setSignupError({ ...signupError, emailError: "" });
    }
  };

  //!----------- handle password input -------------
  const handlePassword = (e) => {
    const password = e.target.value;

    if (/.{6,}/.test(password) === false) {
      setSignupError({
        ...signupError,
        passwordError: `minimum characters must be 6!`,
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setUserInfo({ ...userInfo, password });
      setSignupError({ ...signupError, passwordError: "" });
    }
  };

  //!----------- handle form submit -------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userInfo);
    await createUserWithEmailAndPassword(userInfo?.email, userInfo?.password);
    await updateProfile({ displayName: userInfo?.name });
  };

  //!----------- sweet-alert for successful sign-up -------------
  if (user) {
    Swal.fire({
      title: "Account created!",
      text: "You can login now",
      icon: "success",
    });
    navigate("/login");
  }

  //!----------- sweet-alert for error -------------
  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  }, [error]);

  return (
    <div className="d-flex justify-content-center mt-5 container">
      <div className="w-50">
        <h3 className="text-success text-center">Signup</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              required
              onChange={handleName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={handleEmail}
            />
            <div className="text-danger">
              {signupError?.emailError ? signupError.emailError : ""}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={handlePassword}
            />
            <div className="text-danger">
              {signupError?.passwordError ? signupError.passwordError : ""}
            </div>
          </Form.Group>

          <Button className="w-100" variant="success" type="submit">
            Signup
          </Button>
        </Form>
        <p className="my-3 text-center">
          Already have an account?{" "}
          <Link className="text-success text-decoration-none" to={"/login"}>
            Login
          </Link>
        </p>

        <LoginWithApp></LoginWithApp>
      </div>
    </div>
  );
};

export default Signup;
