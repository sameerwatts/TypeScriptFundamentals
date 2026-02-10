import "./App.css";
import Container from "./components/Container";
import GreetWithOptionalMessage from "./components/GreetWithOptionalMessage";

function App() {
  return (
    <div id="root">
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <GreetWithOptionalMessage isLoggedIn={true} name="Sam" />
    </div>
  );
}

export default App;
