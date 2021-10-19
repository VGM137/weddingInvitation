import React from "react";
import { connect, useSelector } from "react-redux";
import '../assets/styles/components/ScrollButtons.scss'

const ScrollButton = ({specific}) => {

  const currentPhoto = useSelector(state => state.currentPhoto)
  let isTheMiddle =   currentPhoto == 'engaged-couple' || currentPhoto == 'parents' || currentPhoto == 'knot' || currentPhoto == 'good-parents' || currentPhoto == 'ladies' || currentPhoto == 'grooms' || currentPhoto == 'event' || currentPhoto == 'personal-invitation' || currentPhoto == 'social'
  let isHero = currentPhoto == '' || currentPhoto == 'hero'
  let isHealthProtocol = currentPhoto == 'health-protocol'

  return (
    <div id='buttons-container' className='buttons-container'>
      
        <>
          {isHero &&
            <div
              id='button-scroll-forward' 
              className={`button button-scroll-forward ${specific}`} 
            >
                {'»'}
            </div>
          }
          {isTheMiddle &&
            <>
              <div
                id='button-scroll-backward' 
                className={`button button-scroll-backward ${specific}`} 
              >
                  {'«'}
              </div>
              <div
                id='button-scroll-forward' 
                className={`button button-scroll-forward ${specific}`} 
              >
                  {'»'}
              </div>
            </>
          }
          {isHealthProtocol &&
            <div
              id='button-scroll-backward' 
              className={`button button-scroll-backward ${specific}`} 
            >
                {'«'}
            </div>
          }
        </>
      
    </div>
  )
}

export default connect(null, null)(ScrollButton)