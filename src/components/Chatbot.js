import React from 'react'
// Assets
import whatsapp from '../assets/images/png/icon-whatsapp.png'

export default function Chatbot() {
  return (
    <main className="d-lg-flex justify-content-end fixed-bottom">
      <section className="p-3">
        <img src={whatsapp} height="56px" alt="whatsapp-logo" />
      </section>
    </main>
  )
}
