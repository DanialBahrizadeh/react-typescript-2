import { FunctionComponent } from "react";

type CustomInputProps = React.ComponentProps<"input">;

const CustomInput: FunctionComponent<CustomInputProps> = (props) => {
  return <input {...props} />;
};

export default CustomInput;
