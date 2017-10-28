import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className="AboutContainer">
      <h2>About FPV Build Calc</h2>
      <div className="AboutMainSection">
        <div className="AboutImage">
          <img alt="My quads on my desk" src="/images/quads-1.jpg" />
        </div>
        <div className="AboutText">
          <p>
            I created this site as part of a set of tutorial videos on React. But,
            I would like for it to be an actual useful tool for people in FPV community.
          </p>
          <p>
            If you have any suggestions about products I would love to hear them. You can comment below,
            or you can send me an email (info@fpvbuildcalc.com).
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
