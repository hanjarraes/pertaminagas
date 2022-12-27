import React from 'react'
import { iconClient } from './service'

const LogoClient = () => {
  return (
    <div className='logoClient'>
      <div className="container">
        <div className='logo-text-client'>Our Satisfied Clients</div>
        <div className="content-icon-client">
          {iconClient.map((data, idx) => {
            return (
              <img
                className="mx-3 my-3"
                key={`name-logo-${data.name}-${idx}`}
                src={data.link}
                alt={data.name}
                width={data.width}
                data-aos="fade-up"
              />
            )
          })}
        </div>
        <div className='logo-text-client'>and 2.000 other companies</div>
      </div>
    </div>
  )
}

export default LogoClient;