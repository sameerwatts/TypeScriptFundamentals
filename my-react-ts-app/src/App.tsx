import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
// import MutableRef from "./components/ref/MutableRef";

function App() {
  return <div id="root">
    {/* <MutableRef /> */}
    <Private isLoggedIn={true} Component={Profile}/>
  </div>;
}

export default App;
