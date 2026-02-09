type PersonListProps = {
    nameList: {first: string, last: string}[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props?.nameList.map((person) => (
        <h2 key={person.first}>{person.first} {person.last}</h2>
      ))}
    </div>
  );
};

export default PersonList;
