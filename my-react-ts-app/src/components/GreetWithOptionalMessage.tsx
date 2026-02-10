type GreetWithOptionalMessageProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const GreetWithOptionalMessage = (props: GreetWithOptionalMessageProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Hey Welcome back ${props.name}, You have ${messageCount} unreadd messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};

export default GreetWithOptionalMessage;
