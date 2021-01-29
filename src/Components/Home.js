import React from "react";
import { version } from "../../package.json";

function Home() {
  return (
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">for ada &amp; dan</h1>
          <h2 className="subtitle">
            Version <strong>{version}</strong>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
