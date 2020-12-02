import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function HeaderNav() {
  return (
    <>
      <div className="headernav">
        <div className="container flex">
          <h1 className="logo">Tyler Jorenby</h1>
          {/* <h2 className="logo">Full Stack Software Engineer</h2> */}
          <nav>
            <ul>
              <li className="link-list">
                <Link className="link" to="/">
                  About Me
                </Link>
              </li>
              <li>
                <Link className="link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  Connect
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default HeaderNav;
