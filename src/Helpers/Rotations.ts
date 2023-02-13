import { Colour, CubeData } from "../app/types";

export const rotateFrontClockwise = (
  cubeData: CubeData,
  setCubeData: React.Dispatch<React.SetStateAction<CubeData>>
) => {
  const newCubeData = [...cubeData];

  const newFrontFace = Array<Colour>(9);
  rotateFaceClockwise(newFrontFace, cubeData[2]);

  const newTopFace = [...cubeData[0]];
  const newRightFace = [...cubeData[3]];
  const newBottomFace = [...cubeData[5]];
  const newLeftFace = [...cubeData[1]];

  newTopFace[6] = cubeData[1][8];
  newTopFace[7] = cubeData[1][5];
  newTopFace[8] = cubeData[1][2];

  newRightFace[0] = cubeData[0][6];
  newRightFace[3] = cubeData[0][7];
  newRightFace[6] = cubeData[0][8];

  newBottomFace[0] = cubeData[3][6];
  newBottomFace[1] = cubeData[3][3];
  newBottomFace[2] = cubeData[3][0];

  newLeftFace[2] = cubeData[5][0];
  newLeftFace[5] = cubeData[5][1];
  newLeftFace[8] = cubeData[5][2];

  newCubeData[2] = newFrontFace;
  newCubeData[0] = newTopFace;
  newCubeData[3] = newRightFace;
  newCubeData[5] = newBottomFace;
  newCubeData[1] = newLeftFace;

  setCubeData(newCubeData);
};

const rotateFaceClockwise = (
  newFace: Array<Colour>,
  oldFace: Array<Colour>
) => {
  newFace[0] = oldFace[6];
  newFace[1] = oldFace[3];
  newFace[2] = oldFace[0];
  newFace[3] = oldFace[7];
  newFace[4] = oldFace[4];
  newFace[5] = oldFace[1];
  newFace[6] = oldFace[8];
  newFace[7] = oldFace[5];
  newFace[8] = oldFace[2];
};
