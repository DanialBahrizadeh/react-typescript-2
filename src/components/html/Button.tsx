import { FunctionComponent } from "react";

interface CustomButtonProps extends React.ComponentProps<"button"> {
  variant: "primary" | "secondary";
  children: string;
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  variant,
  children,
  ...rest
}) => {
  return (
    <button className={variant} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
