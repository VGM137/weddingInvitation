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
  let isHero = props.currentPhoto == '' || props.currentPhoto == 'hero'
  let isFirstPhoto = props.currentPhoto == 'engaged-couple'
  let isSecondPhoto = props.currentPhoto == 'parents'
  let isThirdPhoto = props.currentPhoto == 'good-parents'
  let isFourthPhoto = props.currentPhoto == 'ladies'
  let isFifthPhoto = props.currentPhoto == 'grooms'
  let isSixthPhoto = props.currentPhoto == 'event'
  let isSeventhPhoto = props.currentPhoto == 'other'


  
  
  
  const handleLoad = (e) => {
      console.log(e)
      console.log(e.target.parentElement.parentElement)
      props.photoContainerSize(e.target.parentElement.parentElement.clientHeight)
  }

  return(
    <div id='photos-container' className='photos-container' >
      {/* {isMobile
        ?
        <> */}
          <div id='portrait' className='portrait' onLoad={(e) => handleLoad(e)}>
            {isHero &&
              <>
                <Photo7/>
              </>
            }
            {isFirstPhoto &&
              <>
                <Photo2/>
              </>
            }
            {isSecondPhoto &&
              <>
                <Photo3/>
              </>
            }
            {isThirdPhoto &&
              <>
                <Photo4/>
              </>
            }
            {isFourthPhoto &&
              <>
                <Photo5/>
              </>
            }
            {isFifthPhoto &&
              <>
                <Photo6/>
              </>
            }
            {isSixthPhoto &&
              <>
                <Photo7/>
              </>
            }
            {isSeventhPhoto &&
              <>
                <Photo7/>
              </>
            }
          </div>
{/*         </>
        :
          <Photo2/>
      } */}
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
