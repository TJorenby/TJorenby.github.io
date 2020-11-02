import React from "react";

function Portfolio() {
  return (
    <>
      <section className="portfolio-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Projects</h1>
            <p className="lead">
              Check out the features of Loruki that separate us from the
              competition
            </p>
          </div>
          <img src="images/server.png" alt="" />
        </div>
      </section>

      {/* Sub Head */}

      {/* <section class="features-sub-head bg-light py-3">
        <div class="container grid">
          <div>
            <h1 class="md">The Loruki Platform</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui,
              consectetur ea consequatur, doloribus repellendus quasi, aut
              corporis nam alias culpa. Nostrum, inventore accusantium!
            </p>
          </div>
          <img src="images/server2.png" alt="" />
        </div>
      </section> */}

      {/* Features Main */}
      <section className="portfolio-main my-2">
        <div className="container grid">
          <div className="card">
            <p>Feedback Survey</p>
            <img src="./images/Feedback-loop.png" alt="" />
            <p>React | Node.js | Express | Redux | PostgreSQL</p>
            <p>
              A feedback form that allows users to answer questions in the form
              of "star" ratings as well as comments. In order to progress to the
              next question, a rating must be confirmed. Users can also return
              back to previous questions if they wish to change their ratings.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
