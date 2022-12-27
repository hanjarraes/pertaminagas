import React from 'react'
import { itemsNaturalGas } from './service';


const NaturalGas = () => {
  return (
    <div className='natural-gas'>
      <div className='container d-flex flex-column align-items-center'>
        <div className='title-natural-gas' data-aos="fade-up">
          Natural Gas Distribution
        </div>
        <div className='desc-natural-gas' data-aos="fade-up">
          Gas Negara operate 92% of domestic natural gas infrastructure and more than a decade providing gas through CNG & LNG
        </div>
        <div className='row'>
          {itemsNaturalGas.map((data, idx) => {
            return (
              <div className='col-12 col-md-4 px-3' key={`items-natural-gas-${idx}`} >
                <div className='card-natural-gas' data-aos="fade-up">
                  <img src={data.img} alt="LogoGas kita" />
                  <div className='card-content-np'>
                    <div className='card-title-np'>{data.title}</div>
                    <div className='card-desc-np'>{data.desc}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NaturalGas;