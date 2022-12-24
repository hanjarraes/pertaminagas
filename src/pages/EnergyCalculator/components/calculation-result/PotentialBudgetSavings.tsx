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
        <div className='mb-5'>
            <div className='d-flex align-items-center justify-content-center'>
                <InfoCircle className='invisible' />
                <h5 className='title-s text-center mx-auto'>Your potential budget savings</h5>
                <InfoCircle />
            </div>
            <p className='body-s text-center mb-4'>Switching to PGN Natural Gas would save you:</p>
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