import React from "react";
import "./securityProtection.css";

const SecurityProtection = () => {
  return (
    <section className="security-section">
      <div className="security-container">

        {/* Left Content */}
        <div className="security-content">
          <h2>
            Better Security To Better Protection
            <br />
            An Experience Of Strength.
          </h2>

          <p className="security-description">
            Class aptent taciti sociosqu ad litora torquent conubia nostra
            inceptos himenaeos. Donec tristique nibh ipsum dignissim.
          </p>

          <div className="security-divider"></div>

          {/* Feature 1 */}
          <div className="security-feature">
            <div className="feature-icon feature-icon--green"></div>

            <div>
              <h3>Well Organised User Interface</h3>
              <p>
                Etiam id euismod odio. Ut euismod sem a lacus fringilla.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="security-feature">
            <div className="feature-icon feature-icon--pink"></div>

            <div>
              <h3>Completely Bug Free</h3>
              <p>
                Cras eleifend leo ac varius tristique suspendisse.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Credit Cards */}
        <div className="security-visual">

          <div className="card-circle"></div>

          {/* Black Card */}
          <div className="credit-card credit-card--black">
            <div className="card-top">
              <span className="visa">VISA</span>
              <span className="card-brand">MISLAND</span>
            </div>

            <div className="chip"></div>

            <div className="card-number">
              6 2 1 9 &nbsp;&nbsp; 8 6 1 0
            </div>

            <div className="card-bottom">
              <span>S. MOSTAFA ESMAEILI</span>
              <span>•••</span>
            </div>
          </div>

          {/* Blue Card */}
          <div className="credit-card credit-card--blue">
            <div className="card-top">
              <span className="wifi">⌁</span>
              <span className="card-brand">MISLAND</span>
            </div>

            <div className="chip"></div>

            <div className="card-number">
              6 2 1 9&nbsp;&nbsp;&nbsp; 8 6 1 0&nbsp;&nbsp;&nbsp;
              2 8 8 8&nbsp;&nbsp;&nbsp; 8 0 7 5
            </div>

            <div className="card-bottom">
              <span>D3 . ANDERSON&nbsp; / 22/01</span>

              <span className="card-circles">
                <i></i>
                <i></i>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SecurityProtection;
