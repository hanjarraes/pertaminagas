import React from 'react'
import LogoGasKita from '../../../assets/img/Logo_Gaskita.png'
import Button from '../../Button'
import { ArrowRight2 } from 'iconsax-react'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className="container">
        <div className='card-hero' data-aos="fade-right">
          <div>
            <div className='d-flex justify-content-start'>
              <img src={LogoGasKita} alt="LogoGas kita" />
            </div>
            <div className='title-card-hero'>
              Rasakan Modernnya aliran <span>Gas</span> Tanpa Putus
            </div>
            <div className='content-card-hero'>
              GasKita mengalirkan gas metana berkualitas tinggi dengan jaringan pipa berstandar dunia, 24 jam tersedia untuk berbagai kebutuhanmu di rumah
            </div>
            <hr />
            <div className='d-flex pt-3'>
              <Button type='link' href="#" className='btn-default ml-0' >
                <div className='title'>Daftar Sekarang</div>
              </Button>
              <Button type='link' href="#" className='btn-light'>
                <div className='title'>Gas Untuk Industri  <ArrowRight2 /></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;