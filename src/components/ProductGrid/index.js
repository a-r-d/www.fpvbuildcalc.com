import React from 'react';
import ProductTile from '../ProductTile'
import Frames from '../products/frames'

const ProductGrid = () => {
  return (
      <div className='ProductGrid'>
        <ProductTile product={Frames.MartianII220}/>
        <ProductTile product={Frames.Realaccx210Pro}/>
        <ProductTile product={Frames.LumenierCharpu}/>
      </div>
  )
}

export default ProductGrid;
