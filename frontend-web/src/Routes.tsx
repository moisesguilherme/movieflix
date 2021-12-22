import React from 'react';
import { Redirect, Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import Navbar from 'core/components/Navbar';
import history from './core/utils/history';
import MovieDetails from './pages/Movies/components/MovieDetails';
import PrivateRoute from 'core/components/Routes/PrivateRoute';
import { isAuthenticated } from "./core/utils/auth";

const Routes = () => {

    return (
        <Router history={history}>
            <Navbar />
            <Switch>
            <Redirect from="/" to="/login" exact />
                <Route
                    path="/login"
                    render={() => {
                    return (isAuthenticated() ?
                        <Redirect to='/movies' /> : <Home text="Home Movieflix" />
                    )
                    }}
                />

                <PrivateRoute path="/movies" exact>
                    <Movies />
                </PrivateRoute>
                <PrivateRoute path="/movies/:movieId">
                    <MovieDetails/>
                </PrivateRoute>
            </Switch>
        </Router>
    )
};

export default Routes;
