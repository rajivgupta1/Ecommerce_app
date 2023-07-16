import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';

import {Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
<Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Skyline Ivy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Link to="/" className="nav-link">SignIn</Link>

            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="/new-admin" className="nav-link">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header;