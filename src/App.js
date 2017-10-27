import React, { Component } from 'react';
import logo from './logo.svg';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';
import ProductGrid from './components/ProductGrid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <RaisedButton>Test</RaisedButton>
        </p>
        <div>
          <ProductGrid />
        </div>
      </div>
    );
  }
}

export default App;
