import React, { useState } from 'react';
import './header.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Loading from '../Loading/Loding';
const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNavItemClick = () => {
    setLoading(true);
    setExpanded(false);
  };

  return (
    <header className="header">
      <Navbar
        bg="transparent"
        expand="lg"
        className="pt-3  "
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <Navbar.Brand href="#home" className="nav-brand">
            Developer Awal
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bar-icon   "
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link" onClick={handleNavItemClick}>
                Home
              </NavLink>
              <NavLink
                to="/About"
                className="nav-link"
                onClick={handleNavItemClick}
              >
                About
              </NavLink>
              <NavLink
                to="/Portfolio"
                className="nav-link"
                onClick={handleNavItemClick}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/Contact"
                className="nav-link"
                onClick={handleNavItemClick}
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Loading loading={loading} setLoading={setLoading} />
    </header>
  );
};

export default Header;
