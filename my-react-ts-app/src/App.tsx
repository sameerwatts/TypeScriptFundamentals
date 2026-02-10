import "./App.css";
import Container from "./components/Container";
import GreetWithOptionalMessage from "./components/GreetWithOptionalMessage";
import Person from "./components/Person";

function App() {
  return (
    <div id="root">
      <Person name={{first: 'Sameer', last: 'Watts'}} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <GreetWithOptionalMessage isLoggedIn={true} name="Sam" />
    </div>
  );
}

export default App;
