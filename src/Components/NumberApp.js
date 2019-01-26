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
                <div className="section has-text-centered has-text-weight-bold">
                  <p className="is-size-1">{number + 1}</p>
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
