import React from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux'
import { windowResize, homeSize, isPersonalInvitation, formChange } from '../actions';
import Carousel from '../components/Carousel';
import PhotosContainer from '../components/PhotosContainer';
import '../assets/styles/components/Home.scss'

const Home = (props) => {

  let { id } = useParams();

  const invited = [
    {
      params: 'fam-flores-santana',
      name: 'Fam. Flores Santana',
      tickets: 3
    },
    {
      params: 'esteban-valverde-maya',
      name: 'Esteban Valverde Maya',
      tickets: 1
    },
    {
      params: 'fam-nuñez-flores',
      name: 'Fam. Nuñez Flores',
      tickets: 2
    },
    {
      params: 'alberto-y-bibiana-alvarez',
      name: 'Alberto y bibiana Alvarez',
      tickets: 2
    },
    {
      params: 'luis-y-lidia-monsalvo',
      name: 'Luis y lidia Monsalvo',
      tickets: 2
    },
    {
      params: 'fam-hernandez',
      name: 'Fam. Hernandez',
      tickets: 3
    },
    {
      params: 'victoria-y-martin',
      name: 'Victoria y martin',
      tickets: 2
    },
    {
      params: 'hermelinda-santana',
      name: 'Hermelinda Santana',
      tickets: 4,
      children: 1,
    },
    {
      params: 'fam-mendieta-laguna',
      name: 'Fam. Mendieta Laguna',
      tickets: 4,
      children: 1,
    },
    {
      params: 'jorge-contreras',
      name: 'Jorge Contreras',
      tickets: 2
    },
    {
      params: 'guadalupe',
      name: 'Guadalupe',
      tickets: 2
    },
    {
      params: 'graciela',
      name: 'Graciela',
      tickets: 2
    },
    {
      params: 'rosa',
      name: 'Rosa',
      tickets: 2
    },
    {
      params: 'alejandro-flores',
      name: 'Alejandro Flores',
      tickets: 2
    },
    {
      params: 'daniel-diaz',
      name: 'Daniel Diaz',
      tickets: 3,
      children: 1,
    },
    {
      params: 'doc-eduardo',
      name: 'Doc. Eduardo',
      tickets: 2
    },
    {
      params: 'victor-gonzalez',
      name: 'Victor Gonzalez',
      tickets: 2
    },
    {
      params: 'cecilia',
      name: 'Cecilia',
      tickets: 2
    },
    {
      params: 'fam-vallejo-hernandez',
      name: 'Fam. Vallejo Hernandez',
      tickets: 2
    },
    {
      params: 'laura-vallejo',
      name: 'Laura vallejo',
      tickets: 2
    },
    {
      params: 'emmanuel-vallejo',
      name: 'Emmanuel Vallejo',
      tickets: 3,
      children: 1,
    },
    {
      params: 'josefina-vallejo',
      name: 'Josefina Vallejo',
      tickets: 2
    },
    {
      params: 'lucia-vallejo',
      name: 'Lucia Vallejo',
      tickets: 3
    },
    {
      params: 'rafael-vallejo',
      name: 'Rafael Vallejo',
      tickets: 2
    },
    {
      params: 'antonio-e-irma',
      name: 'Irma Villegas y Antonio Hernandez',
      tickets: 2
    },
    {
      params: 'francisco-y-juana',
      name: 'Francisco Escobar y Juana Escobar',
      tickets: 2
    },
    {
      params: 'alejandra-hernandez',
      name: 'Alejandra Hernandez',
      tickets: 6
    },
    {
      params: 'margarita-hernandez',
      name: 'Margarita Hernandez',
      tickets: 3
    },
    {
      params: 'guadalupe-hernandez',
      name: 'Guadalupe Hernandez',
      tickets: 2
    },
    {
      params: 'eduardo-nery-hernandez',
      name: 'Eduardo Nery Hernandez',
      tickets: 3
    },
    {
      params: 'rafael-avendaño',
      name: 'Rafael Avendaño',
      tickets: 2
    },
    {
      params: 'facundo-hernandez',
      name: 'Facundo Hernández',
      tickets: 2
    },
    {
      params: 'juan-manuel-hernandez',
      name: 'Juan Manuel Hernandez',
      tickets: 2
    },
    {
      params: 'susana-escobar',
      name: 'Susana Escobar',
      tickets: 2
    },
    {
      params: 'francisco-y-karina',
      name: 'Francisco Escobar y Karina Martínez',
      tickets: 2
    },
    {
      params: 'angeles-escobar',
      name: 'Angeles Escobar',
      tickets: 2
    },
    {
      params: 'carmen-escobar',
      name: 'Carmen Escobar',
      tickets: 2
    },
    {
      params: 'alejandra-escobar',
      name: 'Alejandra Escobar',
      tickets: 2
    },
    {
      params: 'fam-bricia',
      name: 'Fam. Bricia',
      tickets: 6
    },
    {
      params: 'prisi',
      name: 'Prisi',
      tickets: 1
    },
    {
      params: 'carmen',
      name: 'Carmen',
      tickets: 1
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
        props.formChange(invited.tickets <= 1 ? invited.tickets : invited.tickets-1)
        props.isPersonalInvitation({
          params: true,
          name: invited.name,
          tickets: invited.tickets,
          children: invited.children >= 1 ? invited.children : 0
        },)
      }
    })
  }

  window.addEventListener('resize', () => {
    props.windowResize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  })

  const handleLoad = (e) => {
    props.homeSize(e.target.scrollHeight)
   }

  const handleScroll = (e) => {

    let scrollTop = Math.ceil(e.target.scrollTop)
    if(scrollTop == e.target.clientHeight){
      setTimeout(() => {
        e.target.childNodes[1].style.bottom = 0
      }, 500);
    }

    let carousel = document.getElementById('carousel')
    let overflow = e.target.scrollHeight-e.target.offsetHeight
    if(overflow-5 <= e.target.scrollTop){
      carousel.style.overflow = 'scroll'
      carousel.style.display = 'block'
    }else{
      carousel.style.overflow = 'hidden'
    }
  }

  return (
    <>
    <section 
      id='home' 
      className='home' 
      onScroll={handleScroll} 
      onLoad={handleLoad}
    >
      <PhotosContainer/>
      <Carousel/>
    </section>
    </>
  )
};

const mapSateToProps = (state) => {
  return {
    windowSize: state.windowSize,
    hero: state.hero,
    currentPhoto: state.currentPhoto
  }
}

const dispatchStateToPops = {
  windowResize,
  homeSize,
  isPersonalInvitation,
  formChange
}

export default connect(mapSateToProps, dispatchStateToPops)(Home)