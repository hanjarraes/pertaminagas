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
          {itemSeccsion.map(data => {
            return (
              <div className='card-seccsion mt-4' data-aos="fade-up">
                <div>
                  {data.logo}
                  <div className='title-card-seccsion'>
                    {data.title}
                  </div>
                  <div className='desc-card-seccsion'>
                    {data.decs}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className='syarat-dan-ketentuan'>*Syarat dan ketentuan berlaku</div>
        <Button type='link' href="#" className='btn-default mt-3' >
          <div className='title'>Daftar Sekarang</div>
        </Button>
      </div>
    </div>
  )
}

export default Seccsion;