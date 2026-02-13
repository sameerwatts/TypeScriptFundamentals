type GreetWithOptionalMessageProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const GreetWithOptionalMessage = ({
  isLoggedIn,
  name,
  messageCount = 0,
}: GreetWithOptionalMessageProps) => {
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

export default GreetWithOptionalMessage;
