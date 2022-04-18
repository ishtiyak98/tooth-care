import React from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceCheckout = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();

  const handleCheckout = (event) => {
    event.preventDefault();

    toast.success("Thank you for the booking");
  };

  console.log(user);
  return (
    <div className="container">
      <h2 className="text-center text-success mt-5 mb-4">Checkout</h2>
      <h4 className="text-center">Product Id : {id}</h4>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleCheckout}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={user?.displayName}
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={user?.email}
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="Phone number" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address" required />
          </Form.Group>

          <Button className="w-100" variant="success" type="submit">
            Submit
          </Button>
          <ToastContainer />
        </Form>
      </div>
    </div>
  );
};

export default ServiceCheckout;
