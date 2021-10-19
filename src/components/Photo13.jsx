import React from "react";
import { connect } from "react-redux";
import photoThirteen from '../assets/static/foto13.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoThirteen = () => {
  return(
    <div id='photoThirteen-container' className='photoThirteen-container'>
      <img 
        id='photoThirteen' 
        className='photoThirteen' 
        src={photoThirteen} 
        alt="Foto 13" 
        loading='lazy'
      />
    </div>
  )
}

export default connect(null, null)(PhotoThirteen)