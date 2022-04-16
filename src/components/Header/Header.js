import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaTooth } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container>
                <Navbar.Brand href="#home" className='d-flex'><FaTooth size={"1.5em"}></FaTooth><span className='mx-2'>ToothCare</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='mx-1' href="home#services">Services</Nav.Link>
                        <Nav.Link className='mx-1' href="home#services">Location</Nav.Link>
                        <Nav.Link className='mx-1' as={Link} to={"/blogs"}>Blogs</Nav.Link>
                        <Nav.Link className='mx-1' as={Link} to={"/about"}>About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={"/signup"}>Signup</Nav.Link>
                        <Nav.Link as={Link} to={"/Login"}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;