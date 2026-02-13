import "./App.css";
import CustomButton from "./components/html/CustomButton";
import CustomInput from "./components/html/CustomInput";

function App() {
  return (
    <div id="root">
      <CustomButton
        variant="primary"
        onClick={() => {
          console.log("clicked");
        }}
      >
       {/* <div>Label</div> */}
       label
      </CustomButton>
      <CustomInput type="text" value={20}/>
    </div>
  );
}

export default App;
