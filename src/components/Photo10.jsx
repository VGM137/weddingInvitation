import React from "react";
import { connect } from "react-redux";
import photoTen from '../assets/static/foto10.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoTen = () => {
  return(
    <div id='photoTen-container' className='photoTen-container'>
      <img 
        id='photoTen' 
        className='photoTen' 
        src={photoTen} 
        alt="Foto 10" 
        loading='lazy'
      />
    </div>
  )
}

export default connect(null, null)(PhotoTen)