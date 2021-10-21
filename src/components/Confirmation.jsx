import React from 'react';
import { useForm } from '@formspree/react';
import { connect } from 'react-redux';
import { formChange, confirmation, handleSubmission, isPersonalInvitation } from '../actions'
import '../assets/styles/components/Confirmation.scss'
import SubmitMessage from '../components/SubmitMessage'
import SubmitError from '../components/SubmitError'

const Confirmation = (props) => {

  let invitationName = props.invitationName 
  let invitationTickets = props.invitationTickets  
  let formTickets = props.formTickets 
  let confirm = props.checked.toString()
  let isInvitation = props.invitationParams

  const [state, handleSubmit] = useForm("xleakdez");

  const handleChange = (e) => {
    if(e.target.value == ''){
      props.formChange([])
    }else{
      props.formChange(e.target.value)
    }
  }

  const handleClick = (e) => {
    props.confirmation(e.target.checked)
  }
  
  if (state.succeeded) {
    return (
      <SubmitMessage />
    )
  }else if(state.errors.length >= 1 ) {
    return (
      <SubmitError />
    )
  }

  return( 
    <>
    {isInvitation 
      ?
      <div id="form" className="form">
        <h1 className="form-mainText">Por favor confirma tu asistencia.</h1>
        <form id='form-form' className="form-form" onSubmit={handleSubmit}>
          <input 
            type="checkbox" 
            name="name" 
            id="form-name" 
            className="form-name form-item" 
            placeholder="Nombre"
            onClick={handleClick}
            value={invitationName}
            required/>
          <h2 id='form-secondaryText' className='form-secondaryText text1' >Confirmar mi asistencia</h2>
          {invitationTickets > 1 &&
            <>
              <input 
                type="number" 
                max={invitationTickets-1}
                min={0}
                name="tickets" 
                id="form-tickets" 
                className="form-tickets form-item" 
                onChange={handleChange}
                value={formTickets}
                controls={true}
                required/>
              <h2 id='form-secondaryText' className='form-secondaryText text2' >
                {formTickets > 0
                  ?
                    `Y la de ${formTickets < 2 ? 'mi invitado' : `mis ${formTickets} invitados`} `
                  :
                    'No llevaré invitados'
                }</h2>
              <h3 alt={`*Por favor indica cuántos invitados llevarás a la boda, máximo ${invitationTickets-1}.`} className='ticket-advice'></h3>
            </>
          }

          <button 
            type='submit'
            formMethod='post'
            className="form-button" 
            id="form-button" 
            disabled={formTickets < 0 || confirm == 'false' || formTickets > invitationTickets }>
            Enviar
          </button>
        </form>
      </div>
      :
      <div id="form" className="form">
        <h1 className="form-mainText">Por favor confirma tu asistencia.</h1>
        <form id='form-form' className="form-form-new-invited" onSubmit={handleSubmit}>
          <input 
            type="checkbox" 
            name="name" 
            id="form-name" 
            className="form-name form-item" 
            placeholder="Nombre"
            onClick={handleClick}
            value={'Confirma asistencia'}
            required/>
          <h2 id='form-secondaryText' className='form-secondaryText text1' >Confirmar mi asistencia</h2>
              <input 
                type="text" 
                min={3}
                name="tickets" 
                id="form-new-invited" 
                className="form-new-invited form-item" 
                onChange={handleChange}
                value={formTickets}
                controls={true}
                placeholder='Escribe tu nombre.'
                required/>
              <h3 alt={`*Por favor indicanos tu nombre para apartar tu lugar.`} className='ticket-advice'></h3>

          <button 
            type='submit'
            formMethod='post'
            className="form-button" 
            id="form-button" 
            disabled={formTickets.length < 3 || confirm == 'false' }>
            Enviar
          </button>
        </form>
      </div>
    }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    invitationParams: state.isPersonalInvitation.params,
    invitationName: state.isPersonalInvitation.name,
    invitationTickets: state.isPersonalInvitation.tickets,
    checked: state.form.checked,
    formTickets: state.form.tickets,
    submission: state.submission
  }
}

const dispatchStateToProps = {
  formChange,
  confirmation,
  handleSubmission,
}

export default connect(mapStateToProps, dispatchStateToProps)(Confirmation);