import React, { Component } from "react";

import HanziWriter from "hanzi-writer";

class HanziApp extends Component {
  characterOptions = {
    width: 64,
    height: 64,
    padding: 0,
    showOutline: true,
    strokeAnimationSpeed: 3,
    delayBetweenStrokes: 50,
    delayBetweenLoops: 3000
  };

  poem = {
    title: "静夜思",
    sentences: ["床前明月光", "疑是地上霜", "举头望明月", "低头思故乡"]
  };

  render() {
    return (
      <div className="section">
        <div className="level is-mobile">
          {[...this.poem.title].map((char, index) => {
            let idValue = `charTitleDiv${index}`;
            return (
              <span className="level-item">
                <div key={idValue} id={idValue} />
              </span>
            );
          })}
        </div>

        {[...this.poem.sentences].map((sentence, sIndex) => {
          return (
            <div className="level is-mobile">
              {[...sentence].map((char, cIndex) => {
                let idValue = `charSentenceDiv${sIndex}_${cIndex}`;
                return (
                  <span className="level-item">
                    <div key={idValue} id={idValue} />
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    let title = [...this.poem.title].map((char, index) => {
      return HanziWriter.create(
        `charTitleDiv${index}`,
        char,
        this.characterOptions
      );
    });

    let sentences = [
      ...this.poem.sentences.map((sentence, sIndex) => {
        return [...sentence].map((char, cIndex) => {
          return HanziWriter.create(
            `charSentenceDiv${sIndex}_${cIndex}`,
            char,
            this.characterOptions
          );
        });
      })
    ];

    let run = () => {
      let chars = [];
      for (let char of title) {
        char.loopCharacterAnimation();
        chars.push(char);
      }
      for (let sentence of sentences) {
        for (let char of sentence) {
          char.quiz();
          chars.push(char);
        }
      }
    };

    run();
  }
}

export default HanziApp;
