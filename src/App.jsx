import React, { useState } from "react";
import TileBoard from "./tile-board/Tileboard";
import { createArrayGrid } from "./utils/utils";

function App() {
  const [size] = useState(5);
  const [arrayGrid, setArrayGrid] = useState(() => createArrayGrid(size));

  const onRestart = () => {
    setArrayGrid(createArrayGrid(size));
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
