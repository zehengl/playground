import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const colors = {
  black: "#000000",
  blue: "#19B5FE",
  brown: "#8B4513",
  green: "#00E640",
  orange: "#F89406",
  pink: "#FF69B4",
  purple: "#8C14FC",
  red: "#FF0800",
  white: "#FFFFFF",
  yellow: "#FFFF7E",
};

const keys = Object.keys(colors).sort(() => 0.5 - Math.random());

function ColorApp() {
  return (
    <ReactFullpage
      loopBottom
      loopTop
      sectionsColor={keys.map((key) => colors[key])}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            {keys.map((key) => (
              <div key={key} className="section" style={{ padding: 0 }} />
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default ColorApp;
