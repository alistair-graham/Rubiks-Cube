import { CubeData } from "../../app/types";
import { rotateFrontClockwise } from "../../Helpers/Rotations";

interface IProps {
  cubeData: CubeData;
  setCubeData: React.Dispatch<React.SetStateAction<CubeData>>;
}

const Controls = (props: IProps) => {
  const { cubeData, setCubeData } = props;
  return (
    <button onClick={() => rotateFrontClockwise(cubeData, setCubeData)}>
      Rotate
    </button>
  );
};

export default Controls;
