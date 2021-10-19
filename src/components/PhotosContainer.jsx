import React from "react";
import { connect } from "react-redux";
import { photoContainerSize } from "../actions";
import Frame from "./Frame";
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
import Photo11 from "./Photo11";
import Photo12 from "./Photo12";
import Photo13 from "./Photo13";
import Photo14 from "./Photo14";
import Photo15 from "./Photo15";
import PhotoFooter  from './PhotoFooter.jsx'
import Names from '../assets/static/names.svg'
import '../assets/styles/components/PhotosContainer.scss'

const PhotosContainer = (props) => {

  let isMobile = props.windowSize.width < 768
  let isHero = props.currentPhoto == '' || props.currentPhoto == 'hero'
  let isFirstPhoto = props.currentPhoto == 'engaged-couple'
  let isSecondPhoto = props.currentPhoto == 'parents'
  let isKnotPhoto = props.currentPhoto == 'knot'
  let isThirdPhoto = props.currentPhoto == 'good-parents'
  let isFourthPhoto = props.currentPhoto == 'ladies'
  let isFifthPhoto = props.currentPhoto == 'grooms'
  let isSixthPhoto = props.currentPhoto == 'event'
  let isSeventhPhoto = props.currentPhoto == 'personal-invitation'
  let isEightPhoto = props.currentPhoto == 'social'
  let isNinthPhoto = props.currentPhoto == 'health-protocol'
  
  const handleLoad = (e) => {
      props.photoContainerSize(e.target.parentElement.parentElement.clientHeight)
  }

  return(
    <div id='photos-container' className='photos-container' loading='lazy' onLoad={(e) => handleLoad(e)}>
        {isHero &&
          <>
            <Photo11/>
          </>
        }
        {isFirstPhoto &&
          <>
            <Photo10/>
          </>
        }
        {isSecondPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo3/>
            </div>
            <PhotoFooter>
              <div >
                <h1 className='footer-main-text'>
                {`Motivados por el amor que nos tenemos, con alegria,
                  la bendicion de dios y nuestros padres.`}
                </h1>
              </div> 
            </PhotoFooter>
          </>
        }
        {isThirdPhoto &&
          <>
            <Photo9 />
            {/* <div id='portrait' className='portrait'>
              <Photo3/>
            </div>
            <PhotoFooter>
              <Names className='previous'/>
            </PhotoFooter> */}
          </>
        }
        {isKnotPhoto &&
          <>
            <Photo12 />
          </>
        }
        {isFourthPhoto &&
          <>
            <Photo15 />
          </>
        }
        {isFifthPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo6/>
            </div>
            <PhotoFooter specific='previous-footer'>
              <Names className='previous'/>
            </PhotoFooter>
          </>
        }
        {isSixthPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo7/>
            </div>
            <PhotoFooter>
              <div >
                
                <h2 className='footer-main-text'>
                {`El lugar donde inicia 
                  el tan anhelado momento,
                  cuando el principe 
                  rescata a su princesa`}
                </h2>
              </div> 
            </PhotoFooter>
          </>
        }
        {isSeventhPhoto &&
          <>
          <Photo9/>
            {/* <div id='portrait' className='portrait'>
              <Photo2/>
            </div>
            <PhotoFooter>
              <Names className='previous'/>
            </PhotoFooter> */}
          </>
        }
        {isEightPhoto &&
          <>
            <Photo13/>
            {/* <div id='portrait' className='portrait'>
              <Photo2/>
            </div>
            <PhotoFooter>
              <Names className='previous'/>
            </PhotoFooter> */}
          </>
        }
        {isNinthPhoto &&
          <>
            <Photo14/>
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
