import * as React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
// Components
import CabinBooked from "../components/CabinBooked";
import CabinInfo from "../components/CabinInfo";
import Navigation from "../components/NavBar";

const IndexPage = () => {
  return (
    <main>
      <header className="container-fluid bg-header">
        <Navigation></Navigation>
        {/* Header */}
        <div className="container-lg">
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
      </header>
    </main>
  );
};

export default IndexPage;
export const Head = () => <title>It's The Ship</title>;
