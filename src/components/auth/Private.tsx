import Login from "./Login";
import { ProfileProps as ComponentType } from "./Profile";

interface PrivateProps {
  isLogged: boolean;
  Component: React.ComponentType<ComponentType>;
}

const Private: React.FunctionComponent<PrivateProps> = (props) => {
  return props.isLogged ? <props.Component name="Danial" /> : <Login />;
};

export default Private;
