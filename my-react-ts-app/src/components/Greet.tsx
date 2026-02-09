type GreetProps = {
  name: string;
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Hey Welcome back {props.name}, You have 10 unreadd messages</h2>
    </div>
  );
};

export default Greet;
