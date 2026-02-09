import Greet from "./components/Greet"
import './App.css';
import Person from "./components/Person";


function App() {

  const person = {
    first: 'Sameer',
    last: 'Watts'
  }

  return (
    <div id="root">
     <Greet name="Sameer" messageCount={10} isLoggedIn={true} />
     <Person name={person} />
    </div>
  )
}

export default App
