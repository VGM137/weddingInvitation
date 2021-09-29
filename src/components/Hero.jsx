import React from "react";
import { connect } from "react-redux";
import { heroSize } from "../actions";
import Photo1 from "./Photo1";
import '../assets/styles/components/Hero.scss'

const Hero = (props) => {
  
  const handleLoad = (e) => {
   props.heroSize(e.target.clientHeight)
  }
  
  return(
    <div id='hero' className='hero' onLoad={handleLoad}>
      <Photo1/>
    </div>
  )
}

const dispatchStateToProps = {
  heroSize
}

export default connect(null, dispatchStateToProps)(Hero)