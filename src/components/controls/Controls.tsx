import { CubeData } from "../../app/types";
import {
  rotateFront,
  rotateLeft,
  rotateRight,
  rotateTop,
  rotateBottom,
  rotateBack,
} from "../../Helpers/Rotations";

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
      <button onClick={() => rotateLeft(cubeData, setCubeData)}>
        Rotate Left Clockwise
      </button>
      <button onClick={() => rotateLeft(cubeData, setCubeData, true)}>
        Rotate Left Anti-Clockwise
      </button>
      <button onClick={() => rotateRight(cubeData, setCubeData)}>
        Rotate Right Clockwise
      </button>
      <button onClick={() => rotateRight(cubeData, setCubeData, true)}>
        Rotate Right Anti-Clockwise
      </button>
      <button onClick={() => rotateTop(cubeData, setCubeData)}>
        Rotate Top Clockwise
      </button>
      <button onClick={() => rotateTop(cubeData, setCubeData, true)}>
        Rotate Top Anti-Clockwise
      </button>
      <button onClick={() => rotateBottom(cubeData, setCubeData)}>
        Rotate Bottom Clockwise
      </button>
      <button onClick={() => rotateBottom(cubeData, setCubeData, true)}>
        Rotate Bottom Anti-Clockwise
      </button>
      <button onClick={() => rotateBack(cubeData, setCubeData)}>
        Rotate Back Clockwise
      </button>
      <button onClick={() => rotateBack(cubeData, setCubeData, true)}>
        Rotate Back Anti-Clockwise
      </button>
    </>
  );
};

export default Controls;
