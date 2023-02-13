import { useState } from "react";
import Controls from "../components/controls/controls/Controls";
import Cube from "../components/cube/cube/Cube";
import { CubeData, INITIAL_STATE } from "./types";

const App = () => {
  const [cubeData, setCubeData] = useState<CubeData>(INITIAL_STATE);

  return (
    <div className="App">
      <Cube cubeData={cubeData} />
      <Controls cubeData={cubeData} setCubeData={setCubeData} />
    </div>
  );
};

export default App;
