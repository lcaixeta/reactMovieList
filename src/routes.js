import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home/home";
import { MovieInfo } from "./pages/movieInfo/movieInfo"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const Routes = () => (
  <BrowserRouter>
    {/* <Header/> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movieInfo" component={MovieInfo} />
    </Switch>
    <Footer/>
  </BrowserRouter>
);

export default Routes;