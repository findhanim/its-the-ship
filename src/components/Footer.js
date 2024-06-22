import React from 'react'
// Assets
import fbLogo from '../assets/images/svg/facebook.svg'
import footerTrooper from '../assets/images/png/footer-trooper.png'
import igLogo from '../assets/images/svg/instagram.svg'
import itsLogo from '../assets/images/logo/logo-its-white.png'
import twitterLogo from '../assets/images/svg/twitter.svg'

export default function Footer() {
  return (
    <main className="container-fluid mb-5 pb-4">
      <section className="d-lg-flex border-bottom border-2 border-white justify-content-between align-items-center px-5 pt-lg-3">
        <div className="col-lg-3">
          <img src={itsLogo} height="80px" alt="its-logo" />
        </div>
        <div className="col-lg-6 d-flex justify-content-between">
          <h6>Socialise With Us</h6>
          <span>
            <img src={igLogo} className="social-icon" alt="ig-logo" />
            /itstheship
          </span>
          <span>
            <img src={fbLogo} className="social-icon" alt="fb-logo" />
            /itstheship
          </span>
          <span>
            <img src={twitterLogo} className="social-icon" alt="twitter-logo" />
            /itstheshipasia
          </span>
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
    </main>
  )
}
