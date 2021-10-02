import React, {useRef, useState, useMemo, useEffect}  from "react";
import { connect, useSelector, useDispatch  } from "react-redux";
import { displayPhoto } from "../actions";

const TextSection = ({specific, children}) => {

  const dispatch = useDispatch()

  const targetRef = useRef(null)
  const [isVisible, setVisible] = useState(false)

  const callbackFunction = entries => {
    const [entry] = entries
    if(entry.isIntersecting){
      dispatch(displayPhoto(entry.target.classList[1]))
      console.log(entry)
      let children = entry.target.childNodes[0].childNodes
      if(entry.target.classList[1] !== 'event'){
        children.forEach(child => child.classList.add('fadeUp'))
        setTimeout(() => {
          children.forEach(child => child.classList.remove('fadeUp'))
        }, 2000);
      }else{
        children.forEach(child => child.classList.add('fadeDown'))
        setTimeout(() => {
          children.forEach(child => child.classList.remove('fadeDown'))
        }, 2000);
      }
    }

    setVisible(entry.isIntersecting)
  }

  const options = useMemo(() => {
    return {
      root:null,
      rootMargin: '0px',
      threshold: .9
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    const currentTarget = targetRef.current
    console.log(currentTarget.target)
      
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
      <div id='text-container' className={`text-container ${specific}`}>
        {children}
      </div>
    </div>
  )
}


export default connect(null, null)(TextSection)