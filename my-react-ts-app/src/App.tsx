import Greet from "./components/Greet";
import "./App.css";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import GreetWithOptionalMessage from "./components/GreetWithOptionalMessage";

function App() {
  const person = {
    first: "Sameer",
    last: "Watts",
  };

  const personList = [
    { first: "Sameer", last: "Watts" },
    { first: "Ashu", last: "Khurana" },
    { first: "Paru", last: "Kukkar" },
  ];

  return (
    <div id="root">
      <Greet name="Sameer" messageCount={10} isLoggedIn={true} />
      <Person name={person} />
      <PersonList nameList={personList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Sameer Watts</Heading>
      </Oscar>
      <GreetWithOptionalMessage name="Sameer" isLoggedIn={true} />
    </div>
  );
}

export default App;
