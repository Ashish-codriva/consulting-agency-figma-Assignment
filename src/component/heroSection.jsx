import "./heroSection.css";
import eventImage1 from "../assets/event.png";
import eventImage2 from "../assets/event-1.png";
import eventImage3 from "../assets/event-3.png";





export default function HeroSection() {
    return (
        <section className="hero-section">

            {/* Hero Content */}
            <div className="hero-content">

                <h1 className="hero-title">
                    <span>Smart</span>-Thinking &<br />
                    Innovative Solution.
                </h1>

                <p className="hero-description">
                    Class aptent taciti sociosqu ad litora torquent conubia nostra
                    inceptos himenaeos. Donec tristique nibh ipsum dignissim.
                </p>

                {/* Buttons */}
                <div className="hero-buttons">
                    <button className="btn btn-primary">
                        Discover More
                    </button>

                    <button className="btn btn-secondary">
                        Explore Service
                        <span>→</span>
                    </button>
                </div>

                {/* Benefits */}
                <div className="benefits">
                    <span>
                        <b>✓</b> Get 15 days free trial
                    </span>

                    <span>
                        <b>✓</b> No credit card is required
                    </span>

                    <span>
                        <b>✓</b> Cancel anytime
                    </span>
                </div>
            </div>

            {/* Events */}
            <div className="events-container">

                <div className="event-card">
                    <img src={eventImage1} alt="event image" className="event-image" />

                    <div className="event-info">
                        <span>Greatest Digital Conference-2023</span>
                        <span className="event-arrow">→</span>
                    </div>
                </div>
                <div className="event-card">
                    <img src={eventImage2} alt="event image" className="event-image" />

                    <div className="event-info">
                        <span>June 15-30, New York-USA</span>
                        <span className="event-arrow">→</span>
                    </div>
                </div>
                <div className="event-card">
                    <img src={eventImage3} alt="event image" className="event-image" />

                    <div className="event-info">
                        <span>Lead Speaker Amenia Fwalt</span>
                        <span className="event-arrow">→</span>
                    </div>
                </div>

            </div>

            {/* Partner Logos */}
            <div className="partners">
                <div className="partner">
                    ◇ <span>VIO EMPOWER</span>
                </div>

                <div className="partner">
                    ▤ <span>B-TECHNET</span>
                </div>

                <div className="partner">
                    ◉ <span>THIRD VISION</span>
                </div>

                <div className="partner">
                    ✳ <span>Zenetics</span>
                </div>
            </div>

        </section>
    );
}