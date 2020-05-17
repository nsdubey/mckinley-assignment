import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Messages from "./containers/Messages";
import Login from "./containers/Login";

const Routes = props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/messages" component={Messages} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
