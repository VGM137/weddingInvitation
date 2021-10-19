import React from "react";
import { connect } from "react-redux";
import photoSix from '../assets/static/foto6.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoSix = () => {
  return(
    <div id='photoSix-container' className='photoSix-container photo-container' loading='lazy'>
      <img 
        id='photoSix' 
        className='photoSix photo' 
        src={photoSix} 
        alt="Foto 6" 
      />
    </div>
  )
}

export default connect(null, null)(PhotoSix)