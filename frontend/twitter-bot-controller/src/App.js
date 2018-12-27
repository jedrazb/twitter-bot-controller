// @flow

import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import Routes from "./routers/MainRouter";

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cjq73i6ke8iyp01857yl9nk71"
  }),
  cache: new InMemoryCache()
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route component={Routes} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
