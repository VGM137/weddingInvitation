import React from "react";
import { connect } from "react-redux";
import photoTwelve from '../assets/static/foto12.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoTwelve = () => {
  return(
    <div id='photoTwelve-container' className='photoTwelve-container'>
      <img 
        id='photoTwelve' 
        className='photoTwelve' 
        src={photoTwelve} 
        alt="Foto 12" 
        loading='lazy'
      />
    </div>
  )
}

export default connect(null, null)(PhotoTwelve)