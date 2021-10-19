import React from "react";
import { connect } from "react-redux";
import photoFour from '../assets/static/foto4.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoFour = () => {
  return(
    <div id='photoFour-container' className='photoFour-container photo-container' >
      <img 
        id='photoFour' 
        className='photoFour photo' 
        src={photoFour} 
        alt="Foto 4" 
        loading='lazy'
      />
    </div>
  )
}

export default connect(null, null)(PhotoFour)