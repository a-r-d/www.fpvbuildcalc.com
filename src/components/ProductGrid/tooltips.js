import React from 'react';
import ReactTooltip from 'react-tooltip'
import './tooltips.css'

const ToolTips = () => {
  return (<div className="ToolTipContainer">
    <ReactTooltip id="FramesInfoTooltip" type="dark" effect="solid" >
      <p>
      Your frame is the basis on which everything else is built. All of the frames
      listed here are between 210 and 250 mm in size.
      </p>
    </ReactTooltip>
    <ReactTooltip id="FlightControllerToolTip" type="dark" effect="solid" >
      <p>
      The flight controller coordinates communication between the various components on the quad copter.
      </p>
    </ReactTooltip>
    <ReactTooltip id="MotorsToolTip" type="dark" effect="solid" >
      <p>
        I have listed motors here rated from 2300kv to 2600kv. The amount of power your motors will pull
        depends on many other factors, including the pitch of your propellers. Pick ESCs that are appropriate to
        supply the amount of power your motors will draw.
      </p>
    </ReactTooltip>
    <ReactTooltip id="SpeedControllersToolTip" type="dark" effect="solid" >
      <p>
        All of these are BLHeli_S ESCs (unless noted) from 20A to 35A which will be perfect for miniquad racing
        or freestyle. All of the ESC prices listed are for 4 total. One big choice to make with ESCS is to whether get
        a 4-in-1 board or single escs.
      </p>
    </ReactTooltip>
    <ReactTooltip id="CamerasToolTip" type="dark" effect="solid" >
      <p>
        All of these cameras are CCD cameras. The price difference is due mainly to cameras with OSDs that
        have various features, image quality, and low light performance.
      </p>
    </ReactTooltip>
    <ReactTooltip id="VTXToolTip" type="dark" effect="solid" >
      <p>
        The Video Transmitter takes the video signal from your camera and transmits it to your goggles.
        It is very work it to get a decent VTX that supports switching power levels and switching channels via an LCD screen.
        Many cheaper VTX units use dip switches and only support one power level.
      </p>
    </ReactTooltip>
    <ReactTooltip id="AntennaToolTip" type="dark" effect="solid" >
      <p>
        A good antenna can make a world of difference in FPV image quality. Lately Pagoda antennas seem to be the mostly highly regarded.
      </p>
    </ReactTooltip>
    <ReactTooltip id="ReceiverToolTip" type="dark" effect="solid" >
      <p>
        The type of receiver you intend to use depends upon the type of transmitter your have. If you have a Taranis for example, you need to
        go with an FrSky receiver, while a Turnigy Evolution uses FlySky.
      </p>
    </ReactTooltip>
    <ReactTooltip id="PDBToolTip" type="dark" effect="solid" >
      <p>
        The Power Distribution Board or PDB is where your batter connects to on your quad copter. The board then distributes power to speed controllers,
        flight controller, and other peripheral devices such as the camera and video transmitter.

        It pays to get a decent PDB with an LC filter to cut down on feedback noise that could come across in your video signal.
      </p>
    </ReactTooltip>
    <ReactTooltip id="PropellersToolTip" type="dark" effect="solid" >
      <p>
        Propellers are a highly contentious subject. Generally speaker the steeper the pitch angle the higher the power draw. Most people
        that fly miniquads will be using 5045 or 5040 propellers, which means 5 inch diameter, 4 inch pitch angle, or 5 inch diameter 4.5 inch pitch angle.
      </p>
    </ReactTooltip>
  </div>)
}

export default ToolTips
