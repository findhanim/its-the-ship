import React from 'react'
// Assets
import logoMarlo from '../assets/images/logo/logo-marlo.png'
import logoMikeWilliams from '../assets/images/logo/logo-mike-williams.png'
import logoShowtek from '../assets/images/logo/logo-showtek.png'
import logoUb40 from '../assets/images/logo/logo-ub40.png'
import logoYellowClaw from '../assets/images/logo/logo-yellow-claw.png'

export default function SectionLineups() {
  return (
    <main className="pt-5">
      {/* Desktop View */}
      <div className="d-lg-block d-none">
        {/* Row 1 */}
        <div className="row d-flex align-items-center text-center py-3">
          <div className="col">
            <img src={logoMarlo} height="32px" alt="logo-marlo" />
          </div>
          <div className="col">
            <img src={logoShowtek} height="32px" alt="logo-showtek" />
          </div>
          <div className="col">
            <img src={logoYellowClaw} height="56px" alt="logo-yellow-claw" />
          </div>
          <div className="col">
            <img src={logoUb40} height="32px" alt="logo-ub40" />
          </div>
          <div className="col">
            <img
              src={logoMikeWilliams}
              height="32px"
              alt="logo-mike-williams"
            />
          </div>
        </div>
        {/* Row 2 */}
        <div className="row d-flex align-items-center text-center py-3 mx-5">
          <div className="col">
            <img src={logoShowtek} height="32px" alt="logo-showtek" />
          </div>
          <div className="col">
            <img src={logoYellowClaw} height="56px" alt="logo-yellow-claw" />
          </div>
          <div className="col">
            <img src={logoUb40} height="32px" alt="logo-ub40" />
          </div>
          <div className="col">
            <img
              src={logoMikeWilliams}
              height="32px"
              alt="logo-mike-williams"
            />
          </div>
        </div>
        {/* Row 3 */}
        <div className="row d-flex align-items-center text-center py-3">
          <div className="col">
            <img
              src={logoMikeWilliams}
              height="32px"
              alt="logo-mike-williams"
            />
          </div>
          <div className="col">
            <img src={logoMarlo} height="32px" alt="logo-marlo" />
          </div>
          <div className="col">
            <img src={logoShowtek} height="32px" alt="logo-showtek" />
          </div>
          <div className="col">
            <img src={logoYellowClaw} height="56px" alt="logo-yellow-claw" />
          </div>
          <div className="col">
            <img src={logoUb40} height="32px" alt="logo-ub40" />
          </div>
        </div>
        {/* Row 4 */}
        <div className="row d-flex align-items-center text-center py-3 mx-5">
          <div className="col">
            <img src={logoYellowClaw} height="56px" alt="logo-yellow-claw" />
          </div>
          <div className="col">
            <img src={logoUb40} height="32px" alt="logo-ub40" />
          </div>
          <div className="col">
            <img
              src={logoMikeWilliams}
              height="32px"
              alt="logo-mike-williams"
            />
          </div>
          <div className="col">
            <img src={logoShowtek} height="32px" alt="logo-showtek" />
          </div>
        </div>
        {/* Row 5 */}
        <div className="row d-flex align-items-center text-center py-3 mx-5 px-5">
          <div className="col">
            <img src={logoYellowClaw} height="56px" alt="logo-yellow-claw" />
          </div>
          <div className="col">
            <img src={logoUb40} height="32px" alt="logo-ub40" />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="d-lg-none d-block">
        {/* Row 1 */}
        <div className="row d-flex align-items-center text-center py-3 mx-4">
          <div className="col">
            <img src={logoMarlo} height="20px" alt="logo-marlo" />
          </div>
          <div className="col">
            <img src={logoShowtek} height="20px" alt="logo-showtek" />
          </div>
          <div className="col">
            <img src={logoYellowClaw} height="35px" alt="logo-yellow-claw" />
          </div>
        </div>
        {/* Row 2 */}
        <div className="row d-flex align-items-center text-center py-3">
          <div className="col">
            <img src={logoUb40} height="20px" alt="logo-ub40" />
          </div>
          <div className="col">
            <img
              src={logoMikeWilliams}
              height="20px"
              alt="logo-mike-williams"
            />
          </div>
          <div className="col">
            <img src={logoShowtek} height="20px" alt="logo-showtek" />
          </div>
        </div>
        {/* Row 3 */}
        <div className="row d-flex align-items-center text-center py-3 mx-5">
          <div className="col">
            <img src={logoShowtek} height="20px" alt="logo-showtek" />
          </div>
          <div className="col">
            <img src={logoYellowClaw} height="35px" alt="logo-yellow-claw" />
          </div>
          <div className="col">
            <img src={logoUb40} height="20px" alt="logo-ub40" />
          </div>
        </div>
        {/* Row 4 */}
        <div className="row d-flex align-items-center text-center py-3">
          <div className="col">
            <img
              src={logoMikeWilliams}
              height="20px"
              alt="logo-mike-williams"
            />
          </div>
          <div className="col">
            <img src={logoMarlo} height="20px" alt="logo-marlo" />
          </div>
          <div className="col">
            <img src={logoShowtek} height="20px" alt="logo-showtek" />
          </div>
        </div>
        {/* Row 5 */}
        <div className="row d-flex align-items-center text-center py-3 mx-5">
          <div className="col">
            <img src={logoYellowClaw} height="35px" alt="logo-yellow-claw" />
          </div>
          <div className="col">
            <img src={logoUb40} height="20px" alt="logo-ub40" />
          </div>
        </div>
      </div>
    </main>
  )
}
