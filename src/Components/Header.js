import { Helmet } from "react-helmet";
import React from "react";

function Header() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Playground</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.7.2/js/all.js"
      />
    </Helmet>
  );
}

export default Header;
