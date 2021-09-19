import Header from "./Header/Header";
import "./App.scss";

import ServicesHomePage from "./ServicesHomePage/ServicesHomePage";
import Countries from "./Countries/Countries";
import Footer from "./Footer/Footer";
import Carousel from "./Carousel/Carousel";

function App() {
  return (
    <div className={"mainClass"}>
      <Header></Header>
      <Carousel />
      <ServicesHomePage />
      <Countries />
      <Footer />
    </div>
  );
}

export default App;
