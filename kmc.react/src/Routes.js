import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import NewProduct from "./containers/NewProduct/NewProduct";
import NotFound from "./containers/NotFound/NotFound";

import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <UnauthenticatedRoute exact path="/login">
                <Login />
            </UnauthenticatedRoute>
            <UnauthenticatedRoute exact path="/signup">
                <Signup />
            </UnauthenticatedRoute>
            <AuthenticatedRoute exact path="/products/new">
                <NewProduct />
            </AuthenticatedRoute>
            { /* Finally, catch all unmatched routes */ }
            <Route component={NotFound} />
        </Switch>
    );
}
