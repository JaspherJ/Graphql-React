import React from "react";
import "./style/style.css";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import App from "./components/App";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <route path="songs/new" component={SongCreate} />
          <route path="songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
