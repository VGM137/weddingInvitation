import React from "react";
import { connect } from "react-redux";
import FrameTL from '../assets/static/encaje1.svg'
import FrameTR from '../assets/static/encaje2.svg'
import FrameBL from '../assets/static/encaje3.svg'
import FrameBR from '../assets/static/encaje4.svg'
import '../assets/styles/components/Frame.scss'

const Frame = ({specific}) => {
  return(
    <div id='frame-container' className={`frame-container ${specific}`}>
      <FrameTL id='top-left' className={`top-left frame-corner corner-${specific}`} />
      <FrameTR id='top-right' className={`top-right frame-corner corner-${specific}`} />
      <FrameBL id='bottom-left' className={`bottom-left frame-corner corner-${specific}`} />
      <FrameBR id='bottom-right' className={`bottom-right frame-corner corner-${specific}`} />
    </div>
  )
}

export default connect(null, null)(Frame)