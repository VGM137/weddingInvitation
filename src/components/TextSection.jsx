import React, {useRef, useState, useMemo, useEffect} from "react";
import { connect, useSelector, useDispatch  } from "react-redux";
import { displayPhoto } from "../actions";

const TextSection = ({specific, childrenSpecific, children}) => {

  const dispatch = useDispatch()

  const targetRef = useRef(null)
  const [isVisible, setVisible] = useState(false)

  let doAnimate = true

  const callbackFunction = entries => {
    const [entry] = entries
    let intersectionRatio = Math.round(entry.intersectionRatio* 10)/10
    /* console.log(entry) */

    if(intersectionRatio == 1){
      doAnimate = false
    }

    if(entry.target.classList[1] == 'hero'){
      dispatch(displayPhoto(entry.target.classList[1]))
      /* console.log(entry) */
      entry.target.childNodes[0].style.display = 'block'
    }
    
    if(entry.target.classList[1] == 'engaged-couple' && intersectionRatio == .9){
      entry.target.parentElement.parentElement.parentElement.childNodes[1].style.bottom= ''
    }

    if(doAnimate == true){
      if(intersectionRatio == 0.2){
        dispatch(displayPhoto(entry.target.classList[1]))
        let children = entry.target.childNodes[0].childNodes
        if(entry.target.classList[1] !== 'event' && entry.target.classList[1] !== 'hero'){
          entry.target.childNodes[0].style.display = 'block'
          children.forEach(child => {
            if(child.classList[0] == 'frame-container'){
              child.classList.add('apear')
            }else{
              child.classList.add('fadeUp')}
            })
          setTimeout(() => {
            children.forEach(child => {
              child.classList.remove('fadeUp')
              child.classList.remove('apear')
            })
          }, 2200);
        }else if(entry.target.classList[1] !== 'hero'){
          entry.target.childNodes[0].style.display = 'block'
          children.forEach(child => {
            if(child.classList[0] == 'frame-container'){
              child.classList.add('apear')
            }else{
              child.classList.add('fadeDown')}
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
      entry.target.childNodes[0].style.display = 'none'
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
      <div id='text-container' className={`text-container ${childrenSpecific}`}>
        {children}
      </div>
    </div>
  )
}


export default connect(null, null)(TextSection)