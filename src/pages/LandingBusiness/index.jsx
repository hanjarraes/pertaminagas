import React from 'react'
import Hero from 'component/container/Hero';
import Header from '../../component/container/Header';
import Seccsion from 'component/container/Seccsion';
import LogoClient from 'component/container/LogoClient';
import Footer from 'component/container/Footer';
import CalculatorContent from 'component/container/CalculatorContent';
import NaturalGas from 'component/container/NaturalGas';
import Provide from 'component/container/Provide';
import { dataSeccsion } from './service';



const LandingBusiness = () => {
  return (
    <div>
      <Header business />
      <Hero business />
      <LogoClient />
      <CalculatorContent id="CalculateSavings" />
      <Seccsion dataSeccsion={dataSeccsion} business />
      <NaturalGas />
      <Provide />
      <Footer business />
    </div >
  )
}

export default LandingBusiness;