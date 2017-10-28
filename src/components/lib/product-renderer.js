import React from 'react';
import ProductTile from '../ProductTile'

function productRenderer(products, props) {
  const sorted = Object.keys(products)
  sorted.sort((a, b) => {
    return products[ a ].price - products[ b ].price
  })

  return sorted.map((key, i) => {
    return <ProductTile
      product={products[ key ]}
      key={i}
      allProducts={props.products}
      onProductSelect={props.onProductSelect}
      onProductDeselect={props.onProductDeselect}
    />
  })
}

export default productRenderer
