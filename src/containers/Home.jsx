import React from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux'
import { windowResize, homeSize, isPersonalInvitation, formChange } from '../actions';
import Carousel from '../components/Carousel';
import PhotosContainer from '../components/PhotosContainer';
import '../assets/styles/components/Home.scss'

const Home = (props) => {

  let { id } = useParams();

  if(id){
    let paramsInput = id.toString()
    props.isPersonalInvitation({
      params: true,
      name: paramsInput,
    },)
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