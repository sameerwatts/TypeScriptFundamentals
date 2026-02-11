import "./App.css";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/Usercontext";
// import Box from "./components/context/Box";
// import { ThemeContextProvider } from "./components/context/ThemeContext";


function App() {
  return <div id="root">
    {/* <ThemeContextProvider><Box/></ThemeContextProvider> */}
    <UserContextProvider>
      <User />
    </UserContextProvider>
  </div>;
}

export default App;
