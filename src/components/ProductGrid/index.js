import React from 'react';
import Frames from '../products/frames'
import FCs from '../products/fcs'
import Motors from '../products/motors'
import Esc from '../products/esc'
import Props from '../products/props'
import Cams from '../products/camera'
import Vtx from '../products/vtx'

import productRenderer from '../lib/product-renderer'

import './index.css'

const ProductGrid = () => {
  return (
    <div className='ProductGrid'>
      <div className='ProductGridColumn'>
        <h2>Frames</h2>
        { productRenderer(Frames) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Flight Controllers</h2>
        { productRenderer(FCs) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Motors</h2>
        { productRenderer(Motors) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Speed Controllers</h2>
        { productRenderer(Esc) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Cameras</h2>
        { productRenderer(Cams) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Video Transmitter</h2>
        { productRenderer(Vtx) }
      </div>

    </div>
  )
}

export default ProductGrid;
