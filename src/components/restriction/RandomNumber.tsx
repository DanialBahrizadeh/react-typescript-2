import { FunctionComponent } from "react";

type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never | false;
  isZero?: never | false;
};
type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never | false;
  isZero?: never | false;
};
type ZeroNumber = RandomNumberType & {
  isZero: boolean;
  isNegative?: never | false;
  isPositive?: never | false;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber;

const RandomNumber: FunctionComponent<RandomNumberProps> = (props) => {
  return (
    <div>
      {props.value} {props.isPositive && "positive"}{" "}
      {props.isNegative && "negative"} {props.isZero && "zero"}
    </div>
  );
};

export default RandomNumber;
