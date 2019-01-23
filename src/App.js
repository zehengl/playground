import React, { Component } from "react";

import { Helmet } from "react-helmet";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";

class App extends Component {
  colors = {
    black: "#000000",
    blue: "#19B5FE",
    brown: "#8B4513",
    green: "#00E640",
    orange: "#F89406",
    pink: "#FF69B4",
    purple: "#8C14FC",
    white: "#FFFFFF",
    yellow: "#FFFF7E"
  };

  createColoredDiv = color => {
    return styled.div`
      background-color: ${color};
      color: grey;
    `;
  };

  render() {
    const names = Object.keys(this.colors).sort(() => 0.5 - Math.random());

    const ColorDivs = names.map(name => {
      const ColorDiv = this.createColoredDiv(this.colors[name]);
      return (
        <ColorDiv
          key={name}
          className="section has-text-centered has-text-weight-bold"
        >
          <p className="is-size-1">{name}</p>
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
