import React from 'react'
// Assets
import footerTrooper from '../assets/images/png/footer-trooper.png'
import ITSLogo from '../assets/images/logo/logo-its-white.png'
import whatsapp from '../assets/images/png/icon-whatsapp.png'

export default function Footer() {
  return (
    <main className="container-fluid">
      <section className="d-lg-flex border-bottom border-2 border-white justify-content-between align-items-center px-5 pt-lg-3">
        <div className="col-lg-3">
          <img src={ITSLogo} height="80px" alt="its-logo" />
        </div>
        <div className="col-lg-6 d-flex justify-content-between">
          <h6>Socialise With Us</h6>
          <span>/itstheship</span>
          <span>/itstheship</span>
          <span>/itstheshipasia</span>
        </div>
        <div className="col-lg-2 d-flex justify-content-end">
          <img src={footerTrooper} height="140px" alt="footer-trooper" />
        </div>
      </section>
      <section className="d-flex justify-content-between mx-5 mt-3">
        <div className="col-lg-6 d-flex justify-content-between">
          <span className="t3">It's The Ship, Copyright 2023.</span>
          <span className="t3">Terms and Conditions</span>
          <span className="t3">Privacy Policy</span>
        </div>
        <div className="offset-lg-4 col-lg-2 d-flex justify-content-end">
          <span>
            Powered by <b>A.D</b>
          </span>
        </div>
      </section>
      <section className="d-lg-flex justify-content-end my-3">
        <img src={whatsapp} height="56px" alt="footer-trooper" />
      </section>
    </main>
  )
}
