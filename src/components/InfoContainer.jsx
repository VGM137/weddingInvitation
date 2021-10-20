import React from "react";
import { connect } from "react-redux";
import Hero from "./Hero";
import TextSection from "./TextSection";
import PersonalInvitation from "./PersonalInvitation";
import ScrollButtons from "./ScrollButtons";
import EngagedPhoto from '../assets/static/engaged-photo.svg'
import Rings from '../assets/static/rings.svg'
import Theme1 from '../assets/static/theme1.svg'
import Theme2 from '../assets/static/theme2.svg'
import Theme3 from '../assets/static/theme3.svg'
import Theme4 from '../assets/static/theme4.svg'
import Date from '../assets/static/date.svg'
import Knot from '../assets/static/knot.svg'
import Facebook from '../assets/static/facebook.svg'
import EtiquetaM from '../assets/static/etiquetaM.svg'
import EtiquetaH from '../assets/static/etiquetaH.svg'
import '../assets/styles/components/InfoContainer.scss'


const InfoContainer = (props) => {

  let isMobile = props.windowSize.width < 768
  let isVisible = props.currentPhoto == 'engaged-couple'
  
  return (
    <div id='info-container' className='info-container' >

      <ScrollButtons/>
      
      <Hero/>
      
      <TextSection specific='engaged-couple' loading='lazy'>
        <div className='info-cover' id='info-cover'></div>
        <div id='info-content' className='info-content info-engaged'>
          <div id='info-engaged-img-container' 
            className='info-engaged-img-container'>
            <EngagedPhoto id='info-engaged-img' className='info-engaged-img' />
          </div>
          <h1 id='main-text' className='main-text'>
            {`Jazmín    &   Rodrigo`}</h1>
          <div id='engaged-rings-container' className='engaged-rings-container'>
            <Rings id='engaged-rings' className='engaged-rings' />
          </div>
          <h2 className='secondary-text engaged-phrase'>
            {`Cuando te das cuenta que deseas pasar el resto de tu vida con alguien,
            `}
            <b>{`quieres que el resto de tu vida comience lo antes posible.`}
            </b>
          </h2>
        </div>
      </TextSection>

      <TextSection specific='parents' loading='lazy'>
        <div className='info-cover' id='info-cover'></div>
        <div id='info-content' className='info-content info-parents'>
          <h1 id='main-text' className='main-text'>Nuestros padres:</h1>
          <h2 id='secondary-text' className='secondary-text'>
            {`Graciela 
              Santana Rivera

              &

              Adrián 
              Flores Rodriguez`}</h2>
          <div id='deco-element-container' className='deco-element-container'>
            <Theme1 id='deco-element-img' className='deco-element-img' />
          </div>
          <h2 id='secondary-text' className='secondary-text'>
            {`María de los Ángeles 
              Hernández Ayala

              &

              José Rodrigo 
              Vallejo Calderon`}</h2>
        </div>
      </TextSection>

      <TextSection specific='knot' >
        <div className='info-cover' id='info-cover'></div>
        <div className='info-content'>
          <h2 className='main-text knot-text'>
            {`Uno solo puede ser vencido, pero dos pueden resistir;`}
          </h2>
          <div className='knot-img-container'>
            <Knot className='knot-img' />
          </div>
          <h1 className='main-text knot-text'>  
            {`Cordón de tres dobleces no se rompe facilmente.`}
          </h1>
        </div>
      </TextSection>

      <TextSection specific='good-parents'>
        <div className='info-cover' id='info-cover'></div>
        <div id='info-content' className='info-content'>
          <h1 id='main-text' className='main-text'>Nuestros Padrinos:</h1>
          <h2 id='secondary-text' className='secondary-text'>{
          `Francisco Javier Escobar 
          y Karina Martínez`}  </h2>
          <h2 id='secondary-text' className='secondary-text'>{
          `Laura Haydee 
          Vallejo Hernández`}</h2>
          <h2 id='secondary-text' className='secondary-text'>Jessica Flores          </h2>
          <h2 id='secondary-text' className='secondary-text'>Eduardo Hernández</h2>
          <h2 id='secondary-text' className='secondary-text'>Bibiana Álvarez</h2>
          <h2 id='secondary-text' className='secondary-text'>Luis y Lidia Monsalvo</h2>
          <h2 id='secondary-text' className='secondary-text'>Ana Ceja</h2>
          <h2 id='secondary-text' className='secondary-text'>Dalia y Abigail Valerio</h2>
          <div id='deco-element-container' className='deco-element-container'>
            <Theme2 id='deco-element-img' className='deco-element-img' />
          </div>
        </div>
      </TextSection>

      <TextSection specific='ladies'>
        <div className='info-cover' id='info-cover'></div>
        <div id='info-content' className='info-content'>
          <h1 id='main-text' className='main-text'>Damas de Honor</h1>
          <h2 id='secondary-text' className='secondary-text'>Diana Flores</h2>
          <h2 id='secondary-text' className='secondary-text'>Jessica Flores</h2>
          <h2 id='secondary-text' className='secondary-text'>Valeria Hernández </h2>
          <h2 id='secondary-text' className='secondary-text'>Norma Laguna</h2>
          <div id='deco-element-container' className='deco-element-container'>
            <Theme4 id='deco-element-img' className='deco-element-img' />
          </div>
        </div>
      </TextSection>

      <TextSection specific='grooms'>
        <div className='info-cover' id='info-cover'></div>
        <div id='info-content' className='info-content'>
          <h1 id='main-text' className='main-text'>Caballeros de Honor</h1>
          <h2 id='secondary-text' className='secondary-text'>Rafael Avendaño</h2>
          <h2 id='secondary-text' className='secondary-text'>Francisco Escobar</h2>
          <h2 id='secondary-text' className='secondary-text'>Eduardo Hernández</h2>
          <h2 id='secondary-text' className='secondary-text'>Esteban Valverde</h2>
          <div id='deco-element-container' className='deco-element-container'>
            <Theme3 id='deco-element-img' className='deco-element-img' />
          </div>
        </div>
      </TextSection>

      <TextSection specific='event' childrenSpecific='text-container-event'>
        <div className='info-cover' id='info-cover'></div>
        <div id='info-content' className='info-content'>
          <div id='deco-date-container' className='deco-date-container'>
            <Date id='deco-date-img' className='deco-date-img' />
          </div>        
          <div className='event-info'>
            <div className='event-location'>
              <h1 id='main-text' className='main-text'>Mapa:</h1>
              <div className='event-location-container'>
                <iframe 
                  id='google-map'
                  className='google-map'
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDTjYvsjcBXvX8draj42iSB8iPA7cWlJGQ&q=place_id:ChIJEw77P-vj0YURV9IkkiJ_DYY" 
                  width="200px" 
                  height="200px" 
                  allowFullScreen="" 
                  loading="lazy" 
                  allowpopups='true' />
              </div>
            </div>
            <div className='event-hour'>
              <h1 id='main-text' className='main-text'>Ceremonia:</h1>
              <h2 id='event-secondary-text' className='event-secondary-text'>{
                `Te esperamos en 
                El Jardín de las flores`}</h2>
              <h2 id='event-secondary-text' className='event-secondary-text'>Calle Compuerta 5, El Molino, 56334 Chimalhuacán, Méx.</h2>
              <h1 id='main-text' className='main-text'>Horario:</h1>
              <h2 id='secondary-text' className='secondary-text'>27/11/21 15:30 hrs.</h2>
            </div>
          </div>
        </div>
      </TextSection>

      <PersonalInvitation />

      <TextSection specific='social'>
        <div className='info-cover' id='info-cover'></div>
        <div className='info-content'>
          <h1 className='main-text'>No faltes</h1>
          <h3 className='third-text'>El regalo es opcional, pero lo más importante para nosotros es tu compañía.</h3>
          <h1 className='main-text'>Código de vestimenta</h1>
          <div className='social-dressing-code'>
            <EtiquetaM className='social-etiqueta'/>
            <h3 className='third-text'>Etiqueta</h3>
            <EtiquetaH className='social-etiqueta'/>
          </div>
          <h1 className='main-text'>Redes sociales</h1>
          <h3 className='third-text'>
            {`Escríbenos un mensaje con tus mejores deseos, queremos compartir este momento contigo y tus invitados y es muy importante para nosotros que nos apoyes.
            Entra al link de nuestro muro de facebook y confirma tu asistencia dejándonos saber que contamos contigo para festejar nuestra unión.`}</h3>
          <h3 className='third-text hashtag'>{'#NuestraBodaJ&R'}</h3>
          <div className='facebook-container' >
            <a href="https://www.facebook.com/groups/767548173909504/" target="_blank" rel="noopener noreferrer">
              ¡Escríbenos en Facebook!
              <Facebook className='fb-logo' />
            </a>
          </div>
        </div>
      </TextSection>

      <TextSection specific='health-protocol'>
        <div className='info-cover' id='info-cover'></div>
        <div className='info-content health-content'>
          <h1 className='main-text'>Protocolo de salud</h1>
          <h2 className='secondary-text'>Medidas de higiene y seguridad:</h2>
          <ol className='health-protocol-list'>
            <li className='secondary-text'>1. Por favor porta el cubrebocas todo el tiempo posible.</li>
            <li className='secondary-text'>2. Procura llevar tu gel antibacterial y utilizarlo con frecuencia.</li>
            <li className='secondary-text'>3. Permite que el personal revise la temperatura a la entrada del evento.</li>
            <li className='secondary-text'>4. Lava tus manos antes y despues de comer o cada vez que te levantes de tu mesa.</li>
            <li className='secondary-text'>5. Si sientes algún síntoma previo al evento háznoslo saber, nosotros comprenderemos tu ausencia.</li>
          </ol>
        </div>
      </TextSection>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    windowSize: state.windowSize,
    hero: state.hero,
    currentPhoto: state.currentPhoto,
  }
}

export default connect(mapStateToProps, null)(InfoContainer)