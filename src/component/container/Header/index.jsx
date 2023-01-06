/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Whatsapp, HambergerMenu } from 'iconsax-react'
import Modal from 'react-modal'
import LogoPertamina from '../../../assets/img/Icon/Logo_Pertamina_Gas_Negara1.svg'
import { BOOK_MEETING_URL } from 'constants/meeting'
import Button from '../../Button'

const customStyles = {
  overlay: {
    zIndex: 999,
  },
  content: {
    height: window.innerHeight,
    width: window.innerWidth,
    background: '#fff',
  },
}

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

const Header = ({ business }) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <a className='navbar-brand d-flex' href='/'>
            <object data={LogoPertamina}> </object>
          </a>
          <div
            className='d-flex d-md-none'
            onClick={() => setOpenModal(!openModal)}
          >
            <HambergerMenu />
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item' />
            </ul>
            <div>
              {business ? (
                <ul className='navbar-nav nav-header-custom mr-auto d-flex align-items-center'>
                  {navBusiness.map((data, idx) => {
                    return (
                      <li
                        className='nav-item active mx-2'
                        key={`nav-default-${idx}`}
                      >
                        <a className='nav-link' href={data.href}>
                          {data.title}
                        </a>
                      </li>
                    )
                  })}
                  <li>
                    <Button
                      type='link'
                      href='/business#'
                      className='btn-light px-4'
                    >
                      <div className='title'>Login Sobat PGN</div>
                    </Button>
                  </li>
                </ul>
              ) : (
                <ul className='navbar-nav nav-header-custom mr-auto d-flex align-items-center'>
                  {navDefault.map((data, idx) => {
                    return (
                      <li
                        className='nav-item active mx-2'
                        key={`nav-default-${idx}`}
                      >
                        <a className='nav-link' href={data.href}>
                          {data.title}
                        </a>
                      </li>
                    )
                  })}
                  <li>
                    <a
                      href='https://api.whatsapp.com/send/?phone=6281511500645&text&type=phone_number&app_absent=0'
                      className='btn-whatsApp'
                    >
                      <Whatsapp /> <div className='title'>Hubungi Kami</div>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <Modal
          isOpen={openModal}
          style={customStyles}
          className='modalNavCustomHero'
          contentLabel='Example Modal'
        >
          <div>
            <div className='modalNavHeaderHero'>
              <img src={LogoPertamina} alt='Logo Header Pertamina' />
              <span onClick={() => setOpenModal(!openModal)}>X</span>
            </div>
            <div
              className='d-flex flex-column justify-content-between'
              style={{ height: window.innerHeight - 100 }}
            >
              <div className='items-modal'>
                {business
                  ? navBusiness.map((data, idx) => {
                    return (
                      <a
                        href={data.href}
                        onClick={() => setOpenModal(!openModal)}
                        key={`nav-default-${idx}-mobile`}
                      >
                        {data.title}
                      </a>
                    )
                  })
                  : navDefault.map((data, idx) => {
                    return (
                      <a
                        href={data.href}
                        onClick={() => setOpenModal(!openModal)}
                        key={`nav-default-${idx}-mobile`}
                      >
                        {data.title}
                      </a>
                    )
                  })}
              </div>
              {business ? (
                <div>
                  <a target='_blank' href='#' className='btn-light btn-mobile'>
                    <div className='title'>Login Sobat PGN</div>
                  </a>
                  <a
                    target='_blank'
                    href={BOOK_MEETING_URL}
                    className='btn-default mt-3'
                    rel='noreferrer'
                  >
                    <div className='title'>Book an Online Meeting</div>
                  </a>
                </div>
              ) : (
                <div>
                  <a
                    target='_blank'
                    href='https://api.whatsapp.com/send/?phone=6281511500645&text&type=phone_number&app_absent=0'
                    className='btn-whatsApp'
                    rel='noreferrer'
                  >
                    <Whatsapp /> <div className='title'>Hubungi Kami</div>
                  </a>
                  <a target='_blank' href='#' className='btn-default mt-3'>
                    <div className='title'>Daftar Sekarang</div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </Modal>
      </nav>
      <div className='line-header'>
        <div className='row'>
          <div className='col-8'>
            <hr />
          </div>
          <div className='col-4'>
            <hr />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
