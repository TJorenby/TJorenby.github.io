import React from "react";

//Style Imports
import { useSpring, animated } from "react-spring";

function Contact() {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <animated.div style={trans}>
        <section className="portfolio-head bg-primary py-3">
          <div className="container">
            <h1 className="md">Let's Connect!</h1>
          </div>
        </section>
        <section className="portfolio">
          <div className="container grid grid-3">
            <div className="social">
              <a
                href="https://github.com/TJorenby/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-3x i"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tylerjorenby/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-3x i"></i>
              </a>
              <a
                href="https://www.instagram.com/tjorenby/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-3x i"></i>
              </a>
            </div>
          </div>
        </section>
      </animated.div>
    </>
  );
}

export default Contact;
