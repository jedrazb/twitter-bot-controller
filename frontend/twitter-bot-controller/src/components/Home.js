// @flow

import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./Header";
import NavLinks from "./NavLinks";
import NewPosts from "./NewPosts";
import AcceptedPosts from "./AcceptedPosts";

import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home__wrapper">
        <Header />
        <div className="Home__content__wrapper">
          <NavLinks />
          <Switch>
            <Route path="/home/new" component={NewPosts} />
            <Route path="/home/accepted" component={AcceptedPosts} />
            <Redirect to="/home/new" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
