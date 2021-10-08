import React from "react";
import { connect } from "react-redux";
import '../assets/styles/components/ScrollButtons.scss'

const ScrollButton = ({specific}) => {

  const handleClick = (e, key) => {
    
    let scrollTo = []
    e.target.parentElement.parentElement.childNodes.forEach(child => 
      child.id == 'buttons-container' || child.id == 'hero' || child.id == 'personal-invitation' 
      ? scrollTo.push(child.classList[0]) 
      : scrollTo.push(child.classList[1])
    )

    let infoContainerPosition = e.target.parentElement.parentElement.scrollLeft
    let infoContainerWidth = e.target.parentElement.parentElement.clientWidth
    let timesScrolled = infoContainerPosition / infoContainerWidth

    if(key == 'forward'){
      let move = Math.floor(timesScrolled)

      if(move == 0){
        e.target.parentElement.parentElement.scrollLeft = infoContainerWidth*1
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

      if(move == 0){
        e.target.parentElement.parentElement.scrollLeft = 0
      }
      if(move == 1){
        e.target.parentElement.parentElement.scrollLeft = 0
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
      <button 
        id='button-scroll-backward' 
        className={`button button-scroll-backward ${specific}`} 
        onClick={(e) => handleClick(e, 'backward')}></button>
      <button 
        id='button-scroll-forward' 
        className={`button button-scroll-forward ${specific}`} 
        onClick={(e) => handleClick(e, 'forward')}></button>
    </div>
  )
}

export default connect(null, null)(ScrollButton)