import { Layer, RegularPolygon, Stage } from "react-konva";
import React, { Component } from "react";

import Konva from "konva";

class ShapeApp extends Component {
  handleDragStart = (e) => {
    e.target.moveToTop();
    e.target.setAttrs({
      scaleX: 2,
      scaleY: 2,
    });
  };

  handleDragEnd = (e) => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.BounceEaseOut,
      scaleX: 1,
      scaleY: 1,
    });
  };

  commonProps = {
    draggable: true,
    x: 200,
    y: 300,
    fill: Konva.Util.getRandomColor(),
    shadowBlur: 20,
    shadowOpacity: 0.7,
    onDragStart: this.handleDragStart,
    onDragEnd: this.handleDragEnd,
    radius: 50,
  };

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {[3, 4, 5, 6, 7, 8, 360].reverse().map((numSlides) => (
            <RegularPolygon
              key={numSlides}
              {...this.commonProps}
              sides={numSlides}
            />
          ))}
        </Layer>
      </Stage>
    );
  }
}
export default ShapeApp;
