import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import HeaderNav from "../HeaderNav/HeaderNav";
import Portfolio from "../Portfolio/Portfolio";

// Style imports
import "../styles/styles.css";
import "../styles/utilities.css";
import "../styles/media.css";
import { useSpring, animated } from "react-spring";

function App() {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Router>
      <div className="App">
        <HeaderNav />
        <animated.div style={trans}>
          <Route exact path="/" component={AboutMe} />
        </animated.div>
        <animated.div style={trans}>
          <Route exact path="/portfolio" component={Portfolio} />
        </animated.div>
        <animated.div style={trans}>
          <Route exact path="/contact" component={Contact} />
        </animated.div>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
