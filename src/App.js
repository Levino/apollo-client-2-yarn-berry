import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

export const QUERY = gql`
  {
    user {
      firstName
      lastName
    }
  }
`
function App() {
  const { loading, data } = useQuery(QUERY)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading ?
        <p>
         loading
        </p> : <p>First name: {data.user.firstName}</p>
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
