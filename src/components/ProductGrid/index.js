import React from 'react';
import Frames from '../products/frames'
import FCs from '../products/fcs'
import Motors from '../products/motors'
import Esc from '../products/esc'
import Cams from '../products/camera'
import Vtx from '../products/vtx'

import productRenderer from '../lib/product-renderer'

import './index.css'

const ProductGrid = (props) => {
  return (
    <div className='ProductGrid'>
      <div className='ProductGridColumn'>
        <h2>Frames</h2>
        { productRenderer(Frames, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Flight Controllers</h2>
        { productRenderer(FCs, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Motors</h2>
        { productRenderer(Motors, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Speed Controllers</h2>
        { productRenderer(Esc, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Cameras</h2>
        { productRenderer(Cams, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Video Transmitter</h2>
        { productRenderer(Vtx, props) }
      </div>

    </div>
  )
}

export default ProductGrid;
