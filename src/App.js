import React from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from "react-router";
import history from './history'
import { Home } from "./pages/home/home";
import MovieInfo from "./pages/movieInfo/movieInfo"

const App = () => 
<BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movieInfo" component={MovieInfo} />
    </Switch>
</BrowserRouter>;
export default App;