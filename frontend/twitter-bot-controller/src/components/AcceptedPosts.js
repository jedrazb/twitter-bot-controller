// @flow

import * as React from "react";
import { Query } from "react-apollo";

import Post from "./Post";

import { GET_ACCEPTED_POSTS } from "../query";

class AcceptedPosts extends React.Component {
  render() {
    console.log("here");
    return (
      <Query query={GET_ACCEPTED_POSTS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          console.log(data);
          return data.allPosts.map(post => <Post {...post} />);
        }}
      </Query>
    );
  }
}

export default AcceptedPosts;
