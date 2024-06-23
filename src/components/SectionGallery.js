import React from 'react'
// Assets
import gallery1 from '../assets/images/image/gallery-1.png'
import gallery2 from '../assets/images/image/gallery-2.png'
import gallery3 from '../assets/images/image/gallery-3.png'
import gallery4 from '../assets/images/image/gallery-4.png'
import gallery5 from '../assets/images/image/gallery-5.png'
import gallery6 from '../assets/images/image/gallery-6.png'
import gallery7 from '../assets/images/image/gallery-7.png'
import gallery8 from '../assets/images/image/gallery-8.png'
import gallery9 from '../assets/images/image/gallery-9.png'

export default function SectionGallery() {
  return (
    <main>
      {/* Desktop View */}
      <div className="d-lg-block d-none">
        <section className="row">
          <div className="col-lg-8">
            <img src={gallery1} width="100%" alt="gallery-1" />
          </div>
          <div className="col-lg-4">
            <div className="row g-3">
              <img src={gallery2} width="100%" alt="gallery-2" />
              <img src={gallery3} width="100%" alt="gallery-3" />
            </div>
          </div>
        </section>
        <section className="row my-4">
          <img
            className="col-lg-4"
            src={gallery4}
            width="100%"
            alt="gallery-4"
          />
          <img
            className="col-lg-4"
            src={gallery5}
            width="100%"
            alt="gallery-5"
          />
          <img
            className="col-lg-4"
            src={gallery6}
            width="100%"
            alt="gallery-6"
          />
        </section>
        <section className="row">
          <div className="col-lg-4">
            <div className="row g-3">
              <img src={gallery7} width="100%" alt="gallery-7" />
              <img src={gallery8} width="100%" alt="gallery-8" />
            </div>
          </div>
          <div className="col-lg-8">
            <img src={gallery9} width="100%" alt="gallery-9" />
          </div>
        </section>
      </div>

      {/* Mobile View */}
      <div className="d-lg-none d-block">
        <section className="row g-2">
          <div className="col-12">
            <img src={gallery1} width="100%" alt="gallery-1" />
          </div>
          <div className="d-flex">
            <img
              src={gallery2}
              className="col-6"
              width="100%"
              alt="gallery-2"
            />
            <img
              src={gallery6}
              className="col-6"
              width="100%"
              alt="gallery-6"
            />
          </div>
          <div className="d-flex">
            <img
              src={gallery3}
              className="col-6"
              width="100%"
              alt="gallery-3"
            />
            <img
              src={gallery4}
              className="col-6"
              width="100%"
              alt="gallery-4"
            />
          </div>
          <div className="col-12">
            <img src={gallery9} width="100%" alt="gallery-9" />
          </div>
          <div className="d-flex">
            <img
              src={gallery7}
              className="col-6"
              width="100%"
              alt="gallery-7"
            />
            <img
              src={gallery8}
              className="col-6"
              width="100%"
              alt="gallery-8"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
