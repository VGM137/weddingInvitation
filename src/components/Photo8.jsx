import React from "react";
import { connect } from "react-redux";
import photoEight from '../assets/static/foto8.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoEight = () => {
  return(
    <div id='photoEight-container' className='photoEight-container photo-container' loading='lazy'>
      <img 
        id='photoEight' 
        className='photoEight photo' 
        src={photoEight} 
        alt="Foto 8" 
      />
    </div>
  )
}

export default connect(null, null)(PhotoEight)