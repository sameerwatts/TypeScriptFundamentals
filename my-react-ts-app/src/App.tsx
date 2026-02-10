import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div id="root">
      <Button
        handleClick={(e) => {
          console.log("button clicked", e);
        }}
      />
    </div>
  );
}

export default App;
