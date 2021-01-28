import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

function ColorApp() {
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

  const names = Object.keys(colors).sort(() => 0.5 - Math.random());

  return (
    <ReactFullpage
      loopBottom
      loopTop
      sectionsColor={names.map((name) => colors[name])}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            {names.map((name) => (
              <div key={name} className="section" style={{ padding: 0 }} />
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default ColorApp;
