import { Layer, RegularPolygon, Stage } from "react-konva";
import React, { useLayoutEffect, useState } from "react";

import Konva from "konva";

// https://stackoverflow.com/a/19014495
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.outerWidth, window.outerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function ShapeApp() {
  const [width, height] = useWindowSize();

  const handleDragStart = (e) => {
    e.target.moveToTop();
    e.target.setAttrs({
      scaleX: 2,
      scaleY: 2,
    });
  };

  const handleDragEnd = (e) => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.BounceEaseOut,
      scaleX: 1,
      scaleY: 1,
    });
  };

  const commonProps = {
    draggable: true,
    fill: Konva.Util.getRandomColor(),
    shadowBlur: 20,
    shadowOpacity: 0.7,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
  };

  return (
    <Stage width={width} height={height * 0.9}>
      <Layer>
        {[3, 4, 5, 6, 7, 8, 360].reverse().map((numSides) => (
          <RegularPolygon
            key={numSides}
            {...commonProps}
            sides={numSides}
            x={width / 2}
            y={height / 2}
            radius={Math.min(width, height) * 0.1}
            shadowBlur={width * 0.02}
          />
        ))}
      </Layer>
    </Stage>
  );
}
export default ShapeApp;
