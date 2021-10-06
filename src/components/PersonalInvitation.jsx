import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import '../assets/styles/components/PersonalInvitation.scss'

const PersonalInvitation = () => {
  
  let { id } = useParams();
  let invitationName

  const invited = [
    {
      params: 'familia-escobar-hernandez',
      name: 'Familia Escobar Hernández',
      tickets: 8
    },
    {
      params: 'jazmin-flores',
      name: 'Jazmín Flores',
      tickets: 2
    },
    {
      params: 'jose-vallejo',
      name: 'José Vallejo',
      tickets: 1
    },
  ]

  if(id){
    let paramsInput = id.toString()
    invited.forEach(invited => {
      if(paramsInput == invited.params){
        invitationName = invited
      }
    })
  }
  
  return (
    <>
    {invitationName
      ?
        <div id='personal-invitation' className='personal-invitation'>
          <div id='ticket' className='ticket'></div>
            <h1 id='ticket-main-text' className='ticket-main-text'>{`Hola ${invitationName.name}`}</h1>
            <h2 id='ticket-secondary-text' className='ticket-secondary-text'>Estamos muy felices por la celebración de nuestra unión y nos encantaría que nos acompañes.</h2>
            {invitationName.tickets > 1
              ?
                <>
                  <h2 id='ticket-secondary-text' className='ticket-secondary-text'>Esta invitatción es para ti y {invitationName.tickets == 2 ? 'una persona más.' : `${invitationName.tickets} personas más.`}</h2>
                  <h2 id='ticket-secondary-text' className='ticket-secondary-text'>Te esperamos con mucho gusto para compartir este día tan especial contigo y tus invitados.</h2>
                </>
              :
                <h2 id='ticket-secondary-text' className='ticket-secondary-text'>Tu invitación es individual, te esperamos con mucho gusto para compartir este día tan especial contigo.</h2>
            }
        </div>
      :
        <>
        </>
    }
    </>
  )
}

export default connect(null, null)(PersonalInvitation)