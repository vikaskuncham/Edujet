// import Header from "./Header/Header";
import "./Home.scss";

import ServicesHomePage from "../ServicesHomePage/ServicesHomePage";
import Countries from "../Countries/Countries";
// import Footer from "./Footer/Footer";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <div className={"home"}>
      <Carousel />
      <ServicesHomePage />
      <Countries />
    </div>
  );
};

export default Home;
