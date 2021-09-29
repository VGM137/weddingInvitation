import React from "react";
import { connect } from "react-redux";
import photoThree from '../assets/static/foto3.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoThree = () => {
  return(
    <div id='photoThree-container' className='photoThree-container photo-container'>
      <img 
        id='photoThree' 
        className='photoThree photo' 
        src={photoThree} 
        alt="Foto 3" 
      />
    </div>
  )
}

export default connect(null, null)(PhotoThree)