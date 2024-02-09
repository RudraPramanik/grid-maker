import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import Rectangle from './Ractangle';

const Grid = ({ columns, rows, color }) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  
  const cellSize = Math.min((screenWidth * 0.8) / (columns), screenHeight / (rows * 2));

  const renderGrid = () => {

    const grid = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        grid.push(
            <Rectangle key={`${i}-${j}`} i={i} j={j} cellSize={cellSize} color={color} />
          );
      }
    }
    return grid;
    
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', left:12,  marginLeft: 'auto', marginRight: 'auto' }}>
      <Svg width={screenWidth} height={screenHeight / 2}>
        {renderGrid()}
      </Svg>
    </View>
  );
};

export default Grid;



// for (var i = 0; i < length; i++) {
//     for (var j = 0; j < length2; j++) {
//         var x = points[i][j][0];
//         var y = points[i][j][1];
//     };
// };
// for (var i = 0; i < length2; i++) {
//     for (var j = 0; j < length; j++) {
//         var x = points[i][j][0] ;
//         var y = points[i][j][1] ;
//     };
// };