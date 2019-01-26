import {
  Circle,
  Ellipse,
  Layer,
  Rect,
  RegularPolygon,
  Stage,
  Star
} from "react-konva";
import React, { Component } from "react";

import Konva from "konva";

class ShapeApp extends Component {
  getRadius = () => {
    let radiusMax = window.innerWidth * 0.06;
    let radiusMin = window.innerWidth * 0.04;
    return Math.random() * (radiusMax - radiusMin) + radiusMin;
  };

  handleDragStart = e => {
    e.target.setAttrs({
      scaleX: 1.2,
      scaleY: 1.2
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

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            draggable
            x={window.innerWidth * Math.random()}
            y={window.innerHeight * Math.random()}
            fill={Konva.Util.getRandomColor()}
            shadowBlur={10 * Math.random()}
            shadowOpacity={Math.random()}
            onDragStart={this.handleDragStart}
            onDragEnd={this.handleDragEnd}
            width={this.getRadius()}
            height={this.getRadius()}
          />
          <Rect
            draggable
            x={window.innerWidth * Math.random()}
            y={window.innerHeight * Math.random()}
            fill={Konva.Util.getRandomColor()}
            shadowBlur={10 * Math.random()}
            shadowOpacity={Math.random()}
            onDragStart={this.handleDragStart}
            onDragEnd={this.handleDragEnd}
            width={this.getRadius() * 2}
            height={this.getRadius()}
          />
          <Circle
            draggable
            x={window.innerWidth * Math.random()}
            y={window.innerHeight * Math.random()}
            fill={Konva.Util.getRandomColor()}
            shadowBlur={10 * Math.random()}
            shadowOpacity={Math.random()}
            onDragStart={this.handleDragStart}
            onDragEnd={this.handleDragEnd}
            radius={this.getRadius()}
          />
          <Star
            draggable
            x={window.innerWidth * Math.random()}
            y={window.innerHeight * Math.random()}
            fill={Konva.Util.getRandomColor()}
            shadowBlur={10 * Math.random()}
            shadowOpacity={Math.random()}
            onDragStart={this.handleDragStart}
            onDragEnd={this.handleDragEnd}
            numPoints={5}
            innerRadius={this.getRadius() / 2}
            outerRadius={this.getRadius()}
          />
          <Ellipse
            draggable
            x={window.innerWidth * Math.random()}
            y={window.innerHeight * Math.random()}
            fill={Konva.Util.getRandomColor()}
            shadowBlur={10 * Math.random()}
            shadowOpacity={Math.random()}
            onDragStart={this.handleDragStart}
            onDragEnd={this.handleDragEnd}
            radiusX={this.getRadius() * 2}
            radiusY={this.getRadius()}
          />
          <RegularPolygon
            draggable
            x={window.innerWidth * Math.random()}
            y={window.innerHeight * Math.random()}
            fill={Konva.Util.getRandomColor()}
            shadowBlur={10 * Math.random()}
            shadowOpacity={Math.random()}
            onDragStart={this.handleDragStart}
            onDragEnd={this.handleDragEnd}
            sides={5}
            radius={this.getRadius()}
          />
        </Layer>
      </Stage>
    );
  }
}
export default ShapeApp;
