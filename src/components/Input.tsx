interface InputProps {
  value: string;
  handleChagne: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FunctionComponent<InputProps> = (props) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.handleChagne}
      className="bg-black text-white border-none rounded-lg block mx-5 my-3 px-3 py-1"
    />
  );
};

export default Input;
