import React from "react";
import "./GrowthSection.css";
import growthImage from "../assets/growth.png";

const GrowthSection = () => {
  const stats = [
    {
      value: "142",
      label: "New Features",
    },
    {
      value: "28k",
      label: "APP Download",
    },
    {
      value: "53M",
      label: "Active Users",
    },
    {
      value: "90%",
      label: "Positive Rate",
    },
  ];

  return (
    <section className="growth-section">
      <div className="growth-container">

        {/* Heading */}
        <div className="growth-heading">
          <h2>
            <span className="heading-highlight">We</span>
            Help To Grow Your Business
          </h2>

          <p>
            Quisque fermentum porta tincidunt. Interdum semper. Pellentesque
            <br />
            facilisis augue dolor mollis suscipit erat libero fermentum.
          </p>
        </div>

        {/* Statistics */}
        <div className="growth-stats">
          {stats.map((stat, index) => (
            <div className="growth-stat" key={index}>
              <h3>{stat.value}</h3>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Dashboard Image */}
        <div className="dashboard-wrapper">
          <img
            src={growthImage}
            alt="Business Dashboard"
            className="dashboard-image"
          />
        </div>

      </div>
    </section>
  );
};

export default GrowthSection;