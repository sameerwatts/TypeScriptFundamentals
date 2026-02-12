import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/genetics/List";
// import MutableRef from "./components/ref/MutableRef";

function App() {
  return (
    <div id="root">
      {/* <MutableRef /> */}
      {/* <Private isLoggedIn={true} Component={Profile}/> */}
      <List
        items={["Batman", "Superman", "Wonder Women"]}
        handleListItemClick={(item) => console.log(item)}
        renderItem={(user) => user}
        />
      <List
        items={[1, 2, 3]}
        handleListItemClick={(item) => console.log(item)}
        renderItem={(user) => user}
      />
      <List
        items={[
          { id: 1, first: "Sameer", last: "Watts" },
          { id: 2, first: "Paru", last: "Kukkar" },
        ]}
        handleListItemClick={(item) => console.log(item)}
        renderItem={(user) => `${user.first} ${user.last}`}
      />
    </div>
  );
}

export default App;
