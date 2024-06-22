import React from 'react'
import { Button } from 'react-bootstrap'
// Assets
import CabinInterior from '../assets/images/image/cabin-interior.png'

export default function CardInfo() {
  return (
    <div className="col-lg-4 border border-2 border-danger rounded-4 p-3">
      <img src={CabinInterior} className="col-12 pb-3" alt="its-logo" />
      <h5 className="border-bottom border-2 border-danger pb-2">Interior</h5>
      <p>$659.00 - $1,199.00</p>
      <tag>Early Spook 2 On Sale Now at 20% Off</tag>
      <br /> <br />
      <e>
        <s>
          Early Spook 1 - <b>SOLD OUT</b>
        </s>
      </e>
      <br />
      <e>Early Spook 2- From USD659 [Available Now]</e>
      <br />
      <d>Early Spook 3- From USD719 [Coming Soon]</d>
      <br />
      <d> Regular - From USD779 [Coming Soon]</d>
      <p className="mt-4">
        Unwind in the serenity of the Interior Cabin, a space that is specially
        designed to offer you every bit of comfort and convenience on board the
        floating oasis that is the Genting Dream.
      </p>
      <Button className="col-12">Book A Cabin</Button>
    </div>
  )
}
