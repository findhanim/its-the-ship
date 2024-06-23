import React from 'react'
// Assets
import entArcade from '../assets/images/image/entertainment-arcade.jpg'
import entChevron from '../assets/images/png/entertainment-chevron.png'
import entSkull from '../assets/images/png/entertainment-skull.png'
import entTheatre from '../assets/images/image/entertainment-theatre.jpg'
import entZouk from '../assets/images/image/entertainment-zouk.jpg'

export default function TabContent() {
  return (
    <main className="mx-5 my-5 my-lg-0">
      {/* Description */}
      <div className="d-flex align-items-center">
        <img src={entSkull} height="100px" alt="ent-skull" />
        <div className="ms-lg-4 col-lg-9">
          <p className="t2 text-danger">Entertainment</p>
          <p>
            An endless assortment of fun activities - including submersibles,
            waterslides, bowling alley, rope course, rock climbing wall and many
            more. You'll never be stuck for options here.
          </p>
        </div>
      </div>
      {/* Gallery */}
      <div className="row gx-4 mt-4">
        <div className="col-lg-4 col-6">
          <p className="t4">Arcade</p>
          <img src={entArcade} width="100%" alt="ent-arcade" />
        </div>
        <div className="col-lg-4 col-2 col-6">
          <p className="t4">Theatre</p>
          <img src={entTheatre} width="100%" alt="ent-theatre" />
        </div>
        <div className="col-lg-4 col-6 d-lg-block d-none">
          <p className="t4">Zouk</p>
          <img src={entZouk} width="100%" alt="ent-zouk" />
        </div>
      </div>
      <div className="d-flex justify-content-lg-end justify-content-center mt-4">
        <img src={entChevron} height="30px" alt="ent-chevron" />
      </div>
    </main>
  )
}
