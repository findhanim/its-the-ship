import * as React from 'react'
import { Button } from 'react-bootstrap'
// Components
import CardProgress from '../components/CardProgress'
import CardInfo from '../components/CardInfo'
import Navigation from '../components/Navigation'
import Tabs from '../components/Tabs'
// Assets
import headerIts from '../assets/images/png/header-its.png'
import headerCollage from '../assets/images/png/header-collage.png'
import headerPhotoburn from '../assets/images/png/header-photoburn.png'
import headlinersTitle from '../assets/images/image/headliners-title.png'
import headlinersFrame from '../assets/images/png/headliners-frame.png'
import thumbnail from '../assets/images/image/thumbnail-dummy.png'
import dividerDrip from '../assets/images/png/divider-drip.png'
import LogoGroup from '../components/LogoGroup'

const IndexPage = () => {
  return (
    <main>
      <div className="container-fluid bg-header">
        <Navigation></Navigation>

        <div className="container py-5">
          {/* Header */}
          <header className="d-lg-flex align-items-center pt-5">
            <div className="col-lg-5 d-flex justify-content-lg-start justify-content-center">
              <img src={headerIts} height="297px" alt="header-its" />
            </div>
            <div className="col-lg-7 text-center">
              <p className="t1 mt-lg-0 mt-5">Deeper, Darker, Dirtier</p>
              <h2>
                Asia's largest festival at sea returns with our spookiest
                edition.
              </h2>
              <div className="d-flex justify-content-center">
                <p className="t3 red-tag mb-4">Singapore | 1-3 Nov 2023</p>
              </div>
              <Button>Book A Cabin</Button>
            </div>
          </header>
          {/* Introduction */}
          <div className="header-web"></div>
          <section className="intro-section d-lg-flex pb-5">
            <div className="header-collage col-lg-4">
              <img src={headerCollage} height="500px" alt="header-collage" />
            </div>
            <div className="col-lg-4">
              <p className="t3">It's NOT JUST A PARTY</p>
              <h1>IT'S THE SHIP, WELCOME HOME BABY</h1>
              <p className="py-2">
                Ahoy Shipmates! IT'S THE SHIP is Asia's Largest Festival at Sea,
                bringing you a batship festival shipcation experience unlike any
                other. Hop aboard our haunted vessel, The Genting Dream, for the
                most hair-raising 3D2N Halloween festival at sea. Expect a
                spooktastic adventure this November with round the clock DJ
                Sets, Theme Parties, Side Activities and many more.
              </p>
              <Button>Book A Cabin</Button>
            </div>
            <div className="col-lg-4">
              <img
                src={headerPhotoburn}
                height="461px"
                alt="header-photoburn"
              />
            </div>
          </section>
          {/* Headliners */}
          <section className="py-5">
            <div className="d-flex justify-content-center">
              <img
                src={headlinersTitle}
                height="245px"
                alt="headliners-title"
              />
            </div>
            <div className="d-flex justify-content-center pt-5">
              <img
                src={headlinersFrame}
                height="468px"
                alt="headliners-title"
              />
            </div>
            <p className="t2 text-center">With many more to be announced</p>
          </section>
          {/* What To Expect */}
          <section className="py-5">
            <div className="d-lg-flex justify-content-between align-items-center text-danger">
              <h2>What to expect on board</h2>
              <Button>Book A Cabin</Button>
            </div>
            {/* Tabs */}
            <Tabs></Tabs>
          </section>
          {/* Previous Reels */}
          <section className="py-5">
            <h3 className="d-lg-flex justify-content-center pb-5">
              I KNOW WHAT YOU DID LAST SAILINGS…
            </h3>
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
            <div className="d-lg-flex justify-content-center">
              <Button>Book A Cabin</Button>
            </div>
          </section>
          {/* Cabins */}
          <section>
            <div className="d-lg-flex col-lg-12 my-4 align-items-center">
              {/* Description */}
              <div className="col-lg-6">
                <h1>Cabins</h1>
                <p>
                  Home away from home, your cabin is your entry ticket into IT'S
                  THE SHIP's erie adventure on the high seas for a hauntingly
                  good time! Your cabin bookings includes access to your
                  accommodation, DJ Sets, Theme Parties, Side Activities and
                  round the clock dining.
                </p>
              </div>
              {/* Availibility */}
              <div className="col-lg-12 offset-lg-1">
                <CardProgress></CardProgress>
              </div>
            </div>
            {/* Selections */}
            <div className="d-lg-flex">
              <CardInfo></CardInfo>
              <CardInfo></CardInfo>
              <CardInfo></CardInfo>
            </div>
            <div className="d-flex justify-content-center my-4">
              <Button>View All Cabins</Button>
            </div>
          </section>
        </div>
        {/* Past Lineups */}
        <section className="bg-red d-lg-flex justify-content-center align-items-center py-5">
          <div className="container col-lg-10 row">
            <h2 className="mt-4 text-center">Past Lineups</h2>
            <LogoGroup></LogoGroup>
          </div>
        </section>
        <img src={dividerDrip} width="100%" alt="divider-drip" />
      </div>
    </main>
  )
}

export default IndexPage
export const Head = () => <title>It's The Ship</title>
