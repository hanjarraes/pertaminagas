import React from 'react'
import { itemsData } from './service';
import Button from 'component/Button';

const Prosess = () => {
  return (
    <div className='proses gradient-bg-to '>
      <div className='title-proses' data-aos="fade-up">
        Proses yang kita lalui bersama
      </div>
      <div className='desc-proses' data-aos="fade-up">
        Kami selalu mengutamakan keamanan dan hasil yang terbaik bagi Anda. Sehingga, proses pengaliran gas ke rumah Anda akan memerlukan waktu yang tidak sebentar
      </div>
      <div className="container">
        {itemsData.map((data, idx) => {
          return (
            <>
              <div className='row p-5' key={`data-proses-${data.title}-${idx}`}>
                <div className='col-12 col-md-6 content-desc-prosess' data-aos="fade-right">
                  <div className='number-content-proses'>{idx + 1}</div>
                  <div className='title-content-proses'>{data.title}</div>
                  <div className='desc-content-proses'>
                    {data.desc}
                  </div>
                </div>
                <div className='col-12 col-md-6' data-aos="fade-left">
                  <img src={data.img} alt="LogoGas kita" />
                </div>
              </div>
              {idx + 1 !== 4 ? <hr /> : ''}
            </>
          )
        })}
      </div>
      <Button type='link' href="https://online.pgn.co.id/register/residensial" className='btn-default px-md-5 btn-mobile' isExternal>
        <div className='title'>Daftar Sekarang</div>
      </Button>
    </div>
  )
}

export default Prosess;
