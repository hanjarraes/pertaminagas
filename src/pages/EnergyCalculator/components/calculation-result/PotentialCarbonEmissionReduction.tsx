import { ArrowDown2, ArrowUp2, InfoCircle } from 'iconsax-react'
import React, { useState } from 'react'
import Button from '../Button'
import PotentialCard from '../shared/PotentialCard'
import BarChart from '../shared/BarChart'

const PotentialCarbonEmissionReduction = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  return (
    <div className='mb-5'>
      {isVisible && <div>
        <div className="mb-5">
          <h5 className='title-s text-center mb-4'>Carbon footprint reduction (in metric tonnes)</h5>
          <BarChart
            labels={[
              ["Your current carbon footprint", "with 100 tank of 50kg LPG,", "Rp 500.000.000 Rupiah of 50kg LPG"],
              ["Your carbon footprint", "with PGN natural gas"]
            ]}
            dataSource={[4.57, 2.2]}
            dataLabelFormatter={(value) => {
              return `${value} t-CO2`;
            }}
            yAxisFormatter={(value) => {
              return value.toString()
            }}
          />
        </div>
        <div className='mb-5'>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='invisible' />
            <h5 className='title-s text-center mx-auto'>Your potential carbon emission reduction</h5>
            <InfoCircle />
          </div>
          <p className="body-s text-center mb-4">With PGN Natural Gas, your company is one step ahead in creating a more sustainable world</p>
          <PotentialCard
            leftValue='51,8%'
            leftDescription='From current emissions'
            rightValue='2.37 t-CO2'
            rightDescription='Carbon footprint'
          />
        </div>
      </div>}
      <div className="d-flex justify-content-center">
        <Button type='text' onClick={() => {
          setIsVisible((prev) => !prev)
        }}>
          {isVisible ?
            <>
              Hide potential carbon footprint reductions
              <ArrowUp2 />
            </> :
            <>
              Show potential carbon footprint reductions
              <ArrowDown2 />
            </>}
        </Button>
      </div>
    </div>
  )
}

export default PotentialCarbonEmissionReduction