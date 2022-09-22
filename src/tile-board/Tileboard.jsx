import React from 'react';
import Tile from './Tile';

function TileBoard() {
  const arrayGrid = createArrayGrid();
  
  return (
    <div className='container text-center mt-5'>
      {
        // Maps over the array grid, adding a <div> element that wraps around each row.
        arrayGrid.map((row, key) => {
          return <div key={key}>{row}</div>;
        })
      }
    </div>
  )
}

/* 
  Uses two nested for-loops that loops through each tile space 
  and adds a Tile component into an array. 
  
  allTiles is an array of arrays. Each array represents a row, 
  each row will have 5 Tile components, and there will be
  5 rows in total, essentially creating a 5x5 grid.
*/
function createArrayGrid() {
  const allTiles = [];
  for (let i=0; i<5; i++) {
    const row = [];

    for (let j=0; j<5; j++) {
      row.push(<Tile key={`${i}, ${j}`} />);
    }
    allTiles.push(row);
  }

  return allTiles;
}

export default TileBoard;