import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
// Assets
import ITSLogo from '../assets/images/logo/logo-its-white.png'

export default function Navigation() {
  return (
    <Navbar
      expand="lg"
      className="container-lg d-lg-flex justify-content-between pt-lg-3"
    >
      {/* Logo/Home */}
      <Navbar.Brand href="#home" className="col-lg-4">
        <img src={ITSLogo} height="48px" alt="its-logo" />
      </Navbar.Brand>
      {/* Booking - Mobile View */}
      <Button className="d-block d-lg-none">Book A Cabin</Button>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="d-lg-flex justify-content-end"
      >
        <Nav className="mx-4">
          {/* Links */}
          <Nav.Link href="#about">The Ship</Nav.Link>
          <Nav.Link href="#services">Cabins</Nav.Link>
          <Nav.Link href="#contact">LineUp</Nav.Link>
          <Nav.Link href="#contact">FAQ</Nav.Link>
          <Nav.Link href="#contact">Login</Nav.Link>
          {/* Booking - Web View */}
          <Button className="d-lg-block d-none ms-4">Book A Cabin</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
