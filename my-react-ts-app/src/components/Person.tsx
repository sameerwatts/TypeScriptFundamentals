type personProp = {
  name: { first: string; last: string };
};
const Person = ({ name }: personProp) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};

export default Person;
