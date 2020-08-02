import React from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from "react-router";
import history from './history'
import Home from "./pages/home/home";
import MovieInfo from "./pages/movieInfo/movieInfo"
import FullPageLoader from "./components/FullPageLoader/fullPageLoader"
import {withRouter} from 'react-router';
import { Provider } from "react-redux";
import configureStore from "./store";


const App = () => 
<Provider store={configureStore()}>
    <BrowserRouter history={history}>
        <Switch>
        <Route exact path="/" component={withRouter(Home)} />
        <Route path="/movieInfo" component={withRouter(MovieInfo)} />
        </Switch>
    </BrowserRouter>
    <FullPageLoader/>
</Provider>;
export default App;