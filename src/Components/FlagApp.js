import "flag-icon-css/css/flag-icon.css";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

function FlagApp() {
  const countries = {
    ca: { english: "Canada", chinese: "加拿大" },
    cn: { english: "China", chinese: "中国" },
    us: { english: "United States", chinese: "美国" },
    br: { english: "Brazil", chinese: "巴西" },
    au: { english: "Australia", chinese: "澳大利亚" },
    ch: { english: "Switzerland", chinese: "瑞士" },
  };

  const names = Object.keys(countries).sort(() => 0.5 - Math.random());

  return (
    <ReactFullpage
      loopBottom
      loopTop
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            {names.map((name) => (
              <div
                key={name}
                className="section has-text-centered"
                style={{
                  padding: 0,
                }}
              >
                <div>
                  <span
                    className={`flag-icon flag-icon-${name}`}
                    style={{ fontSize: "25.5vh" }}
                  ></span>
                </div>
                <span style={{ fontSize: "5vh" }}>
                  {countries[name].english} <br /> {countries[name].chinese}
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
