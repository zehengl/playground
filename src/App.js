import { NavLink, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";

import ColorApp from "./Components/ColorApp";
import Header from "./Components/Header";

function Home() {
  return (
    <div className="has-text-centered has-text-weight-bold is-size-1">
      <h1>;)</h1>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <nav
              className="navbar"
              role="navigation"
              aria-label="main navigation"
            >
              <NavLink to="/" className="navbar-item">
                Home
              </NavLink>
              <NavLink
                to="/color"
                className="navbar-item"
                activeStyle={{
                  cursor: "not-allowed",
                  opacity: 0.2,
                  textDecoration: "none",
                  pointerEvents: "none"
                }}
              >
                Color
              </NavLink>
            </nav>

            <Route exact path="/" component={Home} />
            <Route path="/color" component={ColorApp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
