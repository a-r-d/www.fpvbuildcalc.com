import React, { Component } from 'react';
import { connect } from 'react-redux'
import productActions from '../actions/products'

import './Homepage.css';
import ProductGrid from '../components/ProductGrid'
import ShoppingList from '../components/ShoppingList'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const calcTotal = (props) => {
  if(!props.products || props.products.length === 0) return "0.00"
  return props.products.map((product, i) => {
    return product.price
  }).reduce((a, b) => {
    return a + b
  }).toFixed(2)
}

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="HomepageContainer">
          <div className="ProductsContainer">
            <div>
              <Paper zDepth={1} style={{padding: '0em', marginRight: '1em'}}>
                <span>Presets: </span>
                <RaisedButton
                  label='UAVFutures "$100" build' primary={true} style={style}
                  onClick={() => this.props.selectPreset('uav_futures_100')} />
                <RaisedButton
                  label="30 Amp Alien Build" primary={true} style={style}
                  onClick={() => this.props.selectPreset('30a_alien')}/>
                <RaisedButton
                  label="Cheap 30 Amp Build" primary={true} style={style}
                  onClick={() => this.props.selectPreset('30a_cheapo')}/>
                <RaisedButton
                  label="Liftoff Obsession Build" primary={true} style={style}
                  onClick={() => this.props.selectPreset('liftoff_obsession')}/>
                  Total: $ {calcTotal(this.props)}
              </Paper>
            </div>
            <ProductGrid
              products={this.props.products}
              onProductSelect={this.props.onProductSelect}
              onProductDeselect={this.props.onProductDeselect}
            />
          </div>
          <div className="ShoppingListContainer">
            <ShoppingList
              products={this.props.products}
              onProductDeselect={this.props.onProductDeselect}
              removeAllItems={this.props.removeAllItems}
              />
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
    },
    selectPreset: (name) => {
      dispatch(productActions.selectPreset(name))
    },
    removeAllItems: () => {
      dispatch(productActions.removeAllItems())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
