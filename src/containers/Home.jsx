import React from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux'
import { windowResize, homeSize, isPersonalInvitation } from '../actions';
import Carousel from '../components/Carousel';
import PhotosContainer from '../components/PhotosContainer';
import '../assets/styles/components/Home.scss'

const Home = (props) => {

  let isMobile = props.windowSize.width < 768
  let isFirstPhoto = props.currentPhoto == '' || props.currentPhoto == 'engaged-couple'

  let { id } = useParams();

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
        props.isPersonalInvitation({
          params: true,
          name: invited.name,
          tickets: invited.tickets,
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
        console.log(e.target.childNodes[1])
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
}

export default connect(mapSateToProps, dispatchStateToPops)(Home)
