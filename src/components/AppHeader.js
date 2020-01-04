import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component } from 'react';

export default class AppHeader extends Component {
    render() {
        return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="/DnDnData/#">DnDnData</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/DnDnData/#/classes-and-races">Classes and Races</Nav.Link>
              <Nav.Link href="/DnDnData/#/multiclasses">Multiclasses</Nav.Link>
              <Nav.Link href="/DnDnData/#/alignments">Alignments</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/arhamHumayun" target="_new">My Github</Nav.Link>
              <Nav.Link href="/DnDnData/#/about-me" inline>About Me</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}