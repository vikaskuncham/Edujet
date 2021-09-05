import Header from "./Header/Header";
import "./App.scss";
import Countries from "./Countries/Countries";

function App() {
  return (
    <div className={"mainClass"}>
      <Header></Header>
      <Countries />
    </div>
  );
}

export default App;
