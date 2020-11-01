import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function HeaderNav() {
  return (
    <div>
      <h2>HeaderNav</h2>
      <nav>
        <ul>
          <li className="link-list">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderNav;
