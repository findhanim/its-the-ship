import React, { useState } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
// Assets
import itsLogo from '../assets/images/logo/logo-its-white.png'
import navbarDrip from '../assets/images/png/navbar-drip.png'

export default function Navigation() {
  // Change bg color
  const [bgColor, setBgColor] = useState(false)

  const changeBgColor = () => {
    if (window.scrollY >= 80) {
      setBgColor(true)
    } else {
      setBgColor(false)
    }
  }
  window.addEventListener('scroll', changeBgColor)

  return (
    <main className={bgColor ? 'bg-navbar fixed-top' : 'fixed-top'}>
      <Navbar
        expand="lg"
        className={
          bgColor
            ? 'container-lg d-lg-flex justify-content-between pt-lg-1'
            : 'container-lg d-lg-flex justify-content-between pt-lg-3'
        }
      >
        {/* Logo/Home */}
        <Navbar.Brand href="#home" className="col-lg-4">
          <img
            src={itsLogo}
            height={bgColor ? '36px' : '48px'}
            alt="its-logo"
          />
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
            <Nav.Link
              href="#contact"
              className={bgColor ? 'text-black' : 'auto'}
            >
              Login
            </Nav.Link>
            {/* Booking - Web View */}
            <Button
              className={
                bgColor
                  ? 'd-lg-block d-none ms-4 outline'
                  : 'd-lg-block d-none ms-4'
              }
            >
              Book A Cabin
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {bgColor ? (
        <img
          src={navbarDrip}
          className="position-absolute"
          width="100%"
          alt="navbar-drip"
        />
      ) : null}
    </main>
  )
}
