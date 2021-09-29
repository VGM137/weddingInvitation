import React from "react";
import { connect } from "react-redux";
import '../assets/styles/components/Carousel.scss'
import PhotosContainer from "./PhotosContainer";
import InfoContainer from "./InfoContainer";

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
    style={isMobile ? {height: `${props.photoContainer}px`, paddingTop: `${props.hero}px`} : {height: `${props.home}px`, paddingTop: `${props.hero}px`}}>
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