// @flow

import * as React from "react";
import { Query } from "react-apollo";

import Post from "./post/Post";

import { GET_PENDING_POSTS } from "../query";

class NewPosts extends React.Component {
  render() {
    return (
      <Query query={GET_PENDING_POSTS}>
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

export default NewPosts;
