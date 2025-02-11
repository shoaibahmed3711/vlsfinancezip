import React from 'react'
import HeroSection from './hero/hero'
import About from './about/about'
import Services from './services/services'
const Home = () => {
  return (
    <div>
        <HeroSection />
        <About />
        <Services />
    </div>
  )
}

export default Home