import React from 'react'
import LogoGasKita from '../../../assets/img/Logo_Gaskita.png'
import LogoGasLine from '../../../assets/img/LogoGasLine.png'
import Button from '../../Button'
import { ArrowRight2 } from 'iconsax-react'

const Hero = ({ business }) => {
  return (
    <div className={`Hero ${business ? 'bg-img-hero-business' : 'bg-img-hero'}`}>
      <div className="container">
        <div className='card-hero' data-aos="fade-right">
          <div>
            <div className='d-flex justify-content-start'>
              <img src={business ? LogoGasLine : LogoGasKita} alt="LogoGas kita" />
            </div>
            <div className='title-card-hero'>
              {
                business ?
                  <> More <span>Efficient</span>, Less <span style={{ color: '#7DB139' }}>Emission</span> for Businesses </>
                  :
                  <> Rasakan Modernnya aliran <span>Gas</span> Tanpa Putus </>
              }
            </div>
            <div className='content-card-hero'>
              {
                business ?
                  "Our customers' testimonials include providing efficiency and lowering emissions. Here, we will provide a complete package to help you become better"
                  :
                  "GasKita mengalirkan gas metana berkualitas tinggi dengan jaringan pipa berstandar dunia, 24 jam tersedia untuk berbagai kebutuhanmu di rumah"
              }
            </div>
            <hr />
            {
              business ?
                <div className='d-flex pt-3'>
                  <Button type='link' href="#" className='btn-default ml-0' >
                    <div className='title'>Book a Meeting</div>
                  </Button>
                  <Button type='link' href="#" className='btn-light'>
                    <div className='title'>Calculate Savings <ArrowRight2 /></div>
                  </Button>
                </div>
                :
                <div className='d-flex pt-3'>
                  <Button type='link' href="#" className='btn-default ml-0' >
                    <div className='title'>Daftar Sekarang</div>
                  </Button>
                  <Button type='link' href="#" className='btn-light'>
                    <div className='title'>Gas Untuk Industri  <ArrowRight2 /></div>
                  </Button>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;