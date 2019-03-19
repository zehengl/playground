import React, { Component } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

class NumberApp extends Component {
  render() {
    return (
      <ReactFullpage
        loopBottom
        loopTop
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              {[...Array(10).keys()].map(number => (
                <div
                  key={number}
                  className="section has-text-centered"
                  style={{ padding: 0 }}
                >
                  <h1 className="title">{number + 1}</h1>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default NumberApp;
