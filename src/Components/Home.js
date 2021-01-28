import React from "react";
import { version } from "../../package.json";

function Home() {
  return (
    <div className="has-text-centered">
      <h1 className="title">for ada &amp; dan</h1>
      <p>
        Version <strong>{version}</strong>
      </p>
    </div>
  );
}

export default Home;
