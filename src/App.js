import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import "./App.scss";

import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Services from "./Services/Services";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./AboutUs/AboutUs";

const App = props => {
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
