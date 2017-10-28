import React from 'react';
import ProductTile from '../ProductTile'
import Frames from '../products/frames'
import FCs from '../products/fcs'
import Motors from '../products/motors'
import Esc from '../products/esc'
import Props from '../products/props'
import Cams from '../products/camera'
import Vtx from '../products/vtx'

import './index.css'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const ProductGrid = () => {
  return (
      <div className='ProductGrid'>
        <div className='ProductGridColumn'>
          <h2>Frames</h2>
          <ProductTile product={Frames.MartianII220} />
          <ProductTile product={Frames.DQuadObsession} />
        </div>
        <div className='ProductGridColumn'>
          <h2>Flight Controllers</h2>
          <ProductTile product={FCs.SpRacingF3} />
        </div>
        <div className='ProductGridColumn'>

        </div>
      </div>
  )
}

export default ProductGrid;
