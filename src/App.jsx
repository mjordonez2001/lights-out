import React, { useState } from "react";
import TileBoard from "./tile-board/Tileboard";
import { randomArrayGrid } from "./utils/utils";

function App() {
  const [size] = useState(5);
  const [arrayGrid, setArrayGrid] = useState(() => randomArrayGrid(size));

  const onRestart = () => {
    setArrayGrid(randomArrayGrid(size));
  };

  return (
    <div className="container text-center">
      <TileBoard
        arrayGrid={arrayGrid}
        setArrayGrid={setArrayGrid}
        size={size}
      />
      <button className="btn btn-primary mt-3" onClick={onRestart}>
        Restart board
      </button>
    </div>
  );
}

export default App;
