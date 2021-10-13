import React from "react";
import { connect } from "react-redux";
import '../assets/styles/components/PhotoFooter.scss'

const PhotoFooter = ({specific, children}) => {
  return (
    <div id='photo-footer' className={`photo-footer ${specific}`}>
      <div className='photo-footer-container'>
        {children}
      </div>
    </div>
  )
}

export default connect(null, null)(PhotoFooter)