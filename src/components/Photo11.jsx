import React from "react";
import { connect } from "react-redux";
import photoEleven from '../assets/static/foto11.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoEleven = () => {
  return(
    <div id='photoEleven-container' className='photoEleven-container'>
      <img 
        id='photoTen' 
        className='photoEleven' 
        src={photoEleven} 
        alt="Foto 11" 
      />
    </div>
  )
}

export default connect(null, null)(PhotoEleven)