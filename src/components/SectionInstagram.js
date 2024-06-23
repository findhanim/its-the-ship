import React from 'react'
// Assets
import ig1 from '../assets/images/image/ig-1.png'
import ig2 from '../assets/images/image/ig-2.png'
import ig3 from '../assets/images/image/ig-3.png'
import ig4 from '../assets/images/image/ig-4.png'
import ig5 from '../assets/images/image/ig-5.png'
import ig6 from '../assets/images/image/ig-6.png'

export default function SectionInstagram() {
  return (
    <main>
      <section className="row g-lg-4 g-3">
        <img className="col-lg-4 col-6" src={ig1} width="100%" alt="ig-1" />
        <img className="col-lg-4 col-6" src={ig2} width="100%" alt="ig-2" />
        <img className="col-lg-4 col-6" src={ig3} width="100%" alt="ig-3" />

        <img className="col-lg-4 col-6" src={ig4} width="100%" alt="ig-4" />
        <img className="col-lg-4 col-6" src={ig5} width="100%" alt="ig-5" />
        <img className="col-lg-4 col-6" src={ig6} width="100%" alt="ig-6" />
      </section>
    </main>
  )
}
