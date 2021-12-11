import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import Navbar from 'core/components/Navbar';
import history from './core/utils/history';

const Routes = () => {

    return (
        <Router history={history}>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home text="Home Movieflix" />
                </Route>
                <Route path="/movies">
                    <Movies text="Movies" />
                </Route>
            </Switch>
        </Router>
    )
};

export default Routes;
