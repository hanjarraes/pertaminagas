import React from 'react'
import Calculator from '../../../assets/img/Kalkulator.png'
import Button from '../../../component/Button'
import { ArrowRight2 } from 'iconsax-react'

const CalculatorContent = ({ id }) => {
  return (
    <div className='calculatorContent' id={id}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
            <img src={Calculator} alt="Calculator" />
          </div>
          <div className="col-12 col-md-6 calculatorContentItem px-5 py-3" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
            <div className='calculator-efficency'>EFFICIENCY CALCULATOR</div>
            <div className='calculator-title'>Calculate Your Company's Potential <span>Savings</span></div>
            <div className='calculator-desc'>Find out how much your company can save by switiching to PGN's natural gas with our energy calculator</div>
            <Button type='link' href="#" className='btn-default btn-mobile mt-3 mx-0' >
              <div className='title'>Calculate Savings <ArrowRight2 /></div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculatorContent;