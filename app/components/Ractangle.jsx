import React from 'react';
import { Rect } from 'react-native-svg';

const Rectangle = ({ i, j, cellSize, color }) => (
  <Rect
    key={`${i}-${j}`}
    x={j * cellSize}
    y={i * cellSize}
    width={cellSize}
    height={cellSize}
    fill={color}
    stroke="black"
    strokeWidth="1"
  />
);

export default Rectangle;
