import React from 'react';
import Props from '../products/props'
import Pdb from '../products/pdb'
import Antenna from '../products/antenna'
//import Receiver from '../products/receiver'

import productRenderer from '../lib/product-renderer'

import './index.css'

const AccessoriesGrid = (props) => {
  return (
    <div className='AccProductGrid'>
      <div className='AccProductGridColumn'>
        <h2>Propellers</h2>
        { productRenderer(Props, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>PDB</h2>
        { productRenderer(Pdb, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>VTX Antenna</h2>
        { productRenderer(Antenna, props) }
      </div>
    </div>
  )
}

export default AccessoriesGrid;
