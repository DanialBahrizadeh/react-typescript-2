import { FunctionComponent } from "react";

/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "cetner" | "center-top" |
 * "center-bottom" | "right-center" | "rigth-top" | "right-bottom"
 */

type HorizaontalPosition = "left" | "center" | "right";
type VerticalPositoin = "top" | "center" | "bottom";

interface ToastProps {
  position:
    | Exclude<`${VerticalPositoin}-${HorizaontalPosition}`, "center-center">
    | "center";
}

const Toast: FunctionComponent<ToastProps> = (props) => {
  return <div>Toast Notification Position - {props.position}</div>;
};

export default Toast;
