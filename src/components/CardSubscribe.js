import React from 'react'
import { Button } from 'react-bootstrap'

export default function CardSubscribe() {
  return (
    <main className="bg-newsletter border border-darkgray rounded-4 p-5">
      <div className="d-lg-flex align-items-center">
        <div className="col-lg-3">
          <h4>Sign Up For Our Newsletter</h4>
        </div>
        <div className="offset-lg-1 col-lg-7">
          <p>Email*</p>
          <input
            type="text"
            className="form-control"
            placeholder="johndoes@gmail.com"
            aria-label="email"
            aria-describedby="email-newsletter"
          />
          <div className="d-flex align-items-center my-3">
            <div class="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="checked"
                id="flexCheckDefault"
              />
              <p className="ms-2 t5">
                I hereby accord consent to IT'S THE SHIP and third parties to
                process my personal data in accordance to your Privacy Policy
              </p>
            </div>
          </div>
          <Button>Subscribe</Button>
        </div>
      </div>
    </main>
  )
}
