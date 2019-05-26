import { NavLink, Route, BrowserRouter as Router } from "react-router-dom";

import AnimalApp from "./AnimalApp";
import ColorApp from "./ColorApp";
import HanziApp from "./HanziApp";
import Home from "./Home";
import NumberApp from "./NumberApp";
import React from "react";
import ShapeApp from "./ShapeApp";
import apps from "../Static/apps.svg";

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
        <NavLink className="navbar-item" to="/">
          <img alt="apps" src={apps} />
        </NavLink>
        <NavLink className="navbar-item" to="/animal" activeStyle={activeStyle}>
          Animal
        </NavLink>
        <NavLink className="navbar-item" to="/color" activeStyle={activeStyle}>
          Color
        </NavLink>
        <NavLink className="navbar-item" to="/number" activeStyle={activeStyle}>
          Number
        </NavLink>
        <NavLink className="navbar-item" to="/shape" activeStyle={activeStyle}>
          Shape
        </NavLink>
        <NavLink className="navbar-item" to="/hanzi" activeStyle={activeStyle}>
          Hanzi
        </NavLink>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/number" component={NumberApp} />
      <Route path="/shape" component={ShapeApp} />
      <Route path="/color" component={ColorApp} />
      <Route path="/animal" component={AnimalApp} />
      <Route path="/hanzi" component={HanziApp} />
    </div>
  </Router>
);

export default Routes;
