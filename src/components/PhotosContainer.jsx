import React from "react";
import { connect } from "react-redux";
import { photoContainerSize } from "../actions";
import Photo1 from "./Photo1";
import Photo2 from "./Photo2";
import Photo3 from "./Photo3";
import Photo4 from "./Photo4";
import Photo5 from "./Photo5";
import Photo6 from "./Photo6";
import Photo7 from "./Photo7";
import Carousel from "./Carousel";
import '../assets/styles/components/PhotosContainer.scss'

const PhotosContainer = (props) => {

  let isMobile = props.windowSize.width < 768

  const handleLoad = (e) => {
      console.log(e)
      props.photoContainerSize(e.target.offsetParent.clientHeight)
  }

  return(
    <div id='photos-container' className='photos-container' onLoad={(e) => handleLoad(e)}>
      {isMobile 
        ?
        <>
          <div id='portrait' className='portrait'>
            {props.currentPhoto == 'engaged-couple' ?
              <>
                <Photo2/>
              </>
              :
              <>
                <Photo1/>
              </>
            }
          </div>
        </>
        :
          <Photo2/>
      }
    </div>
  )
}

const mapSateToProps = (state) => {
  return {
    windowSize: state.windowSize,
    currentPhoto: state.currentPhoto
  }
}

const dispatchStateToProps = {
  photoContainerSize
}

export default connect(mapSateToProps, dispatchStateToProps)(PhotosContainer)