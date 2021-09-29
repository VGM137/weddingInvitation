import React from "react";
import { connect } from "react-redux";
import photoOne from '../assets/static/foto1.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoOne = () => {
  return(
    <div id='photoOne-container' className='photoOne-container photo-container'>
      <img 
        id='photoOne' 
        className='photoOne photo' 
        src={photoOne} 
        alt="Foto 1" 
      />
    </div>
  )
}

export default connect(null, null)(PhotoOne)