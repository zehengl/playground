import React, { Component } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

class AnimalApp extends Component {
  importAnimals(r) {
    return Object.fromEntries(
      r.keys().map((item) => {
        let key = item.replace("./", "").replace(".png", "");
        return [[key], r(item)];
      })
    );
  }

  render() {
    const animals = this.importAnimals(
      require.context("../Static/animals", false, /\.png$/)
    );

    const randomAnimals = Object.keys(animals)
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);

    return (
      <ReactFullpage
        loopBottom
        loopTop
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              {randomAnimals.map((name) => (
                <div
                  className="section has-text-centered"
                  style={{ padding: 0 }}
                  key={name}
                >
                  <img alt={name} src={animals[name].default} />
                  <p>{name}</p>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default AnimalApp;
