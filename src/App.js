import { NavLink, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";

import ColorApp from "./Components/ColorApp";
import Header from "./Components/Header";
import NumberApp from "./Components/NumberApp";
import ShapeApp from "./Components/ShapeApp";

function Home() {
  return (
    <div className="has-text-centered has-text-weight-bold is-size-1">
      <h1>for ada</h1>
    </div>
  );
}

class App extends Component {
  activeStyle = {
    cursor: "not-allowed",
    opacity: 0.2,
    textDecoration: "none",
    pointerEvents: "none"
  };

  render() {
    return (
      <div>
        <Header />
        <Router basename={process.env.PUBLIC_URL}>
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
                to="/number"
                className="navbar-item"
                activeStyle={this.activeStyle}
              >
                Number
              </NavLink>
              <NavLink
                to="/shape"
                className="navbar-item"
                activeStyle={this.activeStyle}
              >
                Shape
              </NavLink>
              <NavLink
                to="/color"
                className="navbar-item"
                activeStyle={this.activeStyle}
              >
                Color
              </NavLink>
            </nav>

            <Route exact path="/" component={Home} />
            <Route path="/number" component={NumberApp} />
            <Route path="/shape" component={ShapeApp} />
            <Route path="/color" component={ColorApp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
