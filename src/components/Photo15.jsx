import React from "react";
import { connect } from "react-redux";
import photoFifteen from '../assets/static/foto15.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoFifteen = () => {
  return(
    <div id='photoFifteen-container' className='photoFifteen-container'>
      <img 
        id='photoFifteen' 
        className='photoFifteen' 
        src={photoFifteen} 
        alt="Foto 15" 
        loading='lazy'
      />
    </div>
  )
}

export default connect(null, null)(PhotoFifteen)