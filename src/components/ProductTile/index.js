import React from 'react';
import Paper from 'material-ui/Paper'
import Checkbox from 'material-ui/Checkbox';

import './index.css'

const ProductTile = (props) => {

  const thisProductChecked = () => {
    return props.allProducts.findIndex((product) => {
      return props.product.name === product.name
    })
  }

  return (
    <div className="ProductTile">
      <Paper zDepth={1}>
        <div>
          <span className='ProductName'>{ props.product.name }</span>
        </div>
        <div className="ProductLinkList">
          <span className='ProductPrice'>${ props.product.price.toFixed(2) }</span>
          {
            Object.keys(props.product.shop).map((key, i) => {
              let url = props.product.shop[ key ]
              if(String(key) === 'banggood') url += '?p=H101138294533201701A'
              return <a key={i} className="ProductLink" href={url} target="_blank">{key}</a>
            })
          }
        </div>
        <div className="ProductImageContainer">
          <div className="ProductCheckContainer">
            <Checkbox checked={thisProductChecked() !== -1} onClick={() => {
              const index = thisProductChecked()
              if (index !== -1) {
                return props.onProductDeselect(props.product)
              }
              props.onProductSelect(props.product)
            }}/>
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
