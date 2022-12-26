/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Whatsapp, HambergerMenu } from 'iconsax-react';
import Modal from 'react-modal';
import LogoPertamina from '../../../assets/img/Logo_Pertamina_Gas_Negara.png'
import Button from '../../Button'


const customStyles = {
  content: {
    height: window.innerHeight,
    width: window.innerWidth,
    background: '#fff'
  },
};

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={LogoPertamina} alt="Logo Header Pertamina" />
        </a>
        <div className='d-flex d-md-none' onClick={() => setOpenModal(!openModal)}>
          <HambergerMenu />
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" />
          </ul>
          <div>
            <ul className="navbar-nav nav-header-custom mr-auto d-flex align-items-center">
              <li className="nav-item active">
                <a className="nav-link" href="#">Kelebihan Gas Bumi</a>
              </li>
              <li className="nav-item nav-header-custom">
                <a className="nav-link active" href="#">FAQ</a>
              </li>
              <li className="nav-item nav-header-custom">
                <a className="nav-link active" href="#">Gas Untuk Industri</a>
              </li>
              <li>
                <Button type='link' href="#" className='btn-whatsApp' >
                  <Whatsapp /> <div className='title'>Hubungi Kami</div>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal
        isOpen={openModal}
        style={customStyles}
        className='modalNavCustomHero'
        contentLabel="Example Modal"
      >
        <div>
          <div className='modalNavHeaderHero'>
            <img src={LogoPertamina} alt="Logo Header Pertamina" />
            <span onClick={() => setOpenModal(!openModal)}>X</span>
          </div>
          <div className='d-flex flex-column justify-content-between' style={{ height: window.innerHeight - 100 }}>
            <div className='items-modal'>
              <a href="#">Kelebihan Gas Bumi</a>
              <a href="#">FAQ</a>
              <a href="#">Gas Untuk Industri</a>
            </div>
            <div>
              <Button type='link' href="#" className='btn-whatsApp' >
                <Whatsapp /> <div className='title'>Hubungi Kami</div>
              </Button>
              <Button type='link' href="#" className='btn-default mt-3' >
                <div className='title'>Hubungi Kami</div>
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </nav>
  )
}

export default Header;