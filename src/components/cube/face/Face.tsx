import { Colour } from "../../../app/types";

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
        <div className="square" style={{ backgroundColor: cubeData[0] }}></div>
        <div className="square" style={{ backgroundColor: cubeData[1] }}></div>
        <div className="square" style={{ backgroundColor: cubeData[2] }}></div>
      </div>
      <div className="face-row">
        <div className="square" style={{ backgroundColor: cubeData[3] }}></div>
        <div className="square" style={{ backgroundColor: cubeData[4] }}></div>
        <div className="square" style={{ backgroundColor: cubeData[5] }}></div>
      </div>
      <div className="face-row">
        <div className="square" style={{ backgroundColor: cubeData[6] }}></div>
        <div className="square" style={{ backgroundColor: cubeData[7] }}></div>
        <div className="square" style={{ backgroundColor: cubeData[8] }}></div>
      </div>
    </div>
  );
};

export default Face;
