import Hero from 'component/container/Hero';
import React from 'react'
import Header from '../../component/container/Header';
import Seccsion from 'component/container/Seccsion';

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Seccsion />
    </div>
  )
}

export default Landing;