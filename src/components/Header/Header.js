import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaTooth } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);

    //!----------- Sign-out function -------------
    const handleSignOut = ()=>{
        Swal.fire({
            title: "Logged Out!",
            text: "Successfully logged Out",
            icon: "success",
          });
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to={"/"} className='d-flex'><FaTooth size={"1.5em"}></FaTooth><span className='mx-2'>ToothCare</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link className='mx-1' as={CustomLink} to={"/"}>Home</Nav.Link>
                        {/* <Nav.Link className='mx-1' href="/#services">Services</Nav.Link>
                        <Nav.Link className='mx-1' href="/#contact">Contact Me</Nav.Link> */}
                        <Nav.Link className='mx-1' as={CustomLink} to={"/blogs"}>Blogs</Nav.Link>
                        <Nav.Link className='mx-1' as={CustomLink} to={"/about"}>About</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user ? <Nav.Link className='btn btn-success' as={Button} onClick={handleSignOut}>Logout</Nav.Link>  : <Nav.Link as={CustomLink} to={"/login"}>Login</Nav.Link>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;