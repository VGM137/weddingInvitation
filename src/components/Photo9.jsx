import React from "react";
import { connect } from "react-redux";
import photoNine from '../assets/static/foto9.jpg'
import '../assets/styles/components/Photo.scss'

const PhotoNine = () => {
  return(
    <div id='photoNine-container' className='photoNine-container'>
      <img 
        id='photoNine' 
        className='photoNine' 
        src={photoNine} 
        alt="Foto 9" 
      />
    </div>
  )
}

export default connect(null, null)(PhotoNine)