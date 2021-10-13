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
import Photo8 from "./Photo8";
import Photo9 from "./Photo9";
import Photo10 from "./Photo10";
import PhotoFooter  from './PhotoFooter.jsx'
import Names from '../assets/static/names.svg'
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
  let isSeventhPhoto = props.currentPhoto == 'personal-invitation'

  const handleLoad = (e) => {
      props.photoContainerSize(e.target.parentElement.parentElement.clientHeight)
  }

  return(
    <div id='photos-container' className='photos-container' onLoad={(e) => handleLoad(e)}>
        {isHero &&
          <>
            <div id='portrait' className='portrait'>
              <Photo4/>
            </div>
            <PhotoFooter>
              <Names />
            </PhotoFooter>
          </>
        }
        {isFirstPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo8/>
            </div>
            <PhotoFooter>
              <Names />
            </PhotoFooter>
          </>
        }
        {isSecondPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo10/>
            </div>
            <PhotoFooter>
              <Names />
            </PhotoFooter>
          </>
        }
        {isThirdPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo3/>
            </div>
            <PhotoFooter>
              <Names />
            </PhotoFooter>
          </>
        }
        {isFourthPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo5/>
            </div>
            <PhotoFooter>
              <Names />
            </PhotoFooter>
          </>
        }
        {isFifthPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo6/>
            </div>
            <PhotoFooter>
              <Names />
            </PhotoFooter>
          </>
        }
        {isSixthPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo7/>
            </div>
            <PhotoFooter>
              <Names />
            </PhotoFooter>
          </>
        }
        {isSeventhPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo2/>
            </div>
            <PhotoFooter>
              <Names />
            </PhotoFooter>
          </>
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
