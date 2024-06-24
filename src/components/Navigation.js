import React, { useState } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
// Assets
import chevronDown from '../assets/images/svg/chevron-down.svg'
import itsLogo from '../assets/images/logo/logo-its-white.png'
import navMenu from '../assets/images/svg/menu.svg'
import navbarDrip from '../assets/images/png/navbar-drip.png'
import shoppingCart from '../assets/images/svg/shopping-cart.svg'

export default function Navigation() {
  const [bgColor, setBgColor] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const changeBgColor = () => {
    if (window.scrollY >= 80) {
      setBgColor(true)
    } else {
      setBgColor(false)
    }
  }
  window.addEventListener('scroll', changeBgColor)

  const handleClick = () => {
    setOpenMenu((prevState) => !prevState)
  }

  return (
    <main
      className={
        bgColor ? 'nav-red fixed-top py-lg-2 py-2' : 'fixed-top py-lg-4 py-2'
      }
    >
      <div className="container d-flex justify-content-between">
        {/* Logo */}
        <div href="#home" className="col-lg-4">
          <img
            src={itsLogo}
            height={bgColor ? '36px' : '48px'}
            alt="its-logo"
          />
        </div>
        <div className="d-lg-flex align-items-center">
          {/* Navigation Links */}
          <div className="d-none d-lg-block">
            <a href="#about">
              The Ship
              <img
                src={chevronDown}
                className="ms-1"
                height="22px"
                alt="chevron-down"
              />
            </a>
            <a href="#cabins">Cabins</a>
            <a href="#lineup">LineUp</a>
            <a href="#faq">FAQ</a>
            <span class="vr mx-3"></span>
            <a href="#login">Login</a>
            <a href="#shopping" className="mx-4 me-5">
              <img src={shoppingCart} height="24px" alt="shopping-cart" />
            </a>
          </div>
          {/* Booking Button */}
          <Button className={bgColor ? 'outline' : 'auto'}>Book A Cabin</Button>
        </div>

        {/* Mobile Menu Button */}
        <div href="#home" className="d-lg-none d-block" onClick={handleClick}>
          <img src={navMenu} height="36px" alt="nav-menu" />
        </div>
      </div>
      {/* Mobile Navigation Links */}
      {openMenu ? (
        <div
          className={
            bgColor ? 'd-lg-none d-block' : 'nav-black d-lg-none d-block'
          }
        >
          <div className="row text-center pt-5">
            <a href="#about">
              The Ship
              <img
                src={chevronDown}
                className="ms-1"
                height="22px"
                alt="chevron-down"
              />
            </a>
            <a href="#cabins">Cabins</a>
            <a href="#lineup">LineUp</a>
            <a href="#faq">FAQ</a>
            <a href="#login">Login</a>
            <a href="#shopping">
              <img src={shoppingCart} height="24px" alt="shopping-cart" />
            </a>
          </div>
        </div>
      ) : null}

      {/* Navbar Bg */}
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
