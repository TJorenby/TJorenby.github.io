import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
      <section className="portfolio-head bg-primary py-3">
        <div className="container">
          <h1 className="md">Projects</h1>
        </div>
      </section>

      {/* Features Main */}
      <section className="portfolio-main">
        <div className="container grid">
          <div className="card">
            <p className="lead">myToday</p>
            <img src="./images/myToday-app.png" alt="" />
            <p>React | Node.js | Express | Redux | PostgreSQL</p>
            <p className="sm">
              A styled-for-mobile app designed to allow users to take photos via
              their webcam or upload them from their computer, provide a
              caption, and store them in a date-sorted archive.
            </p>
            <a
              href="https://github.com/TJorenby/prime-solo-project-mytoday"
              target="_blank"
            >
              <i className="fab fa-github fa-2x my-2"></i>
            </a>
          </div>

          <div className="card">
            <p className="lead">Feedback Survey</p>
            <img src="./images/Feedback-loop.png" alt="" />
            <p>React | Node.js | Express | Redux | PostgreSQL</p>
            <p className="sm">
              A feedback form that allows users to answer questions in the form
              of "star" ratings as well as comments.
            </p>
            <a
              href="https://github.com/TJorenby/redux-feedback-loop"
              target="_blank"
            >
              <i className="fab fa-github fa-2x my-3"></i>
            </a>
          </div>

          <div className="card">
            <p className="lead">Image Gallery</p>
            <img src="./images/image-gallery.png" alt="" />
            <p>React | Node.js | Express | PostgreSQL</p>
            <p className="sm">
              A feedback form that allows users to answer questions in the form
              of "star" ratings as well as comments.
            </p>
            <a
              href="https://github.com/TJorenby/redux-feedback-loop"
              target="_blank"
            >
              <i className="fab fa-github fa-2x my-2"></i>
            </a>
          </div>

          <div className="card">
            <p className="lead">Movie Carousel</p>
            <img src="./images/movie-carousel.png" alt="" />
            <p>React | Node.js | Express | Redux | PostgreSQL</p>
            <p className="sm">
              A movie library that allows users to browse titles, learn more
              about each title, and upload new titles to a database.
            </p>
            <a href="https://github.com/TJorenby/movie-sagas" target="_blank">
              <i className="fab fa-github fa-2x my-3"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
