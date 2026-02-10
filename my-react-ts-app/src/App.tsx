import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div id="root">
      <Button
        handleClick={(e, id) => {
          console.log("button clicked", e);
          console.log("button clicked id", id);
        }}
      />
    </div>
  );
}

export default App;
