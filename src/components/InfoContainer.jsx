import React, {useRef, useState, useMemo, useEffect}  from "react";
import { connect } from "react-redux";
import TextSection from "./TextSection";
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/components/InfoContainer.scss'


const InfoContainer = (props) => {
  
  const targetRef = useRef(null)
  const [isVisible, setVisible] = useState(false)

  const callbackFunction = entries => {
    const [entry] = entries
    if(entry.isIntersecting){
      console.log(entry)
    }

    setVisible(entry.isIntersecting)
  }

  const options = useMemo(() => {
    return {
      root:null,
      rootMargin: '0px',
      threshold: 1
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    const currentTarget = targetRef.current
/*     console.log(currentTarget) */
      
    if(currentTarget) observer.observe(currentTarget)

    return () => {
      if(currentTarget) observer.unobserve(currentTarget)
    }
  }, [targetRef, options])


  return (
    <div 
      id='info-container' 
      className='info-container' 
      style={{marginTop: `${props.hero}px`}} 
      ref={targetRef}
    >
      <TextSection specific='engaged-couple'>
        <h1 id='main-text' className='main-text'>Novios:</h1>
        <h2 id='secondary-text' className='secondary-text'>Jazmín Adriana Flores Santana y José Rodrigo Vallejo Hernández</h2>
        <h2 id='secondary-text' className='secondary-text'>y</h2>
        <h2 id='secondary-text' className='secondary-text'>José Rodrigo Vallejo Hernández</h2>
      </TextSection>
    
      <TextSection specific='parents'>
        <h1 id='main-text' className='main-text'>Papás de la novia:</h1>
        <h2 id='secondary-text' className='secondary-text'>Graciela Santana Rivera y Adrián Flores Rodriguez</h2>
        <h1 id='main-text' className='main-text'>Papás del novio:</h1>
        <h2 id='secondary-text' className='secondary-text'>María de los Ángeles Hernández Ayala y José Rodrigo Vallejo Calderon </h2>
      </TextSection>

      <TextSection specific='good-parents'>
        <h1 id='main-text' className='main-text'>Padrinos:</h1>
      </TextSection>
      <TextSection specific='ladies'>
        <h1 id='main-text' className='main-text'>Damas:</h1>
      </TextSection>
      <TextSection specific='event'>
        <h1 id='main-text' className='main-text'>Fecha:</h1>
        <h2 id='secondary-text' className='secondary-text'>27 de Noviembre de 2021 </h2>
        <h1 id='main-text' className='main-text'>Ceremonia:</h1>
        <h2 id='secondary-text' className='secondary-text'>Lugar</h2>
        <h1 id='main-text' className='main-text'>Salón:</h1>
        <h2 id='secondary-text' className='secondary-text'>Jardín Flores</h2>
      </TextSection>
      <TextSection specific='gifts'>
        <h1 id='main-text' className='main-text'>Mesa de regalos:</h1>
        <h2 id='secondary-text' className='secondary-text'>Link a la mesa de regalos</h2>
        <h1 id='main-text' className='main-text'>Lluvia de sobres:</h1>
        <h2 id='secondary-text' className='secondary-text'>Bancomer</h2>
        <h2 id='secondary-text' className='secondary-text'>Banorte</h2>
        <h2 id='secondary-text' className='secondary-text'>Santander</h2>
        <h2 id='secondary-text' className='secondary-text'>Bananmex</h2>
      </TextSection>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    hero: state.hero
  }
}

export default connect(mapStateToProps, null)(InfoContainer)