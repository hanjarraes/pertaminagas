import { InfoCircle } from 'iconsax-react'
import React from 'react'
import PotentialCard from '../shared/PotentialCard'

const PotentialBudgetSavings = () => {
    return (
        <div className='mb-5'>
            <div className='d-flex align-items-center justify-content-center'>
                <InfoCircle className='invisible' />
                <h5 className='title-s text-center mx-auto'>Your potential budget savings</h5>
                <InfoCircle />
            </div>
            <p className='body-s text-center mb-4'>Switching to PGN Natural Gas would save you:</p>
            <PotentialCard
                leftValue='54,4%'
                leftDescription='From current expenses'
                rightValue='Rp204.204.646'
                rightDescription='Yearly'
            />
        </div>
    )
}

export default PotentialBudgetSavings