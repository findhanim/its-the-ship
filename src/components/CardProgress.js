import React from 'react'

export default function CardProgress() {
  return (
    <main
      id="cabin-booked"
      className="border border-2 border-muted rounded-4 p-3"
    >
      <div className="d-lg-flex">
        <div className="col-lg-10 text-lg-start text-center">
          <h3>Cabins Booked</h3>
          <p>for Early Spook 2</p>
        </div>
        <div className="col-lg-2 d-flex justify-content-lg-end justify-content-center">
          <h1 className="py-lg-0 py-4">
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
    </main>
  )
}
