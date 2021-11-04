import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar className="py-3" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="Travelo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="travelo-menu">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                            <Nav.Link as={Link} to="/manageservices">Manage Services</Nav.Link>
                            <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
                            {
                                user.email ?
                                    <button className="fw-bold head" onClick={logOut}>Logout</button>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                        {
                            user?.displayName ?
                                <Nav>
                                    <span>Name :</span>
                                    <button className="fw-bold user-name">
                                        {user?.displayName}
                                    </button>
                                </Nav>
                                :
                                ''
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;