import React, { useState } from "react";
import Workouts from './components/Workouts';
import BuildWorkout from './pages/BuildWorkout';
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path='/dashboard'
            element={<Dashboard />}
          />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route
            path='/builder'
            element={<BuildWorkout />}
          />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route
            path='/login'
            element={<Login/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
    </ApolloProvider>
  );
}

export default App;
