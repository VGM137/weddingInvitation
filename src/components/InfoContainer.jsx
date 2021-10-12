import React from "react";
import { connect } from "react-redux";
import Hero from "./Hero";
import TextSection from "./TextSection";
import Frame from "./Frame";
import PersonalInvitation from "./PersonalInvitation";
import ScrollButtons from "./ScrollButtons";
import EngagedPhoto from '../assets/static/engaged-photo.svg'
import Rings from '../assets/static/rings.svg'
import Theme1 from '../assets/static/theme1.svg'
import Theme2 from '../assets/static/theme2.svg'
import Theme3 from '../assets/static/theme3.svg'
import Theme4 from '../assets/static/theme4.svg'
import Date from '../assets/static/date.svg'
import '../assets/styles/components/InfoContainer.scss'


const InfoContainer = (props) => {

  let isMobile = props.windowSize.width < 768
  let isVisible = props.currentPhoto == 'engaged-couple'
  
  return (
    <div id='info-container' className='info-container' >

      <ScrollButtons/>
      
      <Hero/>
      
      <TextSection specific='engaged-couple'>
        <Frame />
        <div id='info-engaged-img-container' 
          className='info-engaged-img-container'>
          <EngagedPhoto id='info-engaged-img' className='info-engaged-img' />
        </div>
        <h1 id='main-text' className='main-text'>Novios:</h1>
        <h2 id='secondary-text' className='secondary-text'>
          {`Jazmín Adriana 
            Flores Santana`}</h2>
        <div id='engaged-rings-container' className='engaged-rings-container'>
          <Rings id='engaged-rings' className='engaged-rings' />
        </div>
        <h2 id='secondary-text' className='secondary-text'>
          {`José Rodrigo 
            Vallejo Hernández`}</h2>
      </TextSection>

      <TextSection specific='parents'>
        <Frame />
        <h1 id='main-text' className='main-text'>Nuestros padres:</h1>
        <h2 id='secondary-text' className='secondary-text'>
          {`Graciela 
            Santana Rivera
         
            &

            Adrián 
            Flores Rodriguez`}</h2>
        <div id='deco-element-container' className='deco-element-container'>
          <Theme1 id='deco-element-img' className='deco-element-img' />
        </div>
        <h2 id='secondary-text' className='secondary-text'>
          {`María de los Ángeles 
            Hernández Ayala
        
            &

            José Rodrigo 
            Vallejo Calderon`}</h2>
      </TextSection>

      <TextSection specific='good-parents'>
        <Frame />
        <h1 id='main-text' className='main-text'>Nuestros Padrinos:</h1>
        <h2 id='secondary-text' className='secondary-text'>Francisco Javier Escobar y Karina Martínez  </h2>
        <h2 id='secondary-text' className='secondary-text'>Laura Haydee Vallejo Hernández </h2>
        <h2 id='secondary-text' className='secondary-text'>Jessica Flores          </h2>
        <h2 id='secondary-text' className='secondary-text'>Eduardo Hernández</h2>
        <h2 id='secondary-text' className='secondary-text'>Bibiana Álvarez</h2>
        <h2 id='secondary-text' className='secondary-text'>Luis y Lidia Monsalvo</h2>
        <div id='deco-element-container' className='deco-element-container'>
          <Theme2 id='deco-element-img' className='deco-element-img' />
        </div>
      </TextSection>

      <TextSection specific='ladies'>
        <Frame />
        <h1 id='main-text' className='main-text'>Damas de Honor</h1>
        <h2 id='secondary-text' className='secondary-text'>Diana Flores</h2>
        <h2 id='secondary-text' className='secondary-text'>Jessica Flores</h2>
        <h2 id='secondary-text' className='secondary-text'>Valeria Hernández </h2>
        <h2 id='secondary-text' className='secondary-text'>Norma Laguna</h2>
        <div id='deco-element-container' className='deco-element-container'>
          <Theme4 id='deco-element-img' className='deco-element-img' />
        </div>
      </TextSection>

      <TextSection specific='grooms'>
        <Frame />
        <h1 id='main-text' className='main-text'>Caballeros de Honor</h1>
        <h2 id='secondary-text' className='secondary-text'>Rafael Avendaño</h2>
        <h2 id='secondary-text' className='secondary-text'>Francisco Escobar</h2>
        <h2 id='secondary-text' className='secondary-text'>Eduardo Hernández</h2>
        <h2 id='secondary-text' className='secondary-text'>Esteban Valverde</h2>
        <div id='deco-element-container' className='deco-element-container'>
          <Theme3 id='deco-element-img' className='deco-element-img' />
        </div>
      </TextSection>

      <TextSection specific='event' childrenSpecific='text-container-event'>
        <Frame specific='event-frame'/>
        <div id='deco-date-container' className='deco-date-container'>
          <Date id='deco-date-img' className='deco-date-img' />
        </div>
        <h1 id='main-text' className='main-text'>Ceremonia:</h1>
        <h2 id='secondary-text' className='secondary-text'>Jardín Flores</h2>
        <h1 id='main-text' className='main-text'>Horario:</h1>
        <h2 id='secondary-text' className='secondary-text'>3:30pm</h2>
      </TextSection>

      <PersonalInvitation />

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize,
    hero: state.hero,
    currentPhoto: state.currentPhoto,
  }
}

export default connect(mapStateToProps, null)(InfoContainer)