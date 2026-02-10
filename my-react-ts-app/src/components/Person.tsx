import type { personProp } from "./Person.types";
const Person = ({ name }: personProp) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};

export default Person;
