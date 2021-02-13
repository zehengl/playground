import { NavLink, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useRef, useState } from "react";

import AnimalApp from "./AnimalApp";
import ColorApp from "./ColorApp";
import FlagApp from "./FlagApp";
import Home from "./Home";
import NumberApp from "./NumberApp";
import ShapeApp from "./ShapeApp";

const activeStyle = {
  cursor: "not-allowed",
  opacity: 0.2,
  textDecoration: "none",
  pointerEvents: "none",
};

function Routes() {
  const [isActive, setActive] = useState(false);
  const navbarBurger = useRef(null);
  const navbarMenu = useRef(null);
  const toggleClass = () => setActive(!isActive);
  const onClick = () => setActive(false);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/">
            <i className="fas fa-home"></i>
          </NavLink>

          <button
            className={isActive ? "navbar-burger is-active" : "navbar-burger"}
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
            onClick={toggleClass}
            style={{ border: "none", background: "none", outline: "none" }}
            ref={navbarBurger}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div
          id="navMenu"
          className={isActive ? "navbar-menu is-active" : "navbar-menu"}
          ref={navbarMenu}
        >
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              to="/flag"
              activeStyle={activeStyle}
              onClick={onClick}
            >
              Flag
            </NavLink>
            <NavLink
              className="navbar-item"
              to="/animal"
              activeStyle={activeStyle}
              onClick={onClick}
            >
              Animal
            </NavLink>
            <NavLink
              className="navbar-item"
              to="/color"
              activeStyle={activeStyle}
              onClick={onClick}
            >
              Color
            </NavLink>
            <NavLink
              className="navbar-item"
              to="/number"
              activeStyle={activeStyle}
              onClick={onClick}
            >
              Number
            </NavLink>
            <NavLink
              className="navbar-item"
              to="/shape"
              activeStyle={activeStyle}
              onClick={onClick}
            >
              Shape
            </NavLink>
          </div>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/flag" component={FlagApp} />
      <Route path="/number" component={NumberApp} />
      <Route path="/shape" component={ShapeApp} />
      <Route path="/color" component={ColorApp} />
      <Route path="/animal" component={AnimalApp} />
    </Router>
  );
}

export default Routes;
