import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbarmenu = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <NavLink className="sp" to="/">Products</NavLink>
                            <NavLink className="ap" to="/addproduct">Add Products</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
                <br />
            </>
        </div>
    );
};

export default Navbarmenu;