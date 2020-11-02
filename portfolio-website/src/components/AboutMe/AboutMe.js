import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function AboutMe() {
  return (
    <>
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h2>Hi, Everyone!</h2>
            <p>
              I'm a professional musician and customer experience leader turned
              software engineer with a passion for leveraging technology to do
              what I love most; creating world-class experiences and solving
              problems.
            </p>
            <Link className="link btn btn-outline" to="/features">
              Read More
            </Link>
          </div>

          <div className="about-headshot card">
            <img src="./images/headshot-nov2020-resize.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
