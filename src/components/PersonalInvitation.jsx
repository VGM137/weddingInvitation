import React, {useRef, useState, useMemo, useEffect} from "react";
import { connect } from "react-redux";
import { displayPhoto } from "../actions";
import Frame from "./Frame";
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
    console.log(entry)
    if(intersectionRatio == 1){
      doAnimate = false
    }

    if(doAnimate == true){
      if(intersectionRatio == 0.2){
        console.log(entry.target.classList[1])
        props.displayPhoto(entry.target.classList[0])
        let children = entry.target.childNodes[0].childNodes
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

  
  return (
    <>
    {isInvitation
      ?
        <div id='personal-invitation' className='personal-invitation' ref={targetRef}>
          <div id='ticket' className='ticket'>
            <Frame specific={'invitation-frame'} />
            <h1 id='ticket-main-text' className='ticket-main-text'>{`Hola ${invitation.name}`}</h1>
            <h2 id='ticket-secondary-text' className='ticket-secondary-text'>Estamos muy felices por la celebración de nuestra unión y nos encantaría que nos acompañes.</h2>
          
            {invitation.tickets > 1
              ?
                <>
                  <h2 id='ticket-secondary-text' className='ticket-secondary-text'>Esta invitatción es para ti y {invitation.tickets == 2 ? 'una persona más.' : `${invitation.tickets} personas más.`}</h2>
                  <h2 id='ticket-secondary-text' className='ticket-secondary-text'>Te esperamos con mucho gusto para compartir este día tan especial contigo y tus invitados.</h2>
                </>
              :
                <>                         
                  <h2 id='ticket-secondary-text' className='ticket-secondary-text'>Tu invitación es individual, te esperamos con mucho gusto para compartir este día tan especial contigo.</h2>
                </>
            }
          </div>
        </div>
      :
        <>
        </>
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