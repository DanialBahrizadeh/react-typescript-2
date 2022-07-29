import React, { FunctionComponent } from "react";
import Greet from "../Greet";

const CustomComponent: FunctionComponent<React.ComponentProps<typeof Greet>> = (
  props
) => {
  return <div>{props.isLogged && props.name}</div>;
};

export default CustomComponent;
