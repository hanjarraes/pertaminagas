import React from 'react'
import Hero from 'component/container/Hero';
import Header from '../../component/container/Header';
import Seccsion from 'component/container/Seccsion';
import People from 'component/container/People';
import ImageDesc from 'component/container/ImageDesc';
import Prosess from 'component/container/Prosess';

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Seccsion />
      <People />
      <ImageDesc />
      <Prosess />
    </div>
  )
}

export default Landing;