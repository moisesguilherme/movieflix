import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home text="Home Movieflix" />
                </Route>
                <Route path="/movies">
                    <Movies text="Movies" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;
