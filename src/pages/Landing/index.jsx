import React from 'react'
import Hero from 'component/container/Hero';
import Header from '../../component/container/Header';
import Seccsion from 'component/container/Seccsion';
import People from 'component/container/People';
import ImageDesc from 'component/container/ImageDesc';
import Prosess from 'component/container/Prosess';
import Questions from 'component/container/Questions';
import More from 'component/container/More';
import Footer from 'component/container/Footer';
import { dataSeccsion } from './service';


const Landing = () => {

  return (
    <div>
      <Header />
      <Hero />
      <Seccsion dataSeccsion={dataSeccsion} id={'KelebihanGasBumi'} />
      <People />
      <ImageDesc />
      <Prosess />
      <Questions />
      <More />
      <Footer />
    </div >
  )
}

export default Landing;