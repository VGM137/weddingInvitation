import React, {useRef, useState, useMemo, useEffect} from "react";
import { connect } from "react-redux";
import { displayPhoto } from "../actions";
import Confirmation from "./Confirmation";
import Frame from "./Frame";
import Stamp from '../assets/static/stamp.svg'
import '../assets/styles/components/PersonalInvitation.scss'

const PersonalInvitation = (props) => {
  
  let invitation = props.isPersonalInvitation
  let isInvitation = props.isPersonalInvitation.params

  const targetRef = useRef(null)
  const [isVisible, setVisible] = useState(false)

  let doAnimate = true

  const callbackFunction = entries => {
    const [entry] = entries
    let intersectionRatio = Math.round(entry.intersectionRatio* 10)/10
    if(intersectionRatio == 1){
      doAnimate = false
    }

    let children = entry.target.childNodes[0].childNodes
    if(doAnimate == true){
      if(intersectionRatio == 0.5){
        props.displayPhoto(entry.target.classList[0])
        document.getElementById('photos-container').classList.add('grow')
        
        props.displayPhoto(entry.target.classList[0])
        document.getElementById('photos-container').classList.add('grow')
        entry.target.childNodes[0].style.display = 'block'

        children.forEach(child => {

          if(child.classList == 'ticket-deco'){
            child.childNodes.forEach(children => {
              if(children.classList[0] !== 'ticket-stamp'){
                children.style.display = 'flex'
              }
              if(children.classList[0] == 'ticket-stamp'){
                  children.classList.add('desapear')
                }
              })
            }
          })

        setTimeout(() => {
          children.forEach(child => {
            if(child.classList == 'ticket-deco'){
              child.childNodes.forEach(children => {
                if(children.classList[0] == 'ticket-left-cover'){
                  
                  children.classList.add('resize-left')
                }
              })
            }
          })

        /* setTimeout(() => { */
          children.forEach(child => {
            if(child.classList == 'ticket-deco'){
              child.childNodes.forEach(children => {
                if(children.classList[0] == 'ticket-right-cover'){
                  
                  children.classList.add('resize-right')
                }
              })
            }
          })
        /* }, 2500) */
        /* setTimeout(() => { */
          children.forEach(child => {
            if(child.classList[0] == 'frame-container'){
              child.classList.add('frameApear')
             }
          })
        /* }, 2800); */

        /* setTimeout(() => { */
          children.forEach(child => {
            if(child.classList[0] == 'form'){
              child.style.display = 'flex'
            }
            if(child.classList[0] !== 'form' && child.classList[0] !== 'ticket-deco' && child.classList[0] !== 'frame-container'){
              console.log(child.classList[0])
              child.style.display = 'flex'
              child.classList.add('invitationFadeUp')
            }
          })
        /* }, 2500); */

        /* setTimeout(() => { */
          children.forEach(child => {
            child.classList.remove('desapear')
            child.classList.remove('invitaitonFadeUp')
          })
        /* }, 5200); */
        }, 2500)
        }
    }

    if(intersectionRatio <= 0.1){
      doAnimate = true
      document.getElementById('photos-container').classList.remove('grow')
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

  
  return (
    <>
    {isInvitation
      ?
        <div id='personal-invitation' className='personal-invitation' ref={targetRef}>
          <div id='ticket' className='ticket'>
            <div className='ticket-deco'>
              <div className='ticket-left-cover'></div>
              <div className='ticket-right-cover'></div>
              <Stamp className='ticket-stamp'/>
            </div>
            <Frame  />
            <h1 id='ticket-main-text' className='ticket-main-text'>{`Hola ${invitation.name}`}</h1>
            <h2 id='ticket-secondary-text' className='ticket-secondary-text'>Esta es una invitación de muestra, si te interesa crear una invitación para tu evento no dudes en llenar el siguiente campo con tu nombre, me pondré en contacto contigo para encontrar la mejor solución para tus necesidades.</h2>
            <Confirmation />
          </div>
        </div>
      :
        <div id='personal-invitation' className='personal-invitation' ref={targetRef}>
          <div id='ticket' className='ticket'>
            <div className='ticket-deco'>
              <div className='ticket-left-cover'></div>
              <div className='ticket-right-cover'></div>
              <Stamp className='ticket-stamp'/>
            </div>
            <Frame  />
            <h1 id='ticket-main-text' className='ticket-main-text'>{`Hola`}</h1>
            <h2 id='ticket-secondary-text' className='ticket-secondary-text'>Esta es una invitación de muestra, si te interesa crear una invitación para tu evento no dudes en llenar el siguiente campo con tu correo electrónico, me pondré en contacto contigo para encontrar la mejor solución para tus necesidades.</h2>
            
            <Confirmation />
          </div>
        </div>
    }
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    isPersonalInvitation: state.isPersonalInvitation
  }
}

const dispatchStateToProps = {
  displayPhoto,
}

export default connect(mapStateToProps, dispatchStateToProps)(PersonalInvitation)