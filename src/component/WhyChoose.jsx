import React from "react";
import "./WhyChoose.css";

const features = [
  {
    icon: "💡",
    title: "Creative Ideas",
    description: "Class aptent taciti sociq u litoria torquen conub.",
    className: "feature-top",
  },
  {
    icon: "◉",
    title: "Awesome Design",
    description: "Integer a elit pellentesque semper sem ultricies.",
    className: "feature-right-top",
  },
  {
    icon: "▣",
    title: "Best Features",
    description: "Fusce risus lorem pulvinar a eu posuere vitae.",
    className: "feature-bottom",
  },
  {
    icon: "▤",
    title: "Easy Solutions",
    description: "Aenean eget nulla eu dui malesuada convallis vel.",
    className: "feature-right-bottom",
  },
];

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-container">

        {/* Left Content */}
        <div className="why-content">
          <h2>
            Why Will You Choose
            <br />
            Our Application
          </h2>

          <p>
            Class aptent taciti sociosqu ad litora torquen conubia
            nostramase<br />
            inceptos himenaeo. Phasellus metus nisl euismod eget lorem.
          </p>

          <div className="members">
            <div className="member-images">
              <div className="member member-1">👨🏻</div>
              <div className="member member-2">👩🏻</div>
              <div className="member member-3">👨🏻</div>
              <div className="member member-4">👩🏻</div>
            </div>

            <div className="member-info">
              <strong>5M+</strong>
              <span>Active Members</span>
            </div>
          </div>
        </div>

        {/* Right Features */}
        <div className="features">

          {features.map((feature, index) => (
            <div
              className={`feature-card ${feature.className}`}
              key={index}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;