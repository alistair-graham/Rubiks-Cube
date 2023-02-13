import { render, screen } from "@testing-library/react";
import Square from "./Square";
import { Colour } from "../../../app/types";
import theoretically from "jest-theories";

describe("<Square />", () => {
  const colourTheories = [
    Colour.Red,
    Colour.Blue,
    Colour.Green,
    Colour.Orange,
    Colour.Yellow,
    Colour.White,
  ];

  theoretically(
    "it renders the correct colour",
    colourTheories,
    (colour: Colour) => {
      render(<Square colour={colour} />);

      const squareCell = screen.getByTestId("square-cell");

      expect(squareCell).toHaveStyle(`background: ${colour}`);
    }
  );
});
