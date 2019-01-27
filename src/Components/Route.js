import { NavLink, Route, BrowserRouter as Router } from "react-router-dom";

import ColorApp from "./ColorApp";
import Home from "./Home";
import NumberApp from "./NumberApp";
import React from "react";
import ShapeApp from "./ShapeApp";

const activeStyle = {
  cursor: "not-allowed",
  opacity: 0.2,
  textDecoration: "none",
  pointerEvents: "none"
};

const Routes = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <NavLink to="/" className="navbar-item">
          Playground
        </NavLink>
        <NavLink to="/number" className="navbar-item" activeStyle={activeStyle}>
          Number
        </NavLink>
        <NavLink to="/shape" className="navbar-item" activeStyle={activeStyle}>
          Shape
        </NavLink>
        <NavLink to="/color" className="navbar-item" activeStyle={activeStyle}>
          Color
        </NavLink>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/number" component={NumberApp} />
      <Route path="/shape" component={ShapeApp} />
      <Route path="/color" component={ColorApp} />
    </div>
  </Router>
);

export default Routes;
