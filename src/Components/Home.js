import React from "react";
import { version } from "../../package.json";

function Home() {
  return (
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">for ada &amp; dan</h1>
          <h2 class="subtitle">
            Version <strong>{version}</strong>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
