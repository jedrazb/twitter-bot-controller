// @flow

import * as React from "react";

import { Link, withRouter } from "react-router-dom";

class NavLinks extends React.Component {
  render() {
    return (
      <div className="NavLinks__wrapper">
        <div className="NavLinks__content">
          <Link to="/home/new">New</Link>
          <Link to="/home/accepted">Accepted</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(NavLinks);
