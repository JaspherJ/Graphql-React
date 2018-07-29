import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList'
const client = new ApolloClient({});


const Root = () => {
  return (
    <ApolloProvider client={client}>
  <SongList/>
  </ApolloProvider>
);
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
