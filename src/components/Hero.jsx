import React, {useRef, useState, useMemo, useEffect, Children} from "react";
import { connect } from "react-redux";
import { heroSize, displayPhoto } from "../actions";
import Photo1 from "./Photo1";
import '../assets/styles/components/Hero.scss'

const Hero = (props) => {

  let invitation = props.isPersonalInvitation
  
  const handleLoad = async (e) => {
    props.heroSize(e.target.parentElement.parentElement.clientHeight)
    let text = await e.target.parentElement.parentElement.childNodes[0]
    props.displayPhoto(e.target.parentElement.parentElement.classList[0])
  }

  const targetRef = useRef(null)
  const [isVisible, setVisible] = useState(false)

  let doAnimate = true

  const callbackFunction = entries => {
    const [entry] = entries
    let intersectionRatio = Math.round(entry.intersectionRatio* 10)/10
    if(intersectionRatio == 1){
      doAnimate = false
    }

    if(doAnimate == true){
      if(intersectionRatio >= 0.2){
        console.log(entry.target.classList[0])
        props.displayPhoto(entry.target.classList[0])
        let children = entry.target.childNodes
        children[0].classList.add('apear')
        children[0].classList.add('hero-text')
          setTimeout(() => {
            children[0].classList.remove('apear')
          }, 2200); 
          /*
          children.forEach(child => child.classList.add('apear'))
          */
        }
      }
      
      if(intersectionRatio <= 0.1){
        doAnimate = true
        let children = entry.target.childNodes
        children[0].classList.remove('apear')
        children[0].classList.display = 'none'
    }

    setVisible(entry.isIntersecting)
  }

  const buildThresholdList = () => {
    var thresholds = [];
  
    for (let i=1.0; i<=20; i++) {
      let ratio = i/20;
      thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;
  }

  const options = useMemo(() => {
    return {
      root:null,
      rootMargin: '0px',
      threshold: buildThresholdList()
    }
  }, [])


  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    const currentTarget = targetRef.current
      
    if(currentTarget) observer.observe(currentTarget)

    return () => {
      if(currentTarget) observer.unobserve(currentTarget)
    }
  }, [targetRef, options])

  
  return(
    <div id='hero' className='hero' onLoad={handleLoad} ref={targetRef}>
      <div id='hero-text-container' className='hero-text-container apear'>
        {invitation.params &&
          <h1 id='hero-text-name' className='hero-text-name hero-text'>
            {`Hola
            ${invitation.name}`}
          </h1>
        }
        <h1 id='hero-text-greet' className='hero-text-greet hero-text'>¡Nos casamos!</h1>
        
      </div>
      <Photo1/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    isPersonalInvitation: state.isPersonalInvitation
  }
}

const dispatchStateToProps = {
  heroSize,
  displayPhoto
}

export default connect(mapStateToProps, dispatchStateToProps)(Hero)