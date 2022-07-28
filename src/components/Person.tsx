import PersonNameModel from "../model/PersonNameModel";

interface PersonProps {
  personName: PersonNameModel;
}

const Person: React.FunctionComponent<PersonProps> = (props) => {
  const fullName = `${props.personName.name} ${props.personName.lastName}`;
  return <div>{fullName}</div>;
};

export default Person;
