import React from 'react'
// Assets
import thumbnail from '../assets/images/image/thumbnail-dummy.png'

export default function SectionReels() {
  return (
    <main>
      <div className="d-lg-flex">
        <div class="row gx-4">
          <div className="col-lg-4">
            <img src={thumbnail} width="100%" alt="header-its" />
          </div>
          <div className="col-lg-4">
            <img src={thumbnail} width="100%" alt="header-its" />
          </div>
          <div className="col-lg-4">
            <img src={thumbnail} width="100%" alt="header-its" />
          </div>
        </div>
      </div>
      <div className="d-lg-flex my-4">
        <div class="row gx-4">
          <div className="col-lg-4">
            <img src={thumbnail} width="100%" alt="header-its" />
          </div>
          <div className="col-lg-4">
            <img src={thumbnail} width="100%" alt="header-its" />
          </div>
          <div className="col-lg-4">
            <img src={thumbnail} width="100%" alt="header-its" />
          </div>
        </div>
      </div>
    </main>
  )
}
