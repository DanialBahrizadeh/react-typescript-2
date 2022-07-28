import React from "react";
interface CounterClassProps {
  message: string;
}

interface CounterClassState {
  count: number;
}

class CounterClass extends React.Component<
  CounterClassProps,
  CounterClassState
> {
  state = { count: 0 };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className="bg-blue-500 px-3 py-1 rounded-lg text-white block my-1"
        >
          Increment
        </button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default CounterClass;
