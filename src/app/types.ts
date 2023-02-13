export enum Colour {
  Red = "red",
  Green = "green",
  Blue = "blue",
  Orange = "orange",
  Yellow = "yellow",
  White = "white",
}

type Face = Array<Colour>;
export type CubeData = Array<Face>;

export const INITIAL_STATE: CubeData = [
  Array<Colour>(9).fill(Colour.Orange),
  Array<Colour>(9).fill(Colour.Green),
  [
    Colour.Blue,
    Colour.Orange,
    Colour.Blue,
    Colour.Red,
    Colour.White,
    Colour.Orange,
    Colour.Yellow,
    Colour.Green,
    Colour.Blue,
  ],
  Array<Colour>(9).fill(Colour.Red),
  Array<Colour>(9).fill(Colour.Blue),
  Array<Colour>(9).fill(Colour.Yellow),
];
