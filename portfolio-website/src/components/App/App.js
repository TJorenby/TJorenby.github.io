import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import HeaderNav from "../HeaderNav/HeaderNav";
import Portfolio from "../Portfolio/Portfolio";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderNav />
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
