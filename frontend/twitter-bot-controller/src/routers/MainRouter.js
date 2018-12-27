// @flow

import * as React from "react";
import { Redirect, Switch, withRouter, Route } from "react-router-dom";

import Home from "../components/Home";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" />
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

export default Routes;
