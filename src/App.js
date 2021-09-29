import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";

const App = props => {
  return (
    <div className={"mainClass"} id="edujet">
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
