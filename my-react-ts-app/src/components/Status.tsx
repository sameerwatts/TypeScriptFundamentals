type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = ({ status }: StatusProps) => {
  let message;
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data Fetched Successfully!";
  } else if (status === "error") {
    message = "Error Fetching data";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Status;
