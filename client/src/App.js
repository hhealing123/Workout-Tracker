import React, { useState } from "react";
import Workouts from './components/Workouts';
import BuildWorkout from './pages/BuildWorkout';
import Dashboard from './pages/Dashboard'
import TodaysWorkout from './pages/TodaysWorkout';
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import { Register } from "./components/Register";
// import { Login } from "./components/LoginComponent";


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
  const [currentForm, setCurrentForm] = useState('Login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <ApolloProvider client={client}>

  {/* <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
     */}

      <div className="container">
        <Router>
          <Routes>

   
          <Route
              path='/'
              element={<Login />}
            />
            <Route
              path='/dashboard'
              element={<Dashboard />}
            />
            <Route
              path='/builder'
              element={<BuildWorkout />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/todaysworkout'
              element={<TodaysWorkout />}
            />
            <Route
              path='/register'
              element={<RegisterPage />}
            />
          </Routes>
        </Router>

      </div>
    </ApolloProvider>
  );
  }

export default App;

    