import React from "react";
import { connect } from "react-redux";
import photoSeven from '../assets/static/foto7.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoSeven = () => {
  return(
    <div id='photoSeven-container' className='photoSeven-container photo-container' loading='lazy'>
      <img 
        id='photoSeven' 
        className='photoSeven photo' 
        src={photoSeven} 
        alt="Foto 7" 
      />
    </div>
  )
}

export default connect(null, null)(PhotoSeven)