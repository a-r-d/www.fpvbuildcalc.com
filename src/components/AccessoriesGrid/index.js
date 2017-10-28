import React from 'react';
import ProductTile from '../ProductTile'
import Props from '../products/props'
import Pdb from '../products/pdb'
import Antenna from '../products/antenna'
//import Receiver from '../products/receiver'

import productRenderer from '../lib/product-renderer'

import './index.css'

const AccessoriesGrid = () => {
  return (
    <div className='AccProductGrid'>
      <div className='AccProductGridColumn'>
        <h2>Propellers</h2>
        { productRenderer(Props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>PDB</h2>
        { productRenderer(Pdb) }
      </div>
      <div className='ProductGridColumn'>
        <h2>VTX Antenna</h2>
        { productRenderer(Antenna) }
      </div>
    </div>
  )
}

export default AccessoriesGrid;
