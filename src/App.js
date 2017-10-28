import React, { Component } from 'react';
import logo from './logo.svg';
// import RaisedButton from 'material-ui/RaisedButton';
import './App.css';
import ProductGrid from './components/ProductGrid'
import AccessoriesGrid from './components/AccessoriesGrid'
import ShoppingList from './components/ShoppingList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <p className="App-intro">
          </p>
        </div>
        <div className="MainContentContainer">
          <div className="ProductsContainer">
            <ProductGrid />
            <AccessoriesGrid />
          </div>
          <div className="ShoppingListContainer">
            <ShoppingList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
