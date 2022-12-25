import React from 'react'
import Hero from 'component/container/Hero';
import Header from '../../component/container/Header';
import Seccsion from 'component/container/Seccsion';
import People from 'component/container/People';
import ImageDesc from 'component/container/ImageDesc';
import Prosess from 'component/container/Prosess';
import Questions from 'component/container/Questions';
import More from 'component/container/More';
import LogoPertamina from '../../assets/img/Logo_Pertamina_Gas_Negara2.png'
import LogoCall from '../../assets/img/logoCallCenter.png'
import { Global, Sms, Instagram, Youtube, Facebook } from 'iconsax-react';
import Button from 'component/Button';


const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Seccsion />
      <People />
      <ImageDesc />
      <Prosess />
      <Questions />
      <More />
      <footer>
        <div className='footer-content'>
          <div className='d-flex align-items-start'>
            <img src={LogoPertamina} alt="LogoPertamina" />
            <div className="container">
              <div className='row mx-2 text-left'>
                <div className='col-6 col-md-4 d-flex flex-column'>
                  <div className='title-footer'> SITEMAP</div>
                  <Button type='link' href="#" className='content-footer'>Kelebihan Gas Bumi</Button>
                  <Button type='link' href="#" className='content-footer'>FAQ</Button>
                  <Button type='link' href="#" className='content-footer'>Gas Untuk Industri</Button>
                  <Button type='link' href="#" className='content-footer'>Registrasi</Button>
                </div>
                <div className='col-6 col-md-4 d-flex flex-column'>
                  <div className='title-footer'> TERMS OF CONDITIONS</div>
                  <Button type='link' href="#" className='content-footer'>Kebijakan Privasi</Button>
                  <Button type='link' href="#" className='content-footer'>Syarat Ketentuan</Button>
                </div>
                <div className='col-6 col-md-4 d-flex flex-column'>
                  <div className='title-footer'>CONTACT</div>
                  <Button type='link' href="#" className='content-footer'><Global /> pgn.co.id</Button>
                  <Button type='link' href="#" className='content-footer'><Sms /> pcc135@pertamina.com</Button>
                </div>
              </div>
            </div>
            <img src={LogoCall} alt="LogoCall" />
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <div className='footer-copyright'>© 2022 PT Perusahaan Gas Negara (Persero) .Tbk</div>
            <div className='d-flex'>
              <Button type='link' href="#" className='icon-social-footer mr-2'><Instagram /></Button>
              <Button type='link' href="#" className='icon-social-footer mx-2'><Instagram variant="Bold" /></Button>
              <Button type='link' href="#" className='icon-social-footer mx-2'><Youtube variant="Bold" /></Button>
              <Button type='link' href="#" className='icon-social-footer ml-2'><Facebook variant="Bold" /></Button>
            </div>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default Landing;