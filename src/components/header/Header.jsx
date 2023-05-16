import React from "react";
import "./header.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Navbar bg="transparent" expand="lg" className="pt-3">
        <Container>
          <Navbar.Brand href="#home" className="nav-brand">
           Devloper Awal
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bar-icon"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link   ">
                Home
              </NavLink>
              <NavLink to="/About" className="nav-link">
                About
              </NavLink>
              <NavLink to="/Portfolio" className="nav-link">
                Portfolio
              </NavLink>
              <NavLink to="/Contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
