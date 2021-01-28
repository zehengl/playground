import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

function NumberApp() {
  return (
    <ReactFullpage
      loopBottom
      loopTop
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            {[...Array(10).keys()].map((number) => (
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
