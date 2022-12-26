import React from 'react'
import Rectangle from '../../../assets/img/Rectangle.png'
import Subtract from '../../../assets/img/Subtract.png'
import Button from '../../Button'
import { ArrowRight2 } from 'iconsax-react'

const More = () => {
  return (
    <div className='more-efficient'>
      <div className='row mx-0'>
        <div className='col-12 col-md-6 img-more' />
        <div className='col-12 col-md-6 desc-more-content'>
          <img src={Rectangle} className='img-rectangle' alt="Rectangle" />
          <img src={Subtract} className='img-subtract' alt="Subtract" />
          <div className='content-more'>
            <div className='more-title'>More Efficient, Less Emission for Businesses</div>
            <div className='more-desc'>Our high-quality natural gas propels efficiency in more than 2,000 businesses across the nation. Since then, our customers have produced fewer emissions than before</div>
          </div>
          <Button type='link' href="#" className='btn-light btn-mobile' >
            <div className='title'>Calculate your efficiency  <ArrowRight2 /></div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default More;