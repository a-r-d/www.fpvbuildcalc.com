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
import ReactTooltip from 'react-tooltip'
import productRenderer from '../lib/product-renderer'

import './index.css'

const ToolTips = () => {
  return (<div>
    <ReactTooltip id="FramesInfoTooltip" type="dark" effect="solid" >
      Your frame is the basis on which everything else is built. All of the frames
      listed here are between 210 and 250 mm in size.
    </ReactTooltip>
    <ReactTooltip id="FlightControllerToolTip" type="dark" effect="solid" >
      The flight controller coordinates communication between the various components on the quad copter.
    </ReactTooltip>
    <ReactTooltip id="MotorsToolTip" type="dark" effect="solid" >
      Motors .....
    </ReactTooltip>
  </div>)
}

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
      <div className='ProductGridColumn'>
        <h2>VTX Antenna</h2>
        { productRenderer(Antenna, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Receiver</h2>
        { productRenderer(Receiver, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>PDB</h2>
        { productRenderer(Pdb, props) }
      </div>
      <div className='ProductGridColumn'>
        <h2>Propellers</h2>
        { productRenderer(Props, props) }
      </div>
      <ToolTips/>
    </div>
  )
}

export default ProductGrid;
