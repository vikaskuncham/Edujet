import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import "./App.scss";

import ServicesHomePage from "./ServicesHomePage/ServicesHomePage";
import Countries from "./Countries/Countries";
import Footer from "./Footer/Footer";
import Carousel from "./Carousel/Carousel";
import Home from "./Home/Home";
import Services from "./Services/Services";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./AboutUs/AboutUs";

const App = props => {
  console.log(props);

  return (
    <div className={"mainClass"}>
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
        </Switch>
        {/* <Carousel />
      <ServicesHomePage />
      <Countries /> */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
