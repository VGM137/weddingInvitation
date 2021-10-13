import React from "react";
import { connect, useSelector } from "react-redux";
import '../assets/styles/components/ScrollButtons.scss'

const ScrollButton = ({specific}) => {

  const currentPhoto = useSelector(state => state.currentPhoto)
  const isPersonalInvitation = useSelector(state => state.isPersonalInvitation)
  let isTheMiddle =   currentPhoto == 'engaged-couple' || currentPhoto == 'parents' || currentPhoto == 'good-parents' || currentPhoto == 'ladies' || currentPhoto == 'grooms'
  let isTheMiddleWithInvitation =   currentPhoto == 'engaged-couple' || currentPhoto == 'parents' || currentPhoto == 'good-parents' || currentPhoto == 'ladies' || currentPhoto == 'grooms' || currentPhoto == 'event'
  let isHero = currentPhoto == '' || currentPhoto == 'hero'
  let isEvent = currentPhoto == 'event'
  let isInvitation = currentPhoto == 'personal-invitation'

  const handleClick = (e, key) => {
    
    let scrollTo = []
    e.target.parentElement.parentElement.childNodes.forEach(child => 
      child.id == 'buttons-container' || child.id == 'hero' || child.id == 'personal-invitation' 
      ? scrollTo.push(child.classList[0]) 
      : scrollTo.push(child.classList[1])
    )

    let infoContainerPosition = Math.ceil(e.target.parentElement.parentElement.scrollLeft)
    let infoContainerWidth = Math.ceil(e.target.parentElement.parentElement.clientWidth)  
    console.log(infoContainerWidth)
    console.log(infoContainerPosition)
    let timesScrolled = infoContainerPosition / infoContainerWidth

    if(key == 'forward'){
      console.log(e.target.parentElement.parentElement.childNodes)
      let move = Math.ceil(timesScrolled)
      console.log(move)

      if(move == 0){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth
      }
      if(move == 1){
        let element = document.getElementsByClassName(scrollTo[2])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }
      if(move == 2){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth*3
      }
      if(move == 3){
        let element = document.getElementsByClassName(scrollTo[3])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }
      if(move == 4){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth*5
      }
      if(move == 5){
        let element = document.getElementsByClassName(scrollTo[4])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }
      if(move == 6){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth*7
      }
      if(move == 7){
        let element = document.getElementsByClassName(scrollTo[5])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }
      if(move == 8){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth*9
      }
      if(move == 9){
        let element = document.getElementsByClassName(scrollTo[6])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }
      if(move == 10){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth*11
      }
      if(move == 11){
        let element = document.getElementsByClassName(scrollTo[7])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }
      if(move == 12){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth*13
      }
      if(move == 13){
        let element = document.getElementsByClassName(scrollTo[8])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }


    }else if(key = 'backward'){
      let move = Math.ceil(timesScrolled)

      if(move == 1){
        let element = document.getElementsByClassName(scrollTo[1])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }
      if(move == 2){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth
      }
      if(move == 3){
        let element = document.getElementsByClassName(scrollTo[2])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }
      if(move == 4){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth*3
      }
      if(move == 5){
        let element = document.getElementsByClassName(scrollTo[3])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }
      if(move == 6){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth*5
      }
      if(move == 7){
        let element = document.getElementsByClassName(scrollTo[4])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }
      if(move == 8){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth*7
      }
      if(move == 9){
        let element = document.getElementsByClassName(scrollTo[5])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }
      if(move == 10){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth*9
      }
      if(move == 11){
        let element = document.getElementsByClassName(scrollTo[6])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }
      if(move == 12){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth*11
      }
      if(move == 13){
        let element = document.getElementsByClassName(scrollTo[7])
        element[0].scrollIntoView({block: "end", behavior: "smooth", inline: 'center'})
      }
      if(move == 14){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth*13
      }
    }
  }

  return (
    <div id='buttons-container' className='buttons-container'>
      {!isPersonalInvitation.params &&
        <>
          {isHero &&
            <button 
              id='button-scroll-forward' 
              className={`button button-scroll-forward ${specific}`} 
              onClick={(e) => handleClick(e, 'forward')}>
                {'›'}
                {/* <ArrowFor id='arrow' className='arrow' /> */}
            </button>
          }
          {isTheMiddle &&
            <>
              <button 
                id='button-scroll-forward' 
                className={`button button-scroll-forward ${specific}`} 
                onClick={(e) => handleClick(e, 'forward')}>
                  {'›'}
                  {/* <ArrowFor id='arrow' className='arrow' /> */}
              </button>
              <button 
                id='button-scroll-backward' 
                className={`button button-scroll-backward ${specific}`} 
                onClick={(e) => handleClick(e, 'backward')}>
                  {'‹'}
                  {/* <ArrowBack id='arrow' className='arrow' /> */}
              </button>
            </>
          }
          {isEvent &&
            <button 
              id='button-scroll-backward' 
              className={`button button-scroll-backward ${specific}`} 
              onClick={(e) => handleClick(e, 'backward')}>
                {'‹'}
                {/* <ArrowBack id='arrow' className='arrow' /> */}
            </button>
          }
        </>
      }
      {isPersonalInvitation.params &&
        <>
          {isHero &&
            <button 
              id='button-scroll-forward' 
              className={`button button-scroll-forward ${specific}`} 
              onClick={(e) => handleClick(e, 'forward')}>
                {'›'}
                {/* <ArrowFor id='arrow' className='arrow' /> */}
            </button>
          }
          {isTheMiddleWithInvitation &&
            <>
              <button 
                id='button-scroll-forward' 
                className={`button button-scroll-forward ${specific}`} 
                onClick={(e) => handleClick(e, 'forward')}>
                  {'›'}
                  {/* <ArrowFor id='arrow' className='arrow' /> */}
              </button>
              <button 
                id='button-scroll-backward' 
                className={`button button-scroll-backward ${specific}`} 
                onClick={(e) => handleClick(e, 'backward')}>
                  {'‹'}
                  {/* <ArrowBack id='arrow' className='arrow' /> */}
              </button>
            </>
          }
          {isInvitation &&
            <button 
              id='button-scroll-backward' 
              className={`button button-scroll-backward ${specific}`} 
              onClick={(e) => handleClick(e, 'backward')}>
                {'‹'}
                {/* <ArrowBack id='arrow' className='arrow' /> */}
            </button>
          }
        </>
      }
    </div>
  )
}

export default connect(null, null)(ScrollButton)