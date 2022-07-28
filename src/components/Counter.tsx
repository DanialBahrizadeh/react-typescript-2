import { useReducer } from "react";
interface Count {
  count: number;
}

interface UpdateAction {
  type: "increment" | "decrement";
  payload: number;
}

interface ResetAction {
  type: "reset";
}

type Action = UpdateAction | ResetAction;

const defaultValue: Count = { count: 0 };

const reducer = (state: Count, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return defaultValue;
    default:
      return state;
  }
};

const Counter: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  return (
    <div className=" [&>button]:bg-blue-500 [&>button]:px-3 [&>button]:py-1 [&>button]:rounded-lg [&>button]:text-white flex gap-5  items-center ">
      <span>count: {state.count}</span>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
