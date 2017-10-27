import React from 'react';
import Paper from 'material-ui/Paper'

const ProductTile = (props) => {
  return (
    <div className="ProductTile">
      <Paper zDepth={1}>
        <span className='ProductName'>{ props.product.name }</span>
        <span className='ProductPrice'>${ props.product.price }</span>
      </Paper>
    </div>
  )
}

export default ProductTile;
