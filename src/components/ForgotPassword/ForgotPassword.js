import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  const [email, setEmail] = useState("");


  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    await sendPasswordResetEmail(email);
    toast("Password reset email sent!");
  };

  useEffect(()=>{
    if(sending){
        toast("sending mail...");
    }
  }, [sending]);

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
        <h3 className="text-success text-center">Change Password</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmail}
              required
            />
            <div className="text-danger">{}</div>
          </Form.Group>

          <Button className="w-100" variant="success" type="submit">
            Change
          </Button>
        </Form>
        <p className="my-3 text-center">
          want to return in login?{" "}
          <Link className="text-success text-decoration-none" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
