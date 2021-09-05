import Header from "./Header/Header";
import "./App.scss";
import Countries from "./Countries/Countries";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className={"mainClass"}>
      <Header></Header>
      <Countries />
      <Footer />
    </div>
  );
}

export default App;
