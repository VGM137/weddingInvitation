import React from 'react'
import { connect } from 'react-redux'
import { clearForm } from '../actions'
import '../assets/styles/components/SubmitMessage.scss'

const SubmitMessage = (props) => {

  let isInvitation = props.isInvitation

  props.clearForm()

  return (
    <>
      <div id='form-spacer' className='form-spacer'></div>
      <div className='submit-container'>
        <h1 className='submit-message'>Gracias por tu mensaje, me pondré en contacto contigo a la brevedad.</h1>
      </div>
    </>

  )
};

const mapStateToProps = (state) => {
  return {
    isInvitation: state.isPersonalInvitation.params
  }
}

const dispatchStateToProps = {
  clearForm,
}

export default connect(mapStateToProps, dispatchStateToProps)(SubmitMessage);
