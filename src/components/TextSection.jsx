import React, {useRef, useState, useMemo, useEffect} from "react";
import { connect, useSelector, useDispatch  } from "react-redux";
import { displayPhoto } from "../actions";
import Frame from "./Frame";

const TextSection = ({specific, childrenSpecific, children}) => {

  const dispatch = useDispatch()

  const targetRef = useRef(null)
  const [isVisible, setVisible] = useState(false)

  let doAnimate = true

  const callbackFunction = entries => {
    const [entry] = entries
    let intersectionRatio = Math.round(entry.intersectionRatio* 10)/10

    if(intersectionRatio == 1){
      doAnimate = false
    }

    if(entry.target.classList[1] == 'hero'){
      dispatch(displayPhoto(entry.target.classList[1]))
      entry.target.childNodes[0].style.display = 'block'
    }
    
    if(entry.target.classList[1] == 'engaged-couple' && intersectionRatio == .9){
      entry.target.parentElement.parentElement.parentElement.childNodes[1].style.bottom= ''
    }

    if(doAnimate == true){
      if(intersectionRatio == 0.5){
        
        dispatch(displayPhoto(entry.target.classList[1]))
        document.getElementById('photos-container').classList.add('grow')
        
        entry.target.childNodes[0].style.display = 'grid'
        entry.target.childNodes[0].classList.add('frameApear')

        let children = entry.target.childNodes[1].childNodes
        if(entry.target.classList[1] !== 'event' && entry.target.classList[1] !== 'hero'){
          entry.target.childNodes[1].style.display = 'flex'
          children.forEach(child => {
            if(child.classList[0] == 'info-cover'){
              child.classList.add('fadeOut')}
            })
          setTimeout(() => {
            children.forEach(child => {
              child.classList.remove('apear')
            })
          }, 2200);
        }else if(entry.target.classList[1] == 'event'){
          entry.target.childNodes[1].style.display = 'flex'
          children.forEach(child => {
            if(child.classList[0] == 'info-cover'){
              child.classList.add('fadeOut')}
            })
          setTimeout(() => {
            children.forEach(child => {
              child.classList.remove('fadeUp')
              child.classList.remove('apear')
            })
          }, 2200);
        }
      }
    }

    if(intersectionRatio <= 0.1){
      doAnimate = true
      entry.target.childNodes[1].style.display = 'none'
      entry.target.childNodes[0].style.display = 'none'
      document.getElementById('photos-container').classList.remove('grow')
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
    <div 
      id='text-section'
      className={`text-section ${specific}`}
      ref={targetRef}
    >
      <Frame />
      <div id='text-container' className={`text-container ${childrenSpecific}`}>
        {children}
      </div>
    </div>
  )
}


export default connect(null, null)(TextSection)