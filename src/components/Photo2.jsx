import React from "react";
import { connect } from "react-redux";
import photoTwo from '../assets/static/foto2.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoTwo = () => {
  return(
    <div id='photoTwo-container' className='photoTwo-container photo-container'>
      <img 
        id='photoTwo' 
        className='photoTwo photo' 
        src={photoTwo} 
        alt="Foto 2" 
      />
    </div>
  )
}

export default connect(null, null)(PhotoTwo)