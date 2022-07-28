export interface ProfileProps {
  name: string;
}
const Profile: React.FunctionComponent<ProfileProps> = (props) => {
  return <div>Private Profile component, name is {props.name}</div>;
};

export default Profile;
