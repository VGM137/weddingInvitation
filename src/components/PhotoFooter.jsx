import React from "react";
import { connect } from "react-redux";

const PhotoFooter = ({specific, children}) => {
  return (
    <div id='photo-footer' className={`photo-footer ${specific}`}>
      {children}
    </div>
  )
}

export default connect(null, null)(PhotoFooter)