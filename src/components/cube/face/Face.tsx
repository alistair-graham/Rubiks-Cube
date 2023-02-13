import { Colour } from "../../../app/types";
import Square from "../square/Square";

interface IProps {
  cubeData?: Array<Colour>;
}

const Face = (props: IProps) => {
  const { cubeData } = props;

  if (!cubeData) {
    return <div className="face blank-face" />;
  }

  return (
    <div className="face">
      <div className="face-row">
        <Square colour={cubeData[0]} />
        <Square colour={cubeData[1]} />
        <Square colour={cubeData[2]} />
      </div>
      <div className="face-row">
        <Square colour={cubeData[3]} />
        <Square colour={cubeData[4]} />
        <Square colour={cubeData[5]} />
      </div>
      <div className="face-row">
        <Square colour={cubeData[6]} />
        <Square colour={cubeData[7]} />
        <Square colour={cubeData[8]} />
      </div>
    </div>
  );
};

export default Face;
