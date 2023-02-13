import { MouseEventHandler } from "react";

interface IProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const RotateButton = (props: IProps) => {
  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
};

export default RotateButton;
