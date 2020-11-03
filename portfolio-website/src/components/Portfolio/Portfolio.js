import React, { useState } from "react";

// Style Imports
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";

// Modal Styling
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// Material UI styling
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Portfolio() {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });

  // Modal stuff
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [modalOpenA, setModalOpenA] = useState(false);
  const [modalOpenB, setModalOpenB] = useState(false);
  const [modalOpenC, setModalOpenC] = useState(false);
  const [modalOpenD, setModalOpenD] = useState(false);

  return (
    <animated.div style={trans}>
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
              <p className="lead text-bold md">myToday</p>
              <img
                src="./images/myToday-app.png"
                alt=""
                onClick={() => setModalOpenA(true)}
              />
              <p>React | Node.js | Express | Redux | PostgreSQL</p>
              <p className="sm">
                A styled-for-mobile app designed to allow users to take photos
                via their webcam or upload them from their computer, provide a
                caption, and store them in a date-sorted archive.
              </p>
              <a
                href="https://github.com/TJorenby/prime-solo-project-mytoday"
                target="_blank"
              >
                <i className="fab fa-github fa-2x my-2 i"></i>
              </a>
            </div>

            <div className="card">
              <p className="lead text-bold md">Feedback Survey</p>
              <img
                src="./images/Feedback-loop.png"
                alt=""
                onClick={() => setModalOpenB(true)}
              />
              <p>React | Node.js | Express | Redux | PostgreSQL</p>
              <p className="sm">
                A feedback form that allows users to answer questions in the
                form of "star" ratings as well as comments.
              </p>
              <a
                href="https://github.com/TJorenby/redux-feedback-loop"
                target="_blank"
              >
                <i className="fab fa-github fa-2x my-3 i"></i>
              </a>
            </div>

            <div className="card">
              <p className="lead text-bold md">Image Gallery</p>
              <img
                src="./images/image-gallery.png"
                alt=""
                onClick={() => setModalOpenC(true)}
              />
              <p>React | Node.js | Express | PostgreSQL</p>
              <p className="sm">
                A feedback form that allows users to answer questions in the
                form of "star" ratings as well as comments.
              </p>
              <a
                href="https://github.com/TJorenby/react-gallery"
                target="_blank"
              >
                <i className="fab fa-github fa-2x my-2 i"></i>
              </a>
            </div>

            <div className="card">
              <p className="lead text-bold md">Movie Carousel</p>
              <img
                src="./images/movie-carousel.png"
                alt=""
                onClick={() => setModalOpenD(true)}
              />
              <p>React | Node.js | Express | Redux | PostgreSQL</p>
              <p className="sm">
                A movie library that allows users to browse titles, learn more
                about each title, and upload new titles to a database.
              </p>
              <a href="https://github.com/TJorenby/movie-sagas" target="_blank">
                <i className="fab fa-github fa-2x my-3 i"></i>
              </a>
            </div>
          </div>
        </section>

        <Modal open={modalOpenA} onClose={() => setModalOpenA(false)}>
          <div style={modalStyle} className={classes.paper}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RtXdq-n7Qh0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Modal>

        <Modal open={modalOpenB} onClose={() => setModalOpenB(false)}>
          <div style={modalStyle} className={classes.paper}>
            <img src="./images/demo_feedback_loop.gif" alt="" />
          </div>
        </Modal>

        <Modal open={modalOpenC} onClose={() => setModalOpenC(false)}>
          <div style={modalStyle} className={classes.paper}>
            <img src="./images/image-gallery-gif.gif" alt="" />
          </div>
        </Modal>

        <Modal open={modalOpenD} onClose={() => setModalOpenD(false)}>
          <div style={modalStyle} className={classes.paper}>
            <img src="./images/movie-gallery-gif.gif" alt="" />
          </div>
        </Modal>
      </div>
    </animated.div>
  );
}

export default Portfolio;
