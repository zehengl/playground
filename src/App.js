import React, { Component } from "react";

import { Helmet } from "react-helmet";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";

class App extends Component {
  colors = [
    "red",
    "blue",
    "green",
    "purple",
    "orange",
    "black",
    "yellow",
    "pink",
    "brown"
  ];

  createColoredDiv = color => {
    return styled.div`
      background-color: ${color};
      color: grey;
    `;
  };

  render() {
    const colors = this.colors.sort(() => 0.5 - Math.random());

    const ColorDivs = colors.map(color => {
      const ColorDiv = this.createColoredDiv(color);
      return (
        <ColorDiv
          key={color}
          className="section has-text-centered has-text-weight-bold"
        >
          <p className="is-size-1">{color}</p>
        </ColorDiv>
      );
    });

    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Playground</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"
          />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
          />
        </Helmet>
        <ReactFullpage
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                {ColorDivs.map(Div => Div)}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
