import { useState } from "react";
import "./performanceSection.css";
import performanceImage from "../assets/performance-team.png";

const features = [
  {
    title: "Custom Edit Tool Application",
    description:
      "Create powerful editing experiences with flexible tools designed around your workflow.",
  },
  {
    title: "Built In Safety Chat Mode Enabled",
    description:
      "Keep communication protected with an intuitive and secure chat experience.",
  },
  {
    title: "Foster Trust Builds System Always Open",
    description:
      "Build stronger relationships with a system that keeps your team connected.",
  },
  {
    title: "Create Auto Layouts In App Interface",
    description:
      "Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.",
  },
];

function PerformanceSection() {
  const [activeItem, setActiveItem] = useState(3);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section className="performance-section">
      {/* Decorative background */}
      <div className="performance-glow performance-glow-one"></div>
      <div className="performance-glow performance-glow-two"></div>

      <div className="performance-container">

        {/* ================= HEADER ================= */}

        <div className="performance-header">

          <div className="performance-title-shape"></div>

          <div className="performance-eyebrow">
            <span></span>
            SMART TECHNOLOGY
            <span></span>
          </div>

          <h2>
            Performance Is The Key To Most People
            <br />
            <strong>Achieving A Better Future</strong>
          </h2>

          <p>
            Etiam euismod odio euismod lacus fringilla hendrer.
          </p>

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="performance-content">

          {/* ================= LEFT SIDE ================= */}

          <div className="performance-list">

            {features.map((feature, index) => {
              const isActive = activeItem === index;

              return (
                <div
                  key={feature.title}
                  className={`performance-item ${
                    isActive ? "performance-item-active" : ""
                  }`}
                  onClick={() => toggleItem(index)}
                >

                  <div className="performance-item-header">

                    <div className="performance-item-number">
                      0{index + 1}
                    </div>

                    <h3>{feature.title}</h3>

                    <button
                      type="button"
                      className={`performance-toggle ${
                        isActive ? "performance-toggle-active" : ""
                      }`}
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleItem(index);
                      }}
                    >
                      <span></span>
                      <span></span>
                    </button>

                  </div>

                  <div
                    className={`performance-description-wrapper ${
                      isActive ? "description-open" : ""
                    }`}
                  >
                    <p className="performance-description">
                      {feature.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="performance-visual">

            {/* Image glow */}
            <div className="image-glow"></div>

            {/* Image */}
            <div className="performance-image-wrapper">

              <div className="image-top-line"></div>

              <img
                src={performanceImage}
                alt="Team meeting"
                className="performance-image"
              />

              <div className="image-overlay"></div>

            </div>

            {/* 27% floating card */}
            <div className="performance-stat-card">

              <div className="stat-top">
                <span>PRODUCTIVITY</span>

                <div className="stat-dot"></div>
              </div>

              <div className="stat-number">
                27<span>%</span>
              </div>

              <p>
                Productivity
                <br />
                increase on
                <br />
                average
              </p>

              <div className="stat-line">
                <span></span>
              </div>

            </div>

            {/* Decorative dots */}
            <div className="visual-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PerformanceSection;
