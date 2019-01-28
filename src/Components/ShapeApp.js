import { Layer, RegularPolygon, Stage } from "react-konva";
import React, { Component } from "react";

import Konva from "konva";

class ShapeApp extends Component {
  getRadius = () => {
    let radiusMax = window.innerWidth * 0.06;
    let radiusMin = window.innerWidth * 0.04;
    return Math.random() * (radiusMax - radiusMin) + radiusMin;
  };

  handleDragStart = e => {
    e.target.moveToTop();
    e.target.setAttrs({
      scaleX: 2,
      scaleY: 2
    });
  };

  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.BounceEaseOut,
      scaleX: 1,
      scaleY: 1
    });
  };

  commonProps = {
    draggable: true,
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    fill: Konva.Util.getRandomColor(),
    shadowBlur: 20,
    shadowOpacity: 0.7,
    onDragStart: this.handleDragStart,
    onDragEnd: this.handleDragEnd,
    radius: this.getRadius()
  };

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {[3, 4, 5, 6, 7, 8, 360].reverse().map(numSlides => (
            <RegularPolygon {...this.commonProps} sides={numSlides} />
          ))}
        </Layer>
      </Stage>
    );
  }
}
export default ShapeApp;
