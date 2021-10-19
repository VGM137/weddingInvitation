import React from "react";
import { connect } from "react-redux";
import photoFourteen from '../assets/static/foto14.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoFourteen = () => {
  return(
    <div id='photoFourteen-container' className='photoFourteen-container'>
      <img 
        id='photoFourteen' 
        className='photoFourteen' 
        src={photoFourteen} 
        alt="Foto 14" 
        loading='lazy'
      />
    </div>
  )
}

export default connect(null, null)(PhotoFourteen)