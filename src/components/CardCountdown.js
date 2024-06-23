import React from 'react'

export default function CardCountdown() {
  return (
    <main className="card-countdown border border-2 border-danger rounded-4 p-3 pb-2">
      <div className="d-flex align-items-center">
        <div className="col-4 text-center">
          <h1>68</h1>
          <p className="t3 text-danger">days</p>
        </div>
        <div class="vr my-4"></div>
        <div className="col-4 text-center">
          <h1>1</h1>
          <p className="t3 text-danger">hours</p>
        </div>
        <div class="vr my-4"></div>
        <div className="col-4 text-center">
          <h1>20</h1>
          <p className="t3 text-danger">minutes</p>
        </div>
      </div>
    </main>
  )
}
