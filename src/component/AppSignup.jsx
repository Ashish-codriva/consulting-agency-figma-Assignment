import React from "react";
import "./AppSignup.css";

const AppSignup = () => {
  return (
    <section className="app-signup">
      <div className="signup-content">
        <h2>
          Ready To Use Our App With No
          <br />
          Hidden Malware
        </h2>

        <p>
          Etiam euismod volutpat lacus fringilla hendrerit. Mauris lobortis purus
          <br />
          velit quis. Nunc mollis venenatis metus nec aliquet.
        </p>

        <form className="signup-form">
          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            Try Free
          </button>
        </form>

        <div className="signin-text">
          Already a member? <a href="#">Sign In</a>
        </div>
      </div>
    </section>
  );
};

export default AppSignup;