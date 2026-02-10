import type { Name } from "./Person.types";

type PersonListProps = {
  nameList: Name[];
};

const PersonList = ({ nameList }: PersonListProps) => {
  return (
    <div>
      {nameList.map((person) => (
        <h2 key={person.first}>
          {person.first} {person.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
