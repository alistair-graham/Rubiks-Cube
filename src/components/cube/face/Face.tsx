import { Colour } from "../../../app/types";

interface IProps {
  colourArray: ReadonlyArray<Colour>;
}

const Face = (props: IProps) => {
  const { colourArray } = props;

  return (
    <div className="face">
      <div className="face-row">
        <div
          className="square"
          style={{ backgroundColor: colourArray[0] }}
        ></div>
        <div
          className="square"
          style={{ backgroundColor: colourArray[1] }}
        ></div>
        <div
          className="square"
          style={{ backgroundColor: colourArray[2] }}
        ></div>
      </div>
      <div className="face-row">
        <div
          className="square"
          style={{ backgroundColor: colourArray[3] }}
        ></div>
        <div
          className="square"
          style={{ backgroundColor: colourArray[4] }}
        ></div>
        <div
          className="square"
          style={{ backgroundColor: colourArray[5] }}
        ></div>
      </div>
      <div className="face-row">
        <div
          className="square"
          style={{ backgroundColor: colourArray[6] }}
        ></div>
        <div
          className="square"
          style={{ backgroundColor: colourArray[7] }}
        ></div>
        <div
          className="square"
          style={{ backgroundColor: colourArray[8] }}
        ></div>
      </div>
    </div>
  );
};

export default Face;
