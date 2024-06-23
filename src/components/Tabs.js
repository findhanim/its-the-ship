import React from 'react'
// Assets
import entBar from '../assets/images/png/entertainment-bar.png'
import entBeauty from '../assets/images/png/entertainment-beauty.png'
import entDining from '../assets/images/png/entertainment-dining.png'
import entShopping from '../assets/images/png/entertainment-shopping.png'
import entSkull from '../assets/images/png/entertainment-skull.png'
import entSport from '../assets/images/png/entertainment-sport.png'
import TabContent from './TabContent'

export default function Tabs() {
  return (
    <main>
      <div class="border-beige-tabs d-lg-flex align-items-start p-3 ps-5">
        {/* Tabs Navigation */}
        <div
          class="nav nav-pills flex-column align-items-start me-3 col-lg-3 mt-lg-5"
          id="fun-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {/* Entertainment */}
          <button
            class="nav-link active"
            id="fun-entertainment-tab"
            data-bs-toggle="pill"
            data-bs-target="#fun-entertainment"
            type="button"
            role="tab"
            aria-controls="fun-entertainment"
            aria-selected="true"
          >
            <img
              src={entSkull}
              className="me-2"
              height="25px"
              alt="ent-skull"
            />
            Entertainment
          </button>
          {/* Dining */}
          <button
            class="nav-link"
            id="fun-dining-tab"
            data-bs-toggle="pill"
            data-bs-target="#fun-dining"
            type="button"
            role="tab"
            aria-controls="fun-dining"
            aria-selected="false"
          >
            <img
              src={entDining}
              className="me-2"
              height="25px"
              alt="ent-skull"
            />
            Dining
          </button>
          {/* Bars & Lounge */}
          <button
            class="nav-link"
            id="fun-bars-tab"
            data-bs-toggle="pill"
            data-bs-target="#fun-bars"
            type="button"
            role="tab"
            aria-controls="fun-bars"
            aria-selected="false"
          >
            <img src={entBar} className="me-2" height="25px" alt="ent-skull" />
            Bars & Lounge
          </button>
          {/* Shopping */}
          <button
            class="nav-link"
            id="fun-shopping-tab"
            data-bs-toggle="pill"
            data-bs-target="#fun-shopping"
            type="button"
            role="tab"
            aria-controls="fun-shopping"
            aria-selected="false"
          >
            <img
              src={entShopping}
              className="me-2"
              height="25px"
              alt="ent-skull"
            />
            Shopping
          </button>
          {/* Beauty & Wellness */}
          <button
            class="nav-link"
            id="fun-beauty-tab"
            data-bs-toggle="pill"
            data-bs-target="#fun-beauty"
            type="button"
            role="tab"
            aria-controls="fun-beauty"
            aria-selected="false"
          >
            <img
              src={entBeauty}
              className="me-2"
              height="25px"
              alt="ent-skull"
            />
            Beauty & Wellness
          </button>
          {/* Sports & Rec */}
          <button
            class="nav-link"
            id="fun-sport-tab"
            data-bs-toggle="pill"
            data-bs-target="#fun-sport"
            type="button"
            role="tab"
            aria-controls="fun-sport"
            aria-selected="false"
          >
            <img
              src={entSport}
              className="me-2"
              height="25px"
              alt="ent-skull"
            />
            Sports & Recreaction
          </button>
        </div>
        {/* Tabs Content */}
        <div
          class="border-beige-content tab-content p-lg-5 me-5"
          id="fun-tabContent"
        >
          {/* Entertainment */}
          <div
            class="tab-pane fade show active"
            id="fun-entertainment"
            role="tabpanel"
            aria-labelledby="fun-entertainment-tab"
          >
            <TabContent></TabContent>
          </div>
          {/* Dining */}
          <div
            class="tab-pane fade"
            id="fun-dining"
            role="tabpanel"
            aria-labelledby="fun-dining-tab"
          >
            <TabContent></TabContent>
          </div>
          {/* Bars & Lounge */}
          <div
            class="tab-pane fade"
            id="fun-bars"
            role="tabpanel"
            aria-labelledby="fun-bars-tab"
          >
            <TabContent></TabContent>
          </div>
          {/* Shopping */}
          <div
            class="tab-pane fade"
            id="fun-shopping"
            role="tabpanel"
            aria-labelledby="fun-shopping-tab"
          >
            <TabContent></TabContent>
          </div>
          {/* Beauty & Wellness */}
          <div
            class="tab-pane fade"
            id="fun-beauty"
            role="tabpanel"
            aria-labelledby="fun-beauty-tab"
          >
            <TabContent></TabContent>
          </div>
          {/* Sports & Rec */}
          <div
            class="tab-pane fade"
            id="fun-sport"
            role="tabpanel"
            aria-labelledby="fun-sport-tab"
          >
            <TabContent></TabContent>
          </div>
        </div>
      </div>
    </main>
  )
}
