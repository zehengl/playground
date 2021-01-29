import * as colors from "color-name";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const keys = Object.keys(colors)
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);

function ColorApp() {
  return (
    <ReactFullpage
      loopBottom
      loopTop
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            {keys.map((key) => (
              <div key={key} className="section" style={{ padding: 0 }}>
                <div className="card">
                  <div className="card-image">
                    <figure
                      className="image is-square"
                      style={{ background: key, padding: "25.5vh" }}
                    ></figure>
                  </div>
                  <div className="card-content">
                    <div className="content has-text-centered">
                      <strong>{key}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default ColorApp;
