import React from 'react';
import Tile from './Tile';

function TileBoard() {

  let allTiles = [];
  for (let i=0; i<5; i++) {
    let row = [];

    for (let j=0; j<5; j++) {
      row.push(<Tile key={`${i}, ${j}`} />);
    }
    allTiles.push(row);
  }
  
  return (
    <div className='container text-center mt-5'>
      {
        allTiles.map((row, key) => {
          return <div key={key}>{row}</div>;
        })
      }
    </div>
  )
}

export default TileBoard;