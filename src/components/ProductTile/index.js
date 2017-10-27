import React from 'react';
import Paper from 'material-ui/Paper'
import './index.css'

const ProductTile = (props) => {
  return (
    <div className="ProductTile">
      <Paper zDepth={1}>
        <span className='ProductName'>{ props.product.name }</span>
        <span className='ProductPrice'>${ props.product.price }</span>
        <img className='ProductImage'
          src={ props.product.image }
          alt={props.product.name}
        />
      </Paper>
    </div>
  )
}

export default ProductTile;
