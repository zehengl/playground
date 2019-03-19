import React, { Component } from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import armadillo from "../Static/armadillo.png";
import beaver from "../Static/beaver.png";
import cow from "../Static/cow.png";
import duck from "../Static/duck.png";
import elephant from "../Static/elephant.png";
import flamingo from "../Static/flamingo.png";
import hippo from "../Static/hippo.png";
import iguana from "../Static/iguana.png";
import jellyfish from "../Static/jellyfish.png";
import kitten from "../Static/kitten.png";
import leopard from "../Static/leopard.png";
import meerkat from "../Static/meerkat.png";
import octopus from "../Static/octopus.png";
import panda from "../Static/panda.png";
import rhino from "../Static/rhino.png";
import seahorse from "../Static/seahorse.png";
import turtle from "../Static/turtle.png";
import unicorn from "../Static/unicorn.png";
import velociraptor from "../Static/velociraptor.png";
import whale from "../Static/whale.png";
import zebra from "../Static/zebra.png";

class AnimalApp extends Component {
  render() {
    const animals = [
      armadillo,
      beaver,
      cow,
      duck,
      elephant,
      flamingo,
      hippo,
      iguana,
      jellyfish,
      kitten,
      leopard,
      meerkat,
      octopus,
      panda,
      rhino,
      seahorse,
      turtle,
      unicorn,
      velociraptor,
      whale,
      zebra
    ];
    return (
      <ReactFullpage
        loopBottom
        loopTop
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              {animals.map(animal => (
                <div
                  className="section has-text-centered"
                  style={{ padding: 0 }}
                >
                  <img alt="animal" src={animal} />
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
