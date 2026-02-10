import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div id="root">
      <Button
        handleClick={(e, id) => {
          console.log("button clicked", e);
          console.log("button clicked id", id);
        }}
      />
      <Input value="" handleChange={(e) => console.log(e)} />
    </div>
  );
}

export default App;
