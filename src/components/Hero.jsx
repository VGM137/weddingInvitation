import React from "react";
import { connect } from "react-redux";
import { heroSize } from "../actions";
import Photo1 from "./Photo1";
import '../assets/styles/components/Hero.scss'

const Hero = (props) => {
  
  const handleLoad = async (e) => {
    props.heroSize(e.target.parentElement.parentElement.clientHeight)
    let text = await e.target.parentElement.parentElement.childNodes[0]
    text.style.display = 'flex'
  }
  
  return(
    <div id='hero' className='hero' onLoad={handleLoad}>
      <h1 id='hero-text' className='hero-text'>¡Nos casamos!</h1>
      <Photo1/>
    </div>
  )
}

const dispatchStateToProps = {
  heroSize
}

export default connect(null, dispatchStateToProps)(Hero)