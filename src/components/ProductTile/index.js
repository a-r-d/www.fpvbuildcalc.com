import React from 'react';
import Paper from 'material-ui/Paper'
import Checkbox from 'material-ui/Checkbox';

import './index.css'

const ProductTile = (props) => {
  return (
    <div className="ProductTile" onClick={() => console.log('product Clicked', props.product)}>
      <Paper zDepth={1}>
        <div>
          <span className='ProductName'>{ props.product.name }</span>
        </div>
        <div className="ProductLinkList">
          <span className='ProductPrice'>${ props.product.price.toFixed(2) }</span>
          {
            Object.keys(props.product.shop).map((key, i) => {
              return <a className="ProductLink" href={props.product.shop[ key ]} target="_blank">{key}</a>
            })
          }
        </div>

        <div className="ProductImageContainer">
          <div className="ProductCheckContainer">
            <Checkbox/>
          </div>
          <img className='ProductImage'
            src={ props.product.image }
            alt={props.product.name}
          />
        </div>
      </Paper>
    </div>
  )
}

export default ProductTile;
