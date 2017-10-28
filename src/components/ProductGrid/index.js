import React from 'react';
import Frames from '../products/frames'
import FCs from '../products/fcs'
import Motors from '../products/motors'
import Esc from '../products/esc'
import Cams from '../products/camera'
import Vtx from '../products/vtx'
import Props from '../products/props'
import Pdb from '../products/pdb'
import Antenna from '../products/antenna'
import Receiver from '../products/receiver'

import FontIcon from 'material-ui/FontIcon';
import productRenderer from '../lib/product-renderer'
import ToolTips from './tooltips'

import './index.css'

const ProductGrid = (props) => {

  const iconStyles = {color: '#999', fontSize: '0.7em'}

  return (
    <div className='ProductGrid'>
      <div className='ProductGridColumn'>
        <h2>Frames
          <FontIcon data-tip data-for="FramesInfoTooltip" className="material-icons" style={iconStyles}>help</FontIcon>
        </h2>

        { productRenderer(Frames, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Flight Controllers
          <FontIcon data-tip data-for="FlightControllerToolTip" className="material-icons" style={iconStyles}>help</FontIcon>
        </h2>
        { productRenderer(FCs, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Motors
          <FontIcon data-tip data-for="MotorsToolTip" className="material-icons" style={iconStyles}>help</FontIcon>
        </h2>
        { productRenderer(Motors, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Speed Controllers
          <FontIcon data-tip data-for="SpeedControllersToolTip" className="material-icons" style={iconStyles}>help</FontIcon>
        </h2>
        { productRenderer(Esc, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Cameras
          <FontIcon data-tip data-for="CamerasToolTip" className="material-icons" style={iconStyles}>help</FontIcon>
        </h2>
        { productRenderer(Cams, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Video Transmitter
          <FontIcon data-tip data-for="VTXToolTip" className="material-icons" style={iconStyles}>help</FontIcon>

        </h2>
        { productRenderer(Vtx, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>VTX Antenna
        <FontIcon data-tip data-for="AntennaToolTip" className="material-icons" style={iconStyles}>help</FontIcon>

        </h2>
        { productRenderer(Antenna, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Receiver
        <FontIcon data-tip data-for="ReceiverToolTip" className="material-icons" style={iconStyles}>help</FontIcon>

        </h2>
        { productRenderer(Receiver, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>PDB
        <FontIcon data-tip data-for="PDBToolTip" className="material-icons" style={iconStyles}>help</FontIcon>

        </h2>
        { productRenderer(Pdb, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Propellers
        <FontIcon data-tip data-for="PropellersToolTip" className="material-icons" style={iconStyles}>help</FontIcon>

        </h2>
        { productRenderer(Props, props) }
      </div>
      <ToolTips/>
    </div>
  )
}

export default ProductGrid;
