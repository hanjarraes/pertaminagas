import React from 'react'
import LogoPertamina from '../../../assets/img/Icon/Logo_Pertamina_Gas_Negara1.svg'
import LogoCall from '../../../assets/img/logoCallCenter.png'
import Instagram from '../../../assets/img/Icon/Instagram.svg'
import Twitter from '../../../assets/img/Icon/Twitter.svg'
import { Global, Sms, Youtube, Facebook } from 'iconsax-react'
import Button from 'component/Button'

const navDefault = [
  { href: '/#KelebihanGasBumi', title: 'Kelebihan Gas Bumi' },
  { href: '/#FAQ', title: 'FAQ' },
  { href: '/business', title: 'Gas Untuk Industri' },
]
const navBusiness = [
  { href: '/business#CalculateSavings', title: 'Calculate Savings' },
  { href: '/business#NaturalGasBenefits', title: 'Natural Gas Benefits' },
  { href: '/', title: 'Residential' },
]
const Footer = ({ business = false }) => {
  return (
    <footer>
      <div className='footer-content'>
        <div className='d-flex d-md-none justify-content-between align-items-center'>
          <img src={LogoPertamina} alt='LogoPertamina' className='img-widht' />
          <img src={LogoCall} alt='LogoCall' />
        </div>
        <div className='d-flex align-items-start mt-4 mt-md-0'>
          <img
            src={LogoPertamina}
            alt='LogoPertamina'
            className='d-none d-md-block img-widht'
          />
          <div className='container custom-container-footer mb-5'>
            <div className='row mx-0 mx-md-2 text-left'>
              <div className='col-6 col-md-3 d-flex flex-column'>
                <div className='title-footer'> SITEMAP</div>
                {business ? (
                  navBusiness.map((data, idx) => {
                    return (
                      <Button
                        type='link'
                        href={data.href}
                        className='content-footer'
                        key={`footer-bisnis-${idx}`}
                      >
                        {data.title}
                      </Button>
                    )
                  })
                ) : (
                  <>
                    {navDefault.map((data, idx) => {
                      return (
                        <Button
                          type='link'
                          href={data.href}
                          className='content-footer'
                          key={`footer-default-${idx}`}
                        >
                          {data.title}
                        </Button>
                      )
                    })}
                    <Button type='link' href='#' className='content-footer'>
                      Registrasi
                    </Button>
                  </>
                )}
              </div>
              <div className='col-6 col-md-4 mt-md-0 d-flex flex-column'>
                <div className='title-footer'>CONTACT</div>
                <a
                  target='_blank'
                  href='https://pgn.co.id/'
                  className='content-footer'
                  rel='noreferrer'
                >
                  <Global /> pgn.co.id
                </a>
                <a
                  href='mailto:pcc135@pertamina.com'
                  className='content-footer'
                >
                  <Sms /> pcc135@pertamina.com
                </a>
              </div>
              <div className='col-6 col-md-4 d-flex flex-column'>
                {/* <div className='title-footer'> TERMS OF CONDITIONS</div>
                <Button type='link' href="#" className='content-footer'>Kebijakan Privasi</Button>
                <Button type='link' href="#" className='content-footer'>Syarat Ketentuan</Button> */}
              </div>
            </div>
          </div>
          <img src={LogoCall} alt='LogoCall' className='d-none d-md-block' />
        </div>
        <hr />
        <div className='footer-icon-item'>
          <div className='footer-copyright'>
            © 2023 PT Perusahaan Gas Negara (Persero) Tbk.
          </div>
          <div className='d-flex'>
            <a
              href='https://www.instagram.com/gas_negara/?hl=en'
              target='_blank'
              className='icon-social-footer mr-2'
              rel='noreferrer'
            >
              <img src={Instagram} alt='Logo Instagram' />
            </a>
            <a
              href='https://twitter.com/gas_negara?lang=en'
              target='_blank'
              className='icon-social-footer mx-2'
              rel='noreferrer'
            >
              <img src={Twitter} alt='Logo Twitter' />
            </a>
            <a
              href='https://www.youtube.com/channel/UC9KAsjWek27hCNttej5KWMw'
              target='_blank'
              className='icon-social-footer mx-2'
              rel='noreferrer'
            >
              <Youtube variant='Bold' />
            </a>
            <a
              href='https://id-id.facebook.com/pgn.co.id/'
              target='_blank'
              className='icon-social-footer ml-2'
              rel='noreferrer'
            >
              <Facebook variant='Bold' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
