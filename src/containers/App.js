import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import SecurityForm from './SecurityForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to your Homesecurity device settings app!</h1>
        </header>
        <SecurityForm />
      </div>
    );
  }
}

export default App;
