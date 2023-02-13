import { Colour, CubeData } from "../app/types";

export const rotateFront = (
  cubeData: CubeData,
  setCubeData: React.Dispatch<React.SetStateAction<CubeData>>,
  antiClock?: boolean
) => {
  const newFrontFace = Array<Colour>(9);
  const newTopFace = [...cubeData[0]];
  const newRightFace = [...cubeData[3]];
  const newBottomFace = [...cubeData[5]];
  const newLeftFace = [...cubeData[1]];

  rotateFace(newFrontFace, cubeData[2], antiClock);

  newTopFace[6] = antiClock ? cubeData[3][0] : cubeData[1][8];
  newTopFace[7] = antiClock ? cubeData[3][3] : cubeData[1][5];
  newTopFace[8] = antiClock ? cubeData[3][6] : cubeData[1][2];

  newRightFace[0] = antiClock ? cubeData[5][2] : cubeData[0][6];
  newRightFace[3] = antiClock ? cubeData[5][1] : cubeData[0][7];
  newRightFace[6] = antiClock ? cubeData[5][0] : cubeData[0][8];

  newBottomFace[0] = antiClock ? cubeData[1][2] : cubeData[3][6];
  newBottomFace[1] = antiClock ? cubeData[1][5] : cubeData[3][3];
  newBottomFace[2] = antiClock ? cubeData[1][8] : cubeData[3][0];

  newLeftFace[2] = antiClock ? cubeData[0][8] : cubeData[5][0];
  newLeftFace[5] = antiClock ? cubeData[0][7] : cubeData[5][1];
  newLeftFace[8] = antiClock ? cubeData[0][6] : cubeData[5][2];

  setCubeData([
    newTopFace,
    newLeftFace,
    newFrontFace,
    newRightFace,
    cubeData[4],
    newBottomFace,
  ]);
};

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

const rotateFace = (
  newFace: Array<Colour>,
  oldFace: Array<Colour>,
  antiClock?: boolean
) => {
  newFace[0] = oldFace[antiClock ? 2 : 6];
  newFace[1] = oldFace[antiClock ? 5 : 3];
  newFace[2] = oldFace[antiClock ? 8 : 0];
  newFace[3] = oldFace[antiClock ? 1 : 7];
  newFace[4] = oldFace[4];
  newFace[5] = oldFace[antiClock ? 7 : 1];
  newFace[6] = oldFace[antiClock ? 0 : 8];
  newFace[7] = oldFace[antiClock ? 3 : 5];
  newFace[8] = oldFace[antiClock ? 6 : 2];
};
