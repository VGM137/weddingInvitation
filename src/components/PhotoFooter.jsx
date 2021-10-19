import React from "react";
import { connect } from "react-redux";
import Frame from "./Frame";
import '../assets/styles/components/PhotoFooter.scss'

const PhotoFooter = ({specific, children}) => {
  return (
    <div id='photo-footer' className={`photo-footer ${specific}`}>
      <div className={`photo-footer-container ${specific}`}>
        <Frame specific='photo-footer-frame'/>
        {children}
      </div>
    </div>
  )
}

export default connect(null, null)(PhotoFooter)