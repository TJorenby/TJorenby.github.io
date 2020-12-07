import React from "react";
import { Link } from "react-router-dom";

//Image Imports
import headshot from "./AboutMeImages/headshot-nov2020-resize.jpg";

//Style Imports
import { useSpring, animated } from "react-spring";

function AboutMe() {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <animated.div style={trans}>
        <section className="showcase">
          <div className="container grid">
            <div className="showcase-text">
              <h2>Hi, Everyone!</h2>
              <p>
                I'm a professional musician and customer experience leader
                turned software engineer with a passion for leveraging
                technology to do what I love most; creating memorable
                experiences and solving problems.
              </p>
              <p>
                HTML | CSS | JavaScript | jQuery | React | Node.js | Express |
                Redux | PostgreSQL | Github
              </p>
              <Link className="link btn btn-outline" to="/portfolio">
                My Work
              </Link>
            </div>

            <div className="about-headshot card">
              <img src={headshot} alt="headshot" />
            </div>
          </div>
        </section>
      </animated.div>
    </>
  );
}

export default AboutMe;
