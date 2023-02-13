import { CubeData } from "../../app/types";
import { rotateFront, rotateRightClockwise } from "../../Helpers/Rotations";

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
    </>
  );
};

export default Controls;
