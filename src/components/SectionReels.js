import React from 'react'
// Assets
import thumbnail from '../assets/images/image/video-thumbnail.png'

export default function SectionReels() {
  return (
    <main>
      <div className="d-lg-flex">
        <div class="row g-4 gy-lg-0">
          <div className="col-lg-4">
            <img src={thumbnail} width="100%" alt="video-thumbnai" />
          </div>
          <div className="col-lg-4">
            <img src={thumbnail} width="100%" alt="video-thumbnai" />
          </div>
          <div className="col-lg-4">
            <img src={thumbnail} width="100%" alt="video-thumbnai" />
          </div>
        </div>
      </div>
      <div className="d-lg-flex my-4">
        <div class="row g-4 gy-lg-0">
          <div className="col-lg-4">
            <img src={thumbnail} width="100%" alt="video-thumbnai" />
          </div>
          <div className="col-lg-4">
            <img src={thumbnail} width="100%" alt="video-thumbnai" />
          </div>
          <div className="col-lg-4">
            <img src={thumbnail} width="100%" alt="video-thumbnai" />
          </div>
        </div>
      </div>
    </main>
  )
}
