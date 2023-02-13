import "./Controls.scss";
import { CubeData } from "../../../app/types";
import {
  rotateFront,
  rotateLeft,
  rotateRight,
  rotateTop,
  rotateBottom,
  rotateBack,
} from "../../../Helpers/Rotations";
import RotateButton from "../rotate-button/RotateButton";

interface IProps {
  cubeData: CubeData;
  setCubeData: React.Dispatch<React.SetStateAction<CubeData>>;
}

const Controls = (props: IProps) => {
  const { cubeData, setCubeData } = props;
  return (
    <div className="controls">
      <RotateButton
        text="F"
        onClick={() => rotateFront(cubeData, setCubeData)}
      />
      <RotateButton
        text="F'"
        onClick={() => rotateFront(cubeData, setCubeData, true)}
      />
      <RotateButton
        text="L"
        onClick={() => rotateLeft(cubeData, setCubeData)}
      />
      <RotateButton
        text="L'"
        onClick={() => rotateLeft(cubeData, setCubeData, true)}
      />
      <RotateButton
        text="R"
        onClick={() => rotateRight(cubeData, setCubeData)}
      />
      <RotateButton
        text="R'"
        onClick={() => rotateRight(cubeData, setCubeData, true)}
      />
      <RotateButton text="U" onClick={() => rotateTop(cubeData, setCubeData)} />
      <RotateButton
        text="U'"
        onClick={() => rotateTop(cubeData, setCubeData, true)}
      />
      <RotateButton
        text="D"
        onClick={() => rotateBottom(cubeData, setCubeData)}
      />
      <RotateButton
        text="D'"
        onClick={() => rotateBottom(cubeData, setCubeData, true)}
      />
      <RotateButton
        text="B"
        onClick={() => rotateBack(cubeData, setCubeData)}
      />
      <RotateButton
        text="B'"
        onClick={() => rotateBack(cubeData, setCubeData, true)}
      />
    </div>
  );
};

export default Controls;
