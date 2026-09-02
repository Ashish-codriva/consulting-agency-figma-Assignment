import React from "react";
import "./Testimonials.css";
import feedback1 from '../assets/feedback1.png';
import feedback2 from '../assets/feedback2.png';
import feedback3 from '../assets/feedback3.png';

const testimonials = [
  {
    name: "Mila McSabbu",
    role: "Freelance Designer",
    image: feedback1,
    text: "We test and compare the best project management software for collaborating with a team, hitting deadlines.",
  },
  {
    name: "Robert Fox",
    role: "UI/UX Designer",
    image: feedback2,
    text: "Project management skimping on core features. It's strong at enabling with collaboration on visual materials.",
  },
  {
    name: "Jenny Wilson",
    role: "Web Developer",
    image: feedback3,
    text: "Project to be a team's best option for project management, but when all the stars align, it's a powerful tool.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>What People Say</h2>

        <p>
          Quisque fermentum porta tincidunt. Interdum semper.
          <br />
          Pellentesque facilisis augue mollis suscipit.
        </p>

        <div className="testimonial-arrows">
          <button className="arrow-btn">←</button>
          <button className="arrow-btn active">→</button>
        </div>
      </div>

      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            className={`testimonial-card ${
              index === 2 ? "highlighted" : ""
            }`}
            key={testimonial.name}
          >
            <div className="user-info">
              <img src={testimonial.image} alt={testimonial.name} />

              <div>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            </div>

            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;