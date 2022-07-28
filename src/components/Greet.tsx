interface GreetProps {
  name: string;
  messageCount: number;
  isLogged: boolean;
}

const Greet: React.FunctionComponent<GreetProps> = (props) => {
  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-lg">
        {props.isLogged
          ? `Welcome ${props.name} You have ${props.messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
