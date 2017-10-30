import React from 'react';
import Paper from 'material-ui/Paper'
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';

import './index.css'

class ProductTile extends React.Component{

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  thisProductChecked = () => {
    return this.props.allProducts.findIndex((product) => {
      return this.props.product.name === product.name
    })
  }

  getProductLinks = () => {
    return Object.keys(this.props.product.shop).map((key, i) => {
      let url = this.props.product.shop[ key ]
      if(String(key) === 'banggood') url += '?p=H101138294533201701A'
      if(String(key) === 'piroflip' || String(key) === 'getfpv') url += '?s=fpvbuildcalc'
      return { name: key, url }
    })
  }

  renderProductLinks = () => {
    return this.getProductLinks().map((link, i) => {
      return <a key={i} className="ProductLink" href={link.url} target="_blank">{link.name}</a>
    })
  }

  render = () => {
    return (
      <div className="ProductTile">
        <Paper zDepth={1}>
          <div>
            <span className='ProductName'>{ this.props.product.name }</span>
          </div>
          <div className="ProductLinkList">
            <span className='ProductPrice'>${ this.props.product.price.toFixed(2) }</span>
            {
              this.renderProductLinks()
            }
          </div>
          <div className="ProductImageContainer">
            <div className="ProductCheckContainer">
              <Checkbox checked={this.thisProductChecked() !== -1} onClick={() => {
                const index = this.thisProductChecked()
                if (index !== -1) {
                  return this.props.onProductDeselect(this.props.product)
                }
                this.props.onProductSelect(this.props.product)
              }}/>
            </div>
            <a onClick={this.handleOpen} style={{ cursor: 'pointer'}}>
              <img className='ProductImage'
                src={this.props.product.image}
                alt={this.props.product.name}
              />
            </a>
            <Dialog
              title={ this.props.product.name }
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
            {
              this.props.product.clone ?
                <Chip backgroundColor="yellow">(This is a clone!)</Chip>
                : null
            }
              <p>{ this.props.product.notes }</p>
              <div className="CenterImage">
                <a href={this.getProductLinks()[0].url} target="_blank" className="ProductLink">
                  <img className='ProductImageLarge'
                    src={this.props.product.image}
                    alt={this.props.product.name}
                  />
                </a>
              </div>
              <div className="ShoppingLinksContainer">
                <h3>Shopping Links
                </h3>
              </div>
              {
                this.renderProductLinks()
              }
            </Dialog>
          </div>
        </Paper>
      </div>
    )
  }
}

export default ProductTile;
