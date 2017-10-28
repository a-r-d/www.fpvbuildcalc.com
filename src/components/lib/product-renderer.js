import React from 'react';
import ProductTile from '../ProductTile'

function productRenderer(products) {
  const sorted = Object.keys(products)
  sorted.sort((a, b) => {
    return products[ a ].price - products[ b ].price
  })

  return sorted.map((key, i) => {
    return <ProductTile product={products[ key ]} key={i}/>
  })
}

export default productRenderer
