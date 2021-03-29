import "flag-icon-css/css/flag-icon.css";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { iso31661 as iso } from "iso-3166";

const countries = Object.assign(
  {},
  ...iso.map((x) => ({ [x.alpha2]: x.name }))
);

const keys = Object.keys(countries)
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);

function FlagApp() {
  return (
    <ReactFullpage
      loopBottom
      loopTop
      sectionsColor={keys.map(() => "lightgrey")}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            {keys.map((key) => (
              <div
                key={key}
                className="section has-text-centered"
                style={{
                  padding: 0,
                }}
              >
                <div>
                  <span
                    className={`flag-icon flag-icon-${key.toLowerCase()}`}
                    style={{ fontSize: "25.5vh" }}
                  ></span>
                </div>
                <span style={{ fontSize: "5vh" }}>{countries[key]}</span>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default FlagApp;
