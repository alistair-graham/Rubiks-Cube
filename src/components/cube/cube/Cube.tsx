import { CubeData } from "../../../app/types";
import "./Cube.scss";
import Face from "../face/Face";

interface IProps {
  cubeData: CubeData;
}

const Cube = (props: IProps) => {
  const { cubeData } = props;

  return (
    <div className="cube-container">
      <div className="cube-container-row">
        <Face />
        <Face cubeData={cubeData[0]} />
        <Face />
        <Face />
      </div>
      <div className="cube-container-row">
        <Face cubeData={cubeData[1]} />
        <Face cubeData={cubeData[2]} />
        <Face cubeData={cubeData[3]} />
        <Face cubeData={cubeData[4]} />
      </div>
      <div className="cube-container-row">
        <Face />
        <Face cubeData={cubeData[5]} />
        <Face />
        <Face />
      </div>
    </div>
  );
};

export default Cube;
