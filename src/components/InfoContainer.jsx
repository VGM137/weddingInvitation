import React, {useRef, useState, useMemo, useEffect}  from "react";
import { connect } from "react-redux";
import '../assets/styles/components/InfoContainer.scss'

const InfoContainer = (props) => {

/*   setTimeout(() => {
    let photoOne = document.getElementById('photoOne')
    let infoContainer = document.getElementById('info-container')
    console.log(photoOne.scrollHeight)
    infoContainer.style.marginTop= `${photoOne.scrollHeight}px`
  }, 5); */

  return (
    <div id='info-container' className='info-container' style={{marginTop: `${props.hero}px`}}>
      <div id='text-section' className='text-section engaged-couple' /* ref={ targetRef } */>
        <h1 id='main-text' className='main-text'>Novios:</h1>
        <h2 id='secondary-text' className='secondary-text'>Jazmín Adriana Flores Santana y José Rodrigo Vallejo Hernández</h2>
        <h2 id='secondary-text' className='secondary-text'>y</h2>
        <h2 id='secondary-text' className='secondary-text'>José Rodrigo Vallejo Hernández</h2>
      </div>
      <div id='text-section' className='text-section parents' /* ref={ targetRef } */>
        <h1 id='main-text' className='main-text'>Papás de la novia:</h1>
        <h2 id='secondary-text' className='secondary-text'>Graciela Santana Rivera y Adrián Flores Rodriguez</h2>
        <h1 id='main-text' className='main-text'>Papás del novio:</h1>
        <h2 id='secondary-text' className='secondary-text'>María de los Ángeles Hernández Ayala y José Rodrigo Vallejo Calderon </h2>
      </div>
      <div id='text-section' className='text-section good-parents'/*  ref={ targetRef } */>
        <h1 id='main-text' className='main-text'>Padrinos:</h1>
      </div>
      <div id='text-section' className='text-section ladies' /* ref={ targetRef } */>
        <h1 id='main-text' className='main-text'>Damas:</h1>
      </div>
      <div id='text-section' className='text-section event' /* ref={ targetRef } */>
        <h1 id='main-text' className='main-text'>Fecha:</h1>
        <h2 id='secondary-text' className='secondary-text'>27 de Noviembre de 2021 </h2>
        <h1 id='main-text' className='main-text'>Ceremonia:</h1>
        <h2 id='secondary-text' className='secondary-text'>Lugar</h2>
        <h1 id='main-text' className='main-text'>Salón:</h1>
        <h2 id='secondary-text' className='secondary-text'>Jardín Flores</h2>
      </div>
      <div id='text-section' className='text-section event' /* ref={ targetRef } */>
        <h1 id='main-text' className='main-text'>Mesa de regalos:</h1>
        <h2 id='secondary-text' className='secondary-text'>Link a la mesa de regalos</h2>
        <h1 id='main-text' className='main-text'>Lluvia de sobres:</h1>
        <h2 id='secondary-text' className='secondary-text'>Bancomer</h2>
        <h2 id='secondary-text' className='secondary-text'>Banorte</h2>
        <h2 id='secondary-text' className='secondary-text'>Santander</h2>
        <h2 id='secondary-text' className='secondary-text'>Bananmex</h2>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    hero: state.hero
  }
}

export default connect(mapStateToProps, null)(InfoContainer)