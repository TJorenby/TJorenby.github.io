import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h4>Hello Today</h4>
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
