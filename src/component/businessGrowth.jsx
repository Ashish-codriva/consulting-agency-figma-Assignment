import React from "react";
import {
  BarChart3,
  Code2,
  Smartphone,
} from "lucide-react";

import "./businessGrowth.css";

const features = [
  {
    title: "Active User Analytics",
    description:
      "Class aptent taciti sociosqu litora torquen conubia nostram.",
    icon: BarChart3,
    color: "pink",
  },
  {
    title: "Smart Coding Development",
    description:
      "Morbi eget aliquet finibus, best condimentum aliquet quam.",
    icon: Code2,
    color: "blue",
    active: true,
  },
  {
    title: "User Friendly Interface",
    description:
      "Quisque magna, sollicitudin vitae, lobortis feugiat arcu.",
    icon: Smartphone,
    color: "green",
  },
];

const BusinessGrowth = () => {
  return (
    <section className="business-growth">
      <div className="business-growth__container">

        {/* Heading */}
        <div className="business-growth__header">
          <h2>How To Grow Your Business</h2>

          <p>
            Class aptent taciti sociosqu ad litora torquen conubia nostramase
            <br />
            inceptos himenaeo. Phasellus metus nisi euismod eget lorem.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="business-growth__cards">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                className={`growth-card ${
                  feature.active ? "growth-card--active" : ""
                }`}
                key={index}
              >
                <div className={`growth-card__icon growth-card__icon--${feature.color}`}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="business-growth__footer">
          Approx <strong>875+</strong> team members ready to online support for you
        </div>

      </div>
    </section>
  );
};

export default BusinessGrowth;
