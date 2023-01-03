import React from 'react'
import { useLocation } from 'react-router-dom'
import { InfoCircle } from 'iconsax-react'
import { ResultRouteState } from 'pages/EnergyCalculator/types/form'
import { getNumberFormat } from 'pages/EnergyCalculator/utils/currency'
import PotentialCard from '../shared/PotentialCard'

const PotentialBudgetSavings = () => {
    const { state } = useLocation()
    const { calculatorResult }: ResultRouteState = state ?? {}

    const formattedTotalSavingPerYear = getNumberFormat({
        value: calculatorResult.totalSavingPerYear,
        style: 'currency'
    })

    const formattedTotalSavingPercentage = getNumberFormat({
        value: calculatorResult.totalSavingPercentage,
        style: 'percent',
        decimalScale: 1
    })

    return (
        <div className='mb-4 mb-md-5'>
            <div className='d-flex align-items-center justify-content-center'>
                <InfoCircle className='invisible' />
                <h5 className='title-s text-center mx-auto'>Your potential budget savings</h5>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.5 16V12" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.5 8H12.51" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </div>
            <p className='body-s text-center mb-3 mb-md-4'>Switching to PGN Natural Gas would save you:</p>
            <PotentialCard
                leftValue={formattedTotalSavingPercentage}
                leftDescription='From current expenses'
                rightValue={formattedTotalSavingPerYear}
                rightDescription='Yearly'
            />
        </div>
    )
}

export default PotentialBudgetSavings