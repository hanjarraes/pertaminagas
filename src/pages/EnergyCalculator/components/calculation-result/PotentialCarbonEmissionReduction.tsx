import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowDown2, ArrowUp2, InfoCircle } from 'iconsax-react'
import Button from '../shared/Button'
import PotentialCard from '../shared/PotentialCard'
import BarChart from '../shared/BarChart'
import { ResultRouteState } from 'pages/EnergyCalculator/types/form'
import { getNumberFormat } from 'pages/EnergyCalculator/utils/currency'
import { getEnergyUsageLabels } from 'pages/EnergyCalculator/utils/fuel'

const PotentialCarbonEmissionReduction = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const { state } = useLocation()
  const { formData, calculatorResult }: ResultRouteState = state ?? {}

  const energyUsageLabels = getEnergyUsageLabels(formData.energyUsages)

  const formattedCO2EmissionReductionPerYear = getNumberFormat({
    value: calculatorResult.co2EmissionReductionPerYear,
    decimalScale: 2
  })

  const formattedCO2EmissionReductionPercentage = getNumberFormat({
    value: calculatorResult.co2EmissionReductionPercentage,
    style: 'percent',
    decimalScale: 1
  })

  return (
    <div className='mb-4 mb-md-5'>
      {isVisible && <div>
        <div className="mb-4 mb-md-5">
          <h5 className='title-s text-center mb-3 mb-md-4'>Carbon footprint reduction (in metric tonnes)</h5>
          <BarChart
            labels={[
              ["Your current carbon footprint", ...energyUsageLabels],
              ["Your carbon footprint", "with PGN natural gas"]
            ]}
            dataSource={[
              calculatorResult.fuelEmissionPerYear,
              calculatorResult.naturalGasEmissionPerYear
            ]}
            dataLabelFormatter={(value) => {
              const formattedValue = getNumberFormat({
                value,
                decimalScale: 2
              })
              return `${formattedValue} t-CO₂`;
            }}
            yAxisFormatter={(value) => {
              return value.toString()
            }}
          />
        </div>
        <div className='mb-4 mb-md-5'>
          <div className='d-flex align-items-center justify-content-center'>
            <InfoCircle className='invisible' />
            <h5 className='title-s text-center mx-auto'>Your potential carbon emission reduction</h5>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.5 16V12" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.5 8H12.51" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </div>
          <p className="body-s text-center mb-3 mb-md-4">With PGN Natural Gas, your company is one step ahead in creating a more sustainable world</p>
          <PotentialCard
            leftValue={formattedCO2EmissionReductionPercentage}
            leftDescription='From current emissions'
            rightValue={`${formattedCO2EmissionReductionPerYear} t-CO₂`}
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