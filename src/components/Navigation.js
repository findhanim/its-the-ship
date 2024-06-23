import React, { useState } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
// Assets
import chevronDown from '../assets/images/svg/chevron-down.svg'
import itsLogo from '../assets/images/logo/logo-its-white.png'
import navbarDrip from '../assets/images/png/navbar-drip.png'
import shoppingCart from '../assets/images/svg/shopping-cart.svg'

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
            ? 'navbar-dark container-lg d-lg-flex justify-content-between pt-lg-1'
            : 'navbar-dark container-lg d-lg-flex justify-content-between pt-lg-3'
        }
      >
        {/* Logo/Home */}
        <Navbar.Brand href="#home" className="col-lg-4 ms-lg-0 ms-3">
          <img
            src={itsLogo}
            height={bgColor ? '36px' : '48px'}
            alt="its-logo"
          />
        </Navbar.Brand>
        {/* Booking - Mobile View */}
        <Button
          className={
            bgColor
              ? 'd-lg-none d-block ms-4 outline'
              : 'd-lg-none d-block ms-4'
          }
        >
          Book A Cabin
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-lg-flex justify-content-end"
        >
          <Nav className="mx-4 align-items-center">
            {/* Links */}
            <Nav.Link href="#about">
              The Ship
              <img
                src={chevronDown}
                className="ms-1"
                height="22px"
                alt="chevron-down"
              />
            </Nav.Link>
            <Nav.Link href="#cabins">Cabins</Nav.Link>
            <Nav.Link href="#lineup">LineUp</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <div class="d-lg-block d-none vr mx-3 my-2"></div>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#login">
              <img src={shoppingCart} height="24px" alt="shopping-cart" />
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
