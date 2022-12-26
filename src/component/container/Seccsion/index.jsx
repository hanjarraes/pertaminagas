import React from 'react'
import { itemSeccsion } from './serrvice';
import Button from 'component/Button';

const Seccsion = () => {
  return (
    <div>
      <div className='seccsion'>
        <div className='title-seccsion' data-aos="fade-up">
          Nikmatnya hidup bebas dari rasa khawatir
        </div>
        <div className='desc-seccsion' data-aos="fade-up">
          Mulai dari ketersediaan gas bumi yang aman hingga cara penggunaan yang mudah, GasKita siap jadikan hidupmu lebih praktis
        </div>

        <div className='content-card-seccsion'>
          {itemSeccsion.map((data, idx) => {
            return (
              <div className='card-seccsion mt-3 mt-md-4' key={`data-seccsion-${data.title}-${idx}`} data-aos="fade-up">
                <div className='d-flex flex-column align-items-center'>
                  {data.logo}
                  <div className='title-card-seccsion'>
                    {data.title}
                  </div>
                  <div className='desc-card-seccsion'>
                    {
                      data.gift ? data.gift.map(item => {
                        return (
                          <div className='d-flex align-items-center'>
                            <div className='circle' />{item}
                          </div>
                        )
                      }) : data.decs}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className='syarat-dan-ketentuan'>*Syarat dan ketentuan berlaku</div>
        <Button type='link' href="#" className='btn-default px-md-5 mt-3 btn-mobile' >
          <div className='title'>Daftar Sekarang</div>
        </Button>
      </div>
    </div>
  )
}

export default Seccsion;