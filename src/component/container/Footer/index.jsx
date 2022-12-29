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
  { href: '/', title: 'Residential' },
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
              <div className='col-6 col-md-6 d-flex flex-column'>
                <div className='title-footer'> SITEMAP</div>
                {business ?
                  navBusiness.map((data, idx) => {
                    return <Button type='link' href={data.href} className='content-footer' key={`footer-bisnis-${idx}`}>{data.title}</Button>
                  })
                  :
                  (
                    <>
                      {
                        navDefault.map((data, idx) => {
                          return <Button type='link' href={data.href} className='content-footer' key={`footer-default-${idx}`}>{data.title}</Button>
                        })
                      }
                      < Button type='link' href="#" className='content-footer'>Registrasi</Button>
                    </>

                  )

                }
              </div>
              {/* <div className='col-6 col-md-4 d-flex flex-column'>
                <div className='title-footer'> TERMS OF CONDITIONS</div>
                <Button type='link' href="#" className='content-footer'>Kebijakan Privasi</Button>
                <Button type='link' href="#" className='content-footer'>Syarat Ketentuan</Button>
              </div> */}
              <div className='col-6 col-md-6 mt-md-0 d-flex flex-column'>
                <div className='title-footer'>CONTACT</div>
                <a target="_blank" href="https://pgn.co.id/" className='content-footer' rel="noreferrer"><Global /> pgn.co.id</a>
                <a href="mailto:pcc135@pertamina.com" className='content-footer'><Sms /> pcc135@pertamina.com</a>
              </div>
            </div>
          </div>
          <img src={LogoCall} alt="LogoCall" className='d-none d-md-block' />
        </div>
        <hr />
        <div className='footer-icon-item'>
          <div className='footer-copyright'>© 2023 PT Perusahaan Gas Negara (Persero) .Tbk</div>
          <div className='d-flex'>
            <a href="https://www.instagram.com/gas_negara/?hl=en" target="_blank" className='icon-social-footer mr-2' rel="noreferrer"><Instagram /></a>
            <a href="https://twitter.com/gas_negara?lang=en" target="_blank" className='icon-social-footer mx-2' rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" fill="rgba(50,152,219,1)" /></svg>
            </a>
            <a href="https://www.youtube.com/channel/UC9KAsjWek27hCNttej5KWMw" target="_blank" className='icon-social-footer mx-2' rel="noreferrer"><Youtube variant="Bold" /></a>
            <a href="https://id-id.facebook.com/pgn.co.id/" target="_blank" className='icon-social-footer ml-2' rel="noreferrer"><Facebook variant="Bold" /></a>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer;