import PersonNameModel from "../model/PersonNameModel";
import Person from "./Person";
import { nanoid } from "nanoid";
interface PersonListProps {
  personNames: PersonNameModel[];
}

const PersonList: React.FunctionComponent<PersonListProps> = (props) => {
  const persons = props.personNames.map((person) => (
    <Person key={nanoid()} personName={person} />
  ));
  return <div>{persons}</div>;
};

export default PersonList;
