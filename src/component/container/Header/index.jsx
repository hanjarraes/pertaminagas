/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import LogoPertamina from '../../../assets/img/Logo_Pertamina_Gas_Negara.png'
import { Whatsapp } from 'iconsax-react';
import Button from '../../Button'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={LogoPertamina} alt="Logo Header Pertamina" />
        </a>
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
                  <Whatsapp  /> <div className='title'>Hubungi Kami</div>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;