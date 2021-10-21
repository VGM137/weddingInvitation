import React from "react";
import { connect } from "react-redux";
import photoFive from '../assets/static/foto5.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoFive = () => {
  return(
    <div id='photoFive-container' className='photoFive-container' >
      <img 
        id='photoFive' 
        className='photoFive' 
        src={photoFive} 
        alt="Foto 5" 
        loading='lazy'
      />
    </div>
  )
}

export default connect(null, null)(PhotoFive)