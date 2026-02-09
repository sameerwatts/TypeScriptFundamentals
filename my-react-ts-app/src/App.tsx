import Greet from "./components/Greet";
import "./App.css";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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
    </div>
  );
}

export default App;
