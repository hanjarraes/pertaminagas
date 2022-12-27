import React from 'react'
import LogoPertamina from '../../../assets/img/Logo_Pertamina_Gas_Negara2.png'
import LogoCall from '../../../assets/img/logoCallCenter.png'
import { Global, Sms, Instagram, Youtube, Facebook } from 'iconsax-react';
import Button from 'component/Button';


const navDefault = [
  { href: '#KelebihanGasBumi', title: 'Kelebihan Gas Bumi' },
  { href: '#FAQ', title: 'FAQ' },
  { href: '/business', title: 'Gas Untuk Industri' }
]
const navBusiness = [
  { href: '#CalculateSavings', title: 'Calculate Savings' },
  { href: '#NaturalGasBenefits', title: 'Natural Gas Benefits' },
  { href: '#Residential', title: 'Residential' },
]
const Footer = ({ business = false }) => {
  return (
    <footer>
      <div className='footer-content'>
        <div className='d-flex d-md-none justify-content-between align-items-center'>
          <img src={LogoPertamina} alt="LogoPertamina" />
          <img src={LogoCall} alt="LogoCall" />
        </div>
        <div className='d-flex align-items-start mt-4 mt-md-0'>
          <img src={LogoPertamina} alt="LogoPertamina" className='d-none d-md-block' />
          <div className="container mb-5">
            <div className='row mx-0 mx-md-2 text-left'>
              <div className='col-6 col-md-4 d-flex flex-column'>
                <div className='title-footer'> SITEMAP</div>
                {business ?
                  navBusiness.map((data, idx) => {
                    return <Button type='link' href={data.href} className='content-footer' key={`footer-bisnis-${idx}`}>{data.title}</Button>
                  })
                  :
                  navDefault.map((data, idx) => {
                    return <Button type='link' href={data.href} className='content-footer' key={`footer-default-${idx}`}>{data.title}</Button>
                  })
                }
                <Button type='link' href="#" className='content-footer'>Registrasi</Button>
              </div>
              <div className='col-6 col-md-4 d-flex flex-column'>
                <div className='title-footer'> TERMS OF CONDITIONS</div>
                <Button type='link' href="#" className='content-footer'>Kebijakan Privasi</Button>
                <Button type='link' href="#" className='content-footer'>Syarat Ketentuan</Button>
              </div>
              <div className='col-12 col-md-4 mt-4 mt-md-0 d-flex flex-column'>
                <div className='title-footer'>CONTACT</div>
                <Button type='link' href="#" className='content-footer'><Global /> pgn.co.id</Button>
                <Button type='link' href="#" className='content-footer'><Sms /> pcc135@pertamina.com</Button>
              </div>
            </div>
          </div>
          <img src={LogoCall} alt="LogoCall" className='d-none d-md-block' />
        </div>
        <hr />
        <div className='footer-icon-item'>
          <div className='footer-copyright'>© 2023 PT Perusahaan Gas Negara (Persero) .Tbk</div>
          <div className='d-flex'>
            <Button type='link' href="#" className='icon-social-footer mr-2'><Instagram /></Button>
            <Button type='link' href="#" className='icon-social-footer mx-2'><Instagram variant="Bold" /></Button>
            <Button type='link' href="#" className='icon-social-footer mx-2'><Youtube variant="Bold" /></Button>
            <Button type='link' href="#" className='icon-social-footer ml-2'><Facebook variant="Bold" /></Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;