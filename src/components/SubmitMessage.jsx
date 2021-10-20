import React from 'react'
import { connect } from 'react-redux'
import { clearForm } from '../actions'
import '../assets/styles/components/SubmitMessage.scss'

const SubmitMessage = (props) => {

  props.clearForm()

  return (
    <>
      <div id='form-spacer' className='form-spacer'>
      </div>
      <div className='submit-container'>
        <h1 className='submit-message'>Gracias por confirmar tu asistencia, te esperamos con mucha emoción en nuestra boda.</h1>
      </div>
    </>
  )
};

const dispatchStateToProps = {
  clearForm,
}

export default connect(null, dispatchStateToProps)(SubmitMessage);
