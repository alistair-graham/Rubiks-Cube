import { Colour } from "../../../app/types";
import "./Cube.scss";
import Face from "../face/Face";

const Cube = () => {
  return (
    <div className="cube-container">
      <div className="cube-container-row">
        <Face
          colourArray={[
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
          ]}
        />
        <Face
          colourArray={[
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
          ]}
        />
        <Face
          colourArray={[
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
          ]}
        />
        <Face
          colourArray={[
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
            Colour.Blue,
          ]}
        />
      </div>
      <div className="cube-container-row">
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
      </div>
      <div className="cube-container-row">
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
      </div>
    </div>
  );
};

export default Cube;
