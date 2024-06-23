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
      {/* Desktop View */}
      <div className="d-lg-block d-none">
        <section className="d-flex border-bottom border-2 border-white justify-content-lg-between align-items-center px-5 pt-lg-3">
          <div className="col-lg-3 col-10">
            <img src={itsLogo} height="80px" alt="its-logo" />
          </div>
          {/* Social Medias */}
          <div className="col-lg-6 d-flex justify-content-between align-items-center">
            <h6 className="mt-lg-1">Socialise With Us</h6>
            <span>
              <img src={igLogo} className="social-icon" alt="ig-logo" />
              /itstheship
            </span>
            <span>
              <img src={fbLogo} className="social-icon" alt="fb-logo" />
              /itstheship
            </span>
            <span>
              <img
                src={twitterLogo}
                className="social-icon"
                alt="twitter-logo"
              />
              /itstheshipasia
            </span>
          </div>
          <div className="col-lg-2 d-flex justify-content-end">
            <img src={footerTrooper} height="140px" alt="footer-trooper" />
          </div>
        </section>
        {/* Credits */}
        <section className="d-flex justify-content-between mx-5 mt-3">
          <div className="col-lg-6 d-flex justify-content-between">
            <span className="t3">It's The Ship, Copyright 2023.</span>
            <span className="t3">Terms and Conditions</span>
            <div class="d-lg-block d-none vr mx-2 mb-1"></div>
            <span className="t3">Privacy Policy</span>
          </div>
          <div className="offset-lg-4 col-lg-2 d-flex justify-content-end">
            <span>
              powered by <b>A.D</b>
            </span>
          </div>
        </section>
      </div>

      {/* Mobile View */}
      <div className="d-lg-none d-block">
        <div className="d-flex justify-content-center">
          <img src={itsLogo} height="80px" alt="its-logo" />
        </div>
        {/* Social Medias */}
        <h6 className="text-center mt-5">Socialise With Us</h6>
        <div className="d-flex flex-column justify-content-center">
          <div className="text-center mt-2">
            <span className="me-4">
              <img src={igLogo} className="social-icon" alt="ig-logo" />
              /itstheship
            </span>
            <span>
              <img src={fbLogo} className="social-icon" alt="fb-logo" />
              /itstheship
            </span>
          </div>
          <div className="text-center mt-3">
            <span>
              <img
                src={twitterLogo}
                className="social-icon"
                alt="twitter-logo"
              />
              /itstheshipasia
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-center border-bottom border-2 border-white mt-5">
          <img src={footerTrooper} height="140px" alt="footer-trooper" />
        </div>
        {/* Credits */}
        <div className="text-center mt-4">
          <span className="t3">It's The Ship, Copyright 2023.</span>
          <div className="mt-2 mb-4">
            <span className="t3">Terms and Conditions</span>
            <div class="vr mx-4"></div>
            <span className="t3">Privacy Policy</span>
          </div>
          <span>
            powered by <b>A.D</b>
          </span>
        </div>
      </div>
    </main>
  )
}
