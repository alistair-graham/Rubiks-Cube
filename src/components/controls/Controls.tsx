import { CubeData } from "../../app/types";
import { rotateFront, rotateLeft, rotateRight } from "../../Helpers/Rotations";

interface IProps {
  cubeData: CubeData;
  setCubeData: React.Dispatch<React.SetStateAction<CubeData>>;
}

const Controls = (props: IProps) => {
  const { cubeData, setCubeData } = props;
  return (
    <>
      <button onClick={() => rotateFront(cubeData, setCubeData)}>
        Rotate Front Clockwise
      </button>
      <button onClick={() => rotateFront(cubeData, setCubeData, true)}>
        Rotate Front Anti-Clockwise
      </button>
      <button onClick={() => rotateRight(cubeData, setCubeData)}>
        Rotate Right Clockwise
      </button>
      <button onClick={() => rotateRight(cubeData, setCubeData, true)}>
        Rotate Right Anti-Clockwise
      </button>
      <button onClick={() => rotateLeft(cubeData, setCubeData)}>
        Rotate Left Clockwise
      </button>
      <button onClick={() => rotateLeft(cubeData, setCubeData, true)}>
        Rotate Left Anti-Clockwise
      </button>
    </>
  );
};

export default Controls;