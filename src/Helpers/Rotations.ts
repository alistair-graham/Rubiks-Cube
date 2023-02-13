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

export const rotateRight = (
  cubeData: CubeData,
  setCubeData: React.Dispatch<React.SetStateAction<CubeData>>,
  antiClock?: boolean
) => {
  const newRightFace = Array<Colour>(9);
  const newTopFace = [...cubeData[0]];
  const newFrontFace = [...cubeData[2]];
  const newBottomFace = [...cubeData[5]];
  const newBackFace = [...cubeData[4]];

  rotateFace(newRightFace, cubeData[3], antiClock);

  newTopFace[2] = antiClock ? cubeData[4][6] : cubeData[2][2];
  newTopFace[5] = antiClock ? cubeData[4][3] : cubeData[2][5];
  newTopFace[8] = antiClock ? cubeData[4][0] : cubeData[2][8];

  newFrontFace[2] = antiClock ? cubeData[0][2] : cubeData[5][2];
  newFrontFace[5] = antiClock ? cubeData[0][2] : cubeData[5][5];
  newFrontFace[8] = antiClock ? cubeData[0][2] : cubeData[5][8];

  newBottomFace[2] = antiClock ? cubeData[2][2] : cubeData[4][6];
  newBottomFace[5] = antiClock ? cubeData[2][5] : cubeData[4][3];
  newBottomFace[8] = antiClock ? cubeData[2][8] : cubeData[4][0];

  newBackFace[0] = antiClock ? cubeData[5][8] : cubeData[0][8];
  newBackFace[3] = antiClock ? cubeData[5][5] : cubeData[0][5];
  newBackFace[6] = antiClock ? cubeData[5][2] : cubeData[0][2];

  setCubeData([
    newTopFace,
    cubeData[1],
    newFrontFace,
    newRightFace,
    newBackFace,
    newBottomFace,
  ]);
};

export const rotateLeft = (
  cubeData: CubeData,
  setCubeData: React.Dispatch<React.SetStateAction<CubeData>>,
  antiClock?: boolean
) => {
  const newLeftFace = Array<Colour>(9);
  const newTopFace = [...cubeData[0]];
  const newFrontFace = [...cubeData[2]];
  const newBottomFace = [...cubeData[5]];
  const newBackFace = [...cubeData[4]];

  rotateFace(newLeftFace, cubeData[1], antiClock);

  newTopFace[0] = antiClock ? cubeData[2][0] : cubeData[4][8];
  newTopFace[3] = antiClock ? cubeData[2][3] : cubeData[4][5];
  newTopFace[6] = antiClock ? cubeData[2][6] : cubeData[4][2];

  newFrontFace[0] = antiClock ? cubeData[5][0] : cubeData[0][0];
  newFrontFace[3] = antiClock ? cubeData[5][3] : cubeData[0][3];
  newFrontFace[6] = antiClock ? cubeData[5][6] : cubeData[0][6];

  newBottomFace[0] = antiClock ? cubeData[4][8] : cubeData[2][0];
  newBottomFace[3] = antiClock ? cubeData[4][5] : cubeData[2][3];
  newBottomFace[6] = antiClock ? cubeData[4][2] : cubeData[2][6];

  newBackFace[2] = antiClock ? cubeData[0][6] : cubeData[5][6];
  newBackFace[5] = antiClock ? cubeData[0][3] : cubeData[5][3];
  newBackFace[8] = antiClock ? cubeData[0][0] : cubeData[5][0];

  setCubeData([
    newTopFace,
    newLeftFace,
    newFrontFace,
    cubeData[3],
    newBackFace,
    newBottomFace,
  ]);
};

export const rotateTop = (
  cubeData: CubeData,
  setCubeData: React.Dispatch<React.SetStateAction<CubeData>>,
  antiClock?: boolean
) => {
  const newTopFace = Array<Colour>(9);
  const newLeftFace = [...cubeData[1]];
  const newFrontFace = [...cubeData[2]];
  const newRightFace = [...cubeData[3]];
  const newBackFace = [...cubeData[4]];

  rotateFace(newTopFace, cubeData[0], antiClock);

  newLeftFace[0] = antiClock ? cubeData[4][0] : cubeData[2][0];
  newLeftFace[1] = antiClock ? cubeData[4][1] : cubeData[2][1];
  newLeftFace[2] = antiClock ? cubeData[4][2] : cubeData[2][2];

  newFrontFace[0] = antiClock ? cubeData[1][0] : cubeData[3][0];
  newFrontFace[1] = antiClock ? cubeData[1][1] : cubeData[3][1];
  newFrontFace[2] = antiClock ? cubeData[1][2] : cubeData[3][2];

  newRightFace[0] = antiClock ? cubeData[2][0] : cubeData[4][0];
  newRightFace[1] = antiClock ? cubeData[2][1] : cubeData[4][1];
  newRightFace[2] = antiClock ? cubeData[2][2] : cubeData[4][2];

  newBackFace[0] = antiClock ? cubeData[3][0] : cubeData[1][0];
  newBackFace[1] = antiClock ? cubeData[3][1] : cubeData[1][1];
  newBackFace[2] = antiClock ? cubeData[3][2] : cubeData[1][2];

  setCubeData([
    newTopFace,
    newLeftFace,
    newFrontFace,
    newRightFace,
    newBackFace,
    cubeData[5],
  ]);
};

export const rotateBottom = (
  cubeData: CubeData,
  setCubeData: React.Dispatch<React.SetStateAction<CubeData>>,
  antiClock?: boolean
) => {
  const newBottomFace = Array<Colour>(9);
  const newLeftFace = [...cubeData[1]];
  const newFrontFace = [...cubeData[2]];
  const newRightFace = [...cubeData[3]];
  const newBackFace = [...cubeData[4]];

  rotateFace(newBottomFace, cubeData[5], antiClock);

  newLeftFace[6] = antiClock ? cubeData[2][6] : cubeData[4][6];
  newLeftFace[7] = antiClock ? cubeData[2][7] : cubeData[4][7];
  newLeftFace[8] = antiClock ? cubeData[2][8] : cubeData[4][8];

  newFrontFace[6] = antiClock ? cubeData[3][6] : cubeData[1][6];
  newFrontFace[7] = antiClock ? cubeData[3][7] : cubeData[1][7];
  newFrontFace[8] = antiClock ? cubeData[3][8] : cubeData[1][8];

  newRightFace[6] = antiClock ? cubeData[4][6] : cubeData[2][6];
  newRightFace[7] = antiClock ? cubeData[4][7] : cubeData[2][7];
  newRightFace[8] = antiClock ? cubeData[4][8] : cubeData[2][8];

  newBackFace[6] = antiClock ? cubeData[1][6] : cubeData[3][6];
  newBackFace[7] = antiClock ? cubeData[1][7] : cubeData[3][7];
  newBackFace[8] = antiClock ? cubeData[1][8] : cubeData[3][8];

  setCubeData([
    cubeData[0],
    newLeftFace,
    newFrontFace,
    newRightFace,
    newBackFace,
    newBottomFace,
  ]);
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
