import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

function importAnimals(r) {
  return Object.fromEntries(
    r.keys().map((item) => {
      let key = item.replace("./", "").replace(".png", "");
      return [[key], r(item)];
    })
  );
}

const animals = importAnimals(
  require.context("../Static/animals", false, /\.png$/)
);

const keys = Object.keys(animals)
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);

function AnimalApp() {
  return (
    <ReactFullpage
      loopBottom
      loopTop
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            {keys.map((key) => (
              <div
                className="section has-text-centered"
                style={{ padding: 0 }}
                key={key}
              >
                <img alt={key} src={animals[key].default} />
                <p>{key}</p>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default AnimalApp;
