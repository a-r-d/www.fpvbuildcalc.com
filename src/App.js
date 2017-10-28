import React, { Component } from 'react';
import { connect } from 'react-redux'
import productActions from './actions/products'

import './App.css';
import ProductGrid from './components/ProductGrid'
import ShoppingList from './components/ShoppingList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/images/cyclone.png" className="App-logo" alt="logo" />
          <h1 className="App-title">FPV Build Calculator</h1>
        </header>
        <div>
          <p className="App-intro">
          </p>
        </div>
        <div className="MainContentContainer">
          <div className="ProductsContainer">
            <ProductGrid
              products={this.props.products}
              onProductSelect={this.props.onProductSelect}
              onProductDeselect={this.props.onProductDeselect}
            />
          </div>
          <div className="ShoppingListContainer">
            <ShoppingList products={this.props.products} onProductDeselect={this.props.onProductDeselect} />
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
