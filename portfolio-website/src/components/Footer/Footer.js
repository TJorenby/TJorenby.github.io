import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Router>
        <footer className="footer bg-dark py-5">
          <div className="container grid grid-3">
            <div>
              <h1>Loruki</h1>
              <p>Copyright &copy; 2020</p>
            </div>

            <nav>
              <ul>
                <li className="link-list">
                  <Link className="link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/features">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/Docs">
                    Docs
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="social">
              <a href="#">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </div>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default Footer;
