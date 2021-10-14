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
              <Names className='names'/>
              <div className='photos-secondary-text'>
                <h2>
                  {`Porque la vida se torno de colores cuando entraste en mi vida.`}
                </h2>
              </div>  
            </PhotoFooter>
          </>
        }
        {isFirstPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo8/>
            </div>
            <PhotoFooter>
              <div className='photos-secondary-text'>
                <h2>
                {`MOTIVADOS POR EL AMOR QUE NOS TENEMOS, CON ALEGRIA,
                
                  LA BENDICION DE DIOS Y NUESTROS PADRES.`}
                </h2>
              </div> 
            </PhotoFooter>
          </>
        }
        {isSecondPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo10/>
            </div>
            <PhotoFooter>
              <div className='photos-secondary-text'>
                <h2>
                {`UNO SOLO PUEDE SER VENCIDO, PERO DOS PUEDEN RESISTIR;
                
                  CORDÓN DE TRES DOBLECES NO SE ROMPE FACILMENTE`}
                </h2>
              </div> 
            </PhotoFooter>
          </>
        }
        {isThirdPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo3/>
            </div>
            <PhotoFooter>
              <div className='photos-secondary-text'>
                <h2>
                  {`Cuando te das cuenta que deseas pasar el resto de tu vida con alguien,
                  `}
                  <b>{`
                  QUIERES QUE EL RESTO DE TU VIDA COMIENCE LO ANTES POSIBLE.`}
                  </b>
                </h2>
              </div>  
            </PhotoFooter>
          </>
        }
        {isFourthPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo5/>
            </div>
            <PhotoFooter>
              <Names className='previous'/>
            </PhotoFooter>
          </>
        }
        {isFifthPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo6/>
            </div>
            <PhotoFooter>
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
              <div className='photos-secondary-text'>
                <h2>
                {`EL LUGAR DONDE INICIA 
                  EL TAN ANHELADO MOMENTO,

                  CUANDO EL PRINCIPE 
                  RESCATA A SU PRINCESA`}
                </h2>
              </div> 
            </PhotoFooter>
          </>
        }
        {isSeventhPhoto &&
          <>
            <div id='portrait' className='portrait'>
              <Photo2/>
            </div>
            <PhotoFooter>
              <Names className='previous'/>
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
