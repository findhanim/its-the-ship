import * as React from 'react'
import { Button } from 'react-bootstrap'
// Components
import CabinBooked from '../components/CabinBooked'
import CabinInfo from '../components/CabinInfo'
import Navigation from '../components/Navigation'
// Assets
import headerIts from '../assets/images/png/header-its.png'
import headerCollage from '../assets/images/png/header-collage.png'
import headerPhotoburn from '../assets/images/png/header-photoburn.png'
import headlinersTitle from '../assets/images/image/headliners-title.png'
import headlinersFrame from '../assets/images/png/headliners-frame.png'
import thumbnail from '../assets/images/image/thumbnail-dummy.png'
import dividerDrip from '../assets/images/png/divider-drip.png'

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
            <div class="d-flex align-items-start">
              <div
                class="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Entertainment
                </button>
                <button
                  class="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Profile
                </button>
                <button
                  class="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Messages
                </button>
                <button
                  class="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  Settings
                </button>
              </div>
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
              </div>
            </div>
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
                <CabinBooked></CabinBooked>
              </div>
            </div>
            {/* Selections */}
            <div className="d-lg-flex">
              <CabinInfo></CabinInfo>
              <CabinInfo></CabinInfo>
              <CabinInfo></CabinInfo>
            </div>
            <div className="d-flex justify-content-center my-4">
              <Button>View All Cabins</Button>
            </div>
          </section>
        </div>
        {/* Past Lineups */}
        <section className="bg-red d-lg-flex justify-content-center py-5">
          <h2 className="mt-4">Past Lineups</h2>
        </section>
        <img src={dividerDrip} width="100%" alt="divider-drip" />
      </div>
    </main>
  )
}

export default IndexPage
export const Head = () => <title>It's The Ship</title>
