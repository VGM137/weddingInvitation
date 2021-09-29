import React from 'react';
import { connect } from 'react-redux'
import { windowResize, homeSize } from '../actions';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import PhotosContainer from '../components/PhotosContainer';
import '../assets/styles/components/Home.scss'

const Home = (props) => {

  let isMobile = props.windowSize.width < 768

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
/*     console.log(e)
    console.log(e.target.scrollTop) */
    let carousel = document.getElementById('carousel')
    let infoContainer = document.getElementById('info-container')
    let hero = document.getElementById('hero')
/*     console.log(hero.clientHeight) */

      let overflow = e.target.scrollHeight-e.target.offsetHeight
/*       console.log(overflow) */
      if(overflow-5 <= e.target.scrollTop){
        carousel.style.overflow = 'scroll'
        carousel.style.display = 'block'
      }else{
        carousel.style.overflow = 'hidden'
        
      }
  }

  return (
    <>
    <section id='home' className='home' onScroll={handleScroll} onLoad={handleLoad}>
      <Hero/>
      <PhotosContainer/>
      <Carousel/>
    </section>
    </>
  )
};

const mapSateToProps = (state) => {
  return {
    windowSize: state.windowSize,
    hero: state.hero
  }
}

const dispatchStateToPops = {
  windowResize,
  homeSize,
}

export default connect(mapSateToProps, dispatchStateToPops)(Home)
