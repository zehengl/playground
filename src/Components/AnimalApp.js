import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

function AnimalApp() {
  const importAnimals = (r) => {
    return Object.fromEntries(
      r.keys().map((item) => {
        let key = item.replace("./", "").replace(".png", "");
        return [[key], r(item)];
      })
    );
  };

  const animals = importAnimals(
    require.context("../Static/animals", false, /\.png$/)
  );

  const names = Object.keys(animals)
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  return (
    <ReactFullpage
      loopBottom
      loopTop
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            {names.map((name) => (
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

export default AnimalApp;
