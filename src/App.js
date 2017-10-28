import React, { Component } from 'react';
import { connect } from 'react-redux'
import productActions from './actions/products'

import logo from './logo.svg';
// import RaisedButton from 'material-ui/RaisedButton';
import './App.css';
import ProductGrid from './components/ProductGrid'
import AccessoriesGrid from './components/AccessoriesGrid'
import ShoppingList from './components/ShoppingList'

class App extends Component {

  constructor(props) {
    super(props)
  }

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
            <ProductGrid products={this.props.products} onProductSelect={this.props.onProductSelect} />
            <AccessoriesGrid products={this.props.products} onProductSelect={this.props.onProductSelect} />
          </div>
          <div className="ShoppingListContainer">
            <ShoppingList products={this.props.products} onProductDeSelect={this.props.onProductDeSelect} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onProductSelect: (product) => {
      dispatch(productActions.productSelected(product))
    },
    onProductDeselect: (product) => {
      dispatch(productActions.productDeSelected(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
