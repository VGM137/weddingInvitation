import React from "react";
import { connect } from "react-redux";
import Hero from "./Hero";
import TextSection from "./TextSection";
import PersonalInvitation from "./PersonalInvitation";
import engagedPhoto from '../assets/static/engaged-photo.png'
import rings from '../assets/static/rings.png'
import theme1 from '../assets/static/theme1.png'
import theme2 from '../assets/static/theme2.png'
import theme3 from '../assets/static/theme3.png'
import date from '../assets/static/date.png'
import 'aos/dist/aos.css';
import '../assets/styles/components/InfoContainer.scss'


const InfoContainer = (props) => {

  let isMobile = props.windowSize.width < 768
  let isVisible = props.currentPhoto == 'engaged-couple'
  
  return (
    <div 
      id='info-container' 
      className='info-container' 
    >
      <TextSection specific='hero'>
        <Hero/>
      </TextSection>

      <TextSection specific='engaged-couple'>
        <div id='info-engaged-img-container' 
          className='info-engaged-img-container'>
          <img 
            id='info-engaged-img' 
            className='info-engaged-img' 
            src={engagedPhoto} 
            alt="Novios" />
        </div>
        <h1 id='main-text' className='main-text'>Novios:</h1>
        <h2 id='secondary-text' className='secondary-text'>
          {`Jazmín Adriana 
            Flores Santana`}</h2>
        <div id='engaged-rings-container' className='engaged-rings-container'>
          <img id='engaged-rings' className='engaged-rings' src={rings} />
        </div>
        <h2 id='secondary-text' className='secondary-text'>
          {`José Rodrigo 
            Vallejo Hernández`}</h2>
      </TextSection>

      <TextSection specific='parents'>
        <h1 id='main-text' className='main-text'>Nuestros padres:</h1>
        <h2 id='secondary-text' className='secondary-text'>
          {`Graciela 
            Santana Rivera
         
            &

            Adrián 
            Flores Rodriguez`}</h2>
        <div id='deco-element-container' className='deco-element-container'>
          <img 
            id='deco-element-img' 
            className='deco-element-img' 
            src={theme2} 
            alt="Tema 2" />
        </div>
        <h2 id='secondary-text' className='secondary-text'>
          {`María de los Ángeles 
            Hernández Ayala
        
            &

            José Rodrigo 
            Vallejo Calderon`}</h2>
      </TextSection>

      <TextSection specific='good-parents'>
        <h1 id='main-text' className='main-text'>Nuestros Padrinos:</h1>
        <h2 id='secondary-text' className='secondary-text'>Francisco Javier Escobar y Karina Martínez  </h2>
        <h2 id='secondary-text' className='secondary-text'>Laura Haydee Vallejo Hernández </h2>
        <h2 id='secondary-text' className='secondary-text'>Jessica Flores          </h2>
        <h2 id='secondary-text' className='secondary-text'>Eduardo Hernández</h2>
        <h2 id='secondary-text' className='secondary-text'>Bibiana Álvarez</h2>
        <h2 id='secondary-text' className='secondary-text'>Luis y Lidia Monsalvo</h2>
        <div id='deco-element-container' className='deco-element-container'>
          <img 
            id='deco-element-img' 
            className='deco-element-img' 
            src={theme1} 
            alt="Tema 2" />
        </div>
      </TextSection>

      <TextSection specific='ladies'>
        <h1 id='main-text' className='main-text'>Damas de Honor</h1>
        <h2 id='secondary-text' className='secondary-text'>Diana Flores</h2>
        <h2 id='secondary-text' className='secondary-text'>Jessica Flores</h2>
        <h2 id='secondary-text' className='secondary-text'>Valeria Hernández </h2>
        <h2 id='secondary-text' className='secondary-text'>Norma Laguna</h2>
        <div id='deco-element-container' className='deco-element-container'>
          <img 
            id='deco-element-img' 
            className='deco-element-img' 
            src={theme1} 
            alt="Tema 2" />
        </div>
      </TextSection>

      <TextSection specific='grooms'>
        <h1 id='main-text' className='main-text'>Caballeros de Honor</h1>
        <h2 id='secondary-text' className='secondary-text'>Rafael Avendaño</h2>
        <h2 id='secondary-text' className='secondary-text'>Francisco Escobar</h2>
        <h2 id='secondary-text' className='secondary-text'>Eduardo Hernández</h2>
        <h2 id='secondary-text' className='secondary-text'>Esteban Valverde</h2>
        <div id='deco-element-container' className='deco-element-container'>
          <img 
            id='deco-element-img' 
            className='deco-element-img' 
            src={theme3} 
            alt="Tema 2" />
        </div>
      </TextSection>

      <TextSection specific='event'>
        <div id='deco-date-container' className='deco-date-container'>
          <img 
            id='deco-date-img' 
            className='deco-date-img' 
            src={date} 
            alt="Fecha" />
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