import React from "react";
import { connect } from "react-redux";
import InfoContainer from "./InfoContainer";
import '../assets/styles/components/Carousel.scss'

const Carousel = (props) => {

  return(
    <div 
    id='carousel' 
    className='carousel' 
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