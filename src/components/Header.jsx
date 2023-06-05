import React, { Component } from 'react';
import { Navbar,  Nav } from 'react-bootstrap';

class Header extends Component{
    state ={};
    render() {
        return (
            // <div>
            //     <h1> This is a header</h1>
            //     <p> 
            //         Per Christum Dominum Nostrum!
            //     </p>
            // </div>
    <div>
    <Navbar bg="light" expand="lg">

        <Navbar.Brand href="#home">React ROS (PeRL)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
        );
    }
}


export default Header;