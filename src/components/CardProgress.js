import React from 'react'

export default function CardProgress() {
  return (
    <div
      id="cabin-booked"
      className="col-lg-5 border border-2 border-white rounded-4 p-3"
    >
      <div className=" d-flex">
        <div className="col-10">
          <h3>Cabins Booked</h3>
          <p>for Early Spook 2</p>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <h1>
            69<sup>%</sup>
          </h1>
        </div>
      </div>
      <div class="progress bg-dark mt-2">
        <div
          class="progress-bar bg-danger w-75"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  )
}
