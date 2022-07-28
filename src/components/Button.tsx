import React from "react";

interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <button onClick={props.handleClick} type="button">
      Click
    </button>
  );
};

export default Button;
