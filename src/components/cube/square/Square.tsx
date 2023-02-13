import "./Square.scss";
import { Colour } from "../../../app/types";

interface IProps {
  colour: Colour;
}

const Square = (props: IProps) => {
  return <div className="square" style={{ backgroundColor: props.colour }} />;
};

export default Square;
