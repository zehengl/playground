import "flag-icon-css/css/flag-icon.css";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const countries = {
  ca: { english: "Canada", chinese: "加拿大" },
  cn: { english: "China", chinese: "中国" },
  us: { english: "United States", chinese: "美国" },
  br: { english: "Brazil", chinese: "巴西" },
  au: { english: "Australia", chinese: "澳大利亚" },
  ch: { english: "Switzerland", chinese: "瑞士" },
};

const keys = Object.keys(countries).sort(() => 0.5 - Math.random());

function FlagApp() {
  return (
    <ReactFullpage
      loopBottom
      loopTop
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
                    className={`flag-icon flag-icon-${key}`}
                    style={{ fontSize: "25.5vh" }}
                  ></span>
                </div>
                <span style={{ fontSize: "5vh" }}>
                  {countries[key].english} <br /> {countries[key].chinese}
                </span>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default FlagApp;
