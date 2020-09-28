import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
function App() {
  const { loading } = useQuery(gql`
  {
    user(id: 5) {
      firstName
      lastName
    }
  }
`)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!loading &&
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
