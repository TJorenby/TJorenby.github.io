import React, { useState } from "react";

// Image Imports
import feedbackLoopGif from "./PortfolioImages/demo_feedback_loop.gif";
import feedbackLoopImg from "./PortfolioImages/Feedback-loop.png";
import imageGalleryImg from "./PortfolioImages/image-gallery.png";
import imageGalleryGif from "./PortfolioImages/image-gallery-gif.gif";
import movieGalleryGif from "./PortfolioImages/movie-gallery-gif.gif";
import movieGalleryImg from "./PortfolioImages/movie-gallery.png";
import theWeatherImg from "./PortfolioImages/theWeather.png";
import theWeatherGif from "./PortfolioImages/theWeather-demo.gif";
import myTodayImg from "./PortfolioImages/myToday-app.png";

// Style Imports
import Modal from "@material-ui/core/Modal";
import Tooltip from "@material-ui/core/Tooltip";
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
  const [modalOpenE, setModalOpenE] = useState(false);

  return (
    <animated.div style={trans}>
      <div className="portfolio">
        <section className="portfolio-head bg-primary py-3">
          <div className="container">
            <h1 className="md text-center">Projects</h1>
          </div>
        </section>

        {/* Features Main */}
        <section className="portfolio-main">
          <div className="container grid">
            {/* myToday */}
            <div className="card">
              <p className="lead text-bold md">myToday</p>
              <Tooltip title="Click to view demo" interactive>
                <img
                  src={myTodayImg}
                  alt=""
                  onClick={() => setModalOpenA(true)}
                />
              </Tooltip>
              {/* <p>React | Node.js | Express | Redux | PostgreSQL</p> */}
              <p className="sm">
                A styled-for-mobile app designed to allow users to take photos
                via their webcam or upload them from their computer, provide a
                caption, and store them in a date-sorted archive.
              </p>
              <a
                href="https://github.com/TJorenby/prime-solo-project-mytoday"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x my-2 i"></i>
              </a>
            </div>

            {/* theWeather */}
            <div className="card">
              {/* <p className="lead text-bold md">theWeather App</p> */}

              <a
                href="https://theweather-app-jorenby.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tooltip title="Click to use the app!" interactive>
                  <p className="lead text-bold md">theWeather App</p>
                </Tooltip>
              </a>

              <Tooltip title="Click to view demo" interactive>
                <img
                  src={theWeatherImg}
                  alt=""
                  onClick={() => setModalOpenB(true)}
                />
              </Tooltip>
              {/* <p>React | Node.js | Express | Redux | PostgreSQL</p> */}

              <p className="sm">
                Powered by weatherAPI, this app allows users to access weather
                conditions anywhere in the world.
              </p>

              <a
                href="https://github.com/TJorenby/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x my-3 i"></i>
              </a>
            </div>

            {/* Feedback Survey */}
            <div className="card">
              <p className="lead text-bold md">Feedback Survey</p>
              <Tooltip title="Click to view demo" interactive>
                <img
                  src={feedbackLoopImg}
                  alt=""
                  onClick={() => setModalOpenC(true)}
                />
              </Tooltip>
              {/* <p>React | Node.js | Express | Redux | PostgreSQL</p> */}
              <p className="sm">
                A feedback form that allows users to answer questions in the
                form of "star" ratings as well as comments.
              </p>
              <a
                href="https://github.com/TJorenby/redux-feedback-loop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x my-3 i"></i>
              </a>
            </div>

            {/* Movie Carousel */}
            <div className="card">
              <p className="lead text-bold md">Movie Carousel</p>
              <Tooltip title="Click to view demo" interactive>
                <img
                  src={movieGalleryImg}
                  alt=""
                  onClick={() => setModalOpenD(true)}
                />
              </Tooltip>
              {/* <p>React | Node.js | Express | Redux | PostgreSQL</p> */}
              <p className="sm">
                A movie library that allows users to browse titles, learn more
                about each title, and upload new titles to a database.
              </p>
              <a
                href="https://github.com/TJorenby/movie-sagas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x my-3 i"></i>
              </a>
            </div>

            <div className="card">
              <p className="lead text-bold md">Image Gallery</p>
              <Tooltip title="Click to view demo" interactive>
                <img
                  src={imageGalleryImg}
                  alt=""
                  onClick={() => setModalOpenC(true)}
                />
              </Tooltip>
              {/* <p>React | Node.js | Express | PostgreSQL</p> */}
              <p className="sm">
                An app that allows users to add images, "love" them, or "delete"
                them.
              </p>
              <a
                href="https://github.com/TJorenby/react-gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x my-2 i"></i>
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
              rel="noopener noreferrer"
            ></iframe>
          </div>
        </Modal>

        <Modal open={modalOpenB} onClose={() => setModalOpenB(false)}>
          <div style={modalStyle} className={classes.paper}>
            <img src={theWeatherGif} alt="" />
          </div>
        </Modal>

        <Modal open={modalOpenC} onClose={() => setModalOpenC(false)}>
          <div style={modalStyle} className={classes.paper}>
            <img src={feedbackLoopGif} alt="" />
          </div>
        </Modal>

        <Modal open={modalOpenD} onClose={() => setModalOpenD(false)}>
          <div style={modalStyle} className={classes.paper}>
            <img src={movieGalleryGif} alt="" />
          </div>
        </Modal>

        <Modal open={modalOpenE} onClose={() => setModalOpenE(false)}>
          <div style={modalStyle} className={classes.paper}>
            <img src={imageGalleryGif} alt="" />
          </div>
        </Modal>
      </div>
    </animated.div>
  );
}

export default Portfolio;
