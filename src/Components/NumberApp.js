import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const keys = [...Array(100).keys()]
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);

function NumberApp() {
  return (
    <ReactFullpage
      loopBottom
      loopTop
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            {keys.map((number) => (
              <div
                key={number}
                className="section has-text-centered"
                style={{ padding: 0 }}
              >
                <h1 className="title" style={{ fontSize: "25.5vh" }}>
                  {number + 1}
                </h1>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default NumberApp;
