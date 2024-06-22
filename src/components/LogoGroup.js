import React from 'react'
import logoMarlo from '../assets/images/logo/logo-marlo.png'
import logoMikeWilliams from '../assets/images/logo/logo-mike-williams.png'
import logoShowtek from '../assets/images/logo/logo-showtek.png'
import logoUb40 from '../assets/images/logo/logo-ub40.png'
import logoYellowClaw from '../assets/images/logo/logo-yellow-claw.png'

export default function LogoGroup() {
  return (
    <main className="pt-5">
      <div className="d-lg-flex justify-content-between align-items-center py-3">
        <img src={logoMarlo} height="32px" alt="logo-marlo" />
        <img src={logoShowtek} height="32px" alt="logo-showtek" />
        <img src={logoYellowClaw} height="56px" alt="logo-yellow-claw" />
        <img src={logoUb40} height="32px" alt="logo-ub40" />
        <img src={logoMikeWilliams} height="32px" alt="logo-mike-williams" />
      </div>
      <div className="col-lg-10 d-lg-flex justify-content-between align-items-center py-3">
        <img src={logoShowtek} height="32px" alt="logo-showtek" />
        <img src={logoYellowClaw} height="56px" alt="logo-yellow-claw" />
        <img src={logoUb40} height="32px" alt="logo-ub40" />
        <img src={logoMikeWilliams} height="32px" alt="logo-mike-williams" />
      </div>
      <div className="d-lg-flex justify-content-between align-items-center py-3">
        <img src={logoMarlo} height="32px" alt="logo-marlo" />
        <img src={logoMarlo} height="32px" alt="logo-marlo" />
        <img src={logoShowtek} height="32px" alt="logo-showtek" />
        <img src={logoYellowClaw} height="56px" alt="logo-yellow-claw" />
        <img src={logoUb40} height="32px" alt="logo-ub40" />
      </div>
      <div className="col-lg-10 d-lg-flex justify-content-between align-items-center py-3">
        <img src={logoMikeWilliams} height="32px" alt="logo-mike-williams" />
        <img src={logoShowtek} height="32px" alt="logo-showtek" />
        <img src={logoYellowClaw} height="56px" alt="logo-yellow-claw" />
        <img src={logoUb40} height="32px" alt="logo-ub40" />
      </div>
      <div className="d-lg-flex justify-content-between align-items-center py-3">
        <img src={logoMikeWilliams} height="32px" alt="logo-mike-williams" />
        <img src={logoMarlo} height="32px" alt="logo-marlo" />
        <img src={logoMarlo} height="32px" alt="logo-marlo" />
        <img src={logoShowtek} height="32px" alt="logo-showtek" />
      </div>
      <div className="d-lg-flex justify-content-between align-items-center py-3">
        <img src={logoYellowClaw} height="56px" alt="logo-yellow-claw" />
        <img src={logoUb40} height="32px" alt="logo-ub40" />
        <img src={logoMikeWilliams} height="32px" alt="logo-mike-williams" />
        <img src={logoShowtek} height="32px" alt="logo-showtek" />
        <img src={logoYellowClaw} height="56px" alt="logo-yellow-claw" />
      </div>
      <div className="col-lg-4 d-lg-flex justify-content-between align-items-center py-3">
        <img src={logoUb40} height="32px" alt="logo-ub40" />
        <img src={logoMikeWilliams} height="32px" alt="logo-mike-williams" />
      </div>
    </main>
  )
}
