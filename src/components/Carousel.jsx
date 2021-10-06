import React from "react";
import { connect } from "react-redux";
import InfoContainer from "./InfoContainer";
import Hero from "./Hero";
import '../assets/styles/components/Carousel.scss'

const Carousel = (props) => {

  let isMobile = props.windowSize.width < 768

  const handleScroll = (e) => {
    /* console.log(e) */
  }

  return(
    <div 
    id='carousel' 
    className='carousel' 
    onScroll={handleScroll} 
    >  
      <InfoContainer/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize,
    hero: state.hero,
    home: state.home,
    photoContainer: state.photoContainer,
  }
}

export default connect(mapStateToProps, null)(Carousel)