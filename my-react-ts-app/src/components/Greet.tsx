type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = ({ isLoggedIn, messageCount, name }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Hey Welcome back ${name}, You have ${messageCount} unreadd messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};

export default Greet;
