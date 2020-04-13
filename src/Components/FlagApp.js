import "flag-icon-css/css/flag-icon.css";

import React, { Component } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

class FlagApp extends Component {
  render() {
    const countries = [
      { code: "ca", english: "Canada", chinese: "加拿大" },
      { code: "cn", english: "China", chinese: "中国" },
      { code: "us", english: "United States", chinese: "美国" },
      { code: "br", english: "Brazil", chinese: "巴西" },
      { code: "au", english: "Australia", chinese: "澳大利亚" },
      { code: "ch", english: "Switzerland", chinese: "瑞士" },
    ];
    return (
      <ReactFullpage
        loopBottom
        loopTop
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              {countries.map((country) => (
                <div
                  key={country.code}
                  className="section has-text-centered"
                  style={{
                    padding: 0,
                  }}
                >
                  <div>
                    <span
                      className={`flag-icon flag-icon-${country.code}`}
                      style={{ fontSize: "25.5vw" }}
                    ></span>
                  </div>
                  <span style={{ fontSize: "5vw" }}>
                    {country.english} <br /> {country.chinese}
                  </span>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default FlagApp;
