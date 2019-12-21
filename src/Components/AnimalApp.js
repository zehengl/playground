import React, { Component } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

class AnimalApp extends Component {
  importAnimals(r) {
    let animals = {};
    r.keys().map(item => {
      animals[item.replace("./", "").replace(".png", "")] = r(item);
    });
    return animals;
  }

  render() {
    const animals = this.importAnimals(
      require.context("../Static/animals", false, /\.png$/)
    );

    return (
      <ReactFullpage
        loopBottom
        loopTop
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              {Object.keys(animals)
                .sort(() => 0.5 - Math.random())
                .map(name => (
                  <div
                    className="section has-text-centered"
                    style={{ padding: 0 }}
                    key={name}
                  >
                    <img alt={name} src={animals[name]} />
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
