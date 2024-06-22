import React from 'react'
import { Button } from 'react-bootstrap'
// Assets
import CabinInterior from '../assets/images/image/cabin-interior.png'

export default function CardInfo() {
  return (
    <main className="col-lg-4">
      <div className="border border-2 border-danger rounded-4 p-3">
        <img src={CabinInterior} className="col-12 pb-3" alt="its-logo" />
        <h5 className="border-bottom border-2 border-danger pb-2">Interior</h5>
        <p>$659.00 - $1,199.00</p>
        <span className="beige-tag my-2">
          Early Spook 2 On Sale Now at 20% Off
        </span>
        <br />
        <br />
        <span className="white">
          <s>
            Early Spook 1 - <b>SOLD OUT</b>
          </s>
        </span>
        <br />
        <span className="white">
          Early Spook 2- From USD659 [Available Now]
        </span>
        <br />
        <span className="muted">Early Spook 3- From USD719 [Coming Soon]</span>
        <br />
        <span className="muted">Regular - From USD779 [Coming Soon]</span>
        <p className="mt-4">
          Unwind in the serenity of the Interior Cabin, a space that is
          specially designed to offer you every bit of comfort and convenience
          on board the floating oasis that is the Genting Dream.
        </p>
        <Button className="col-12 mt-2">Book A Cabin</Button>
      </div>
    </main>
  )
}
