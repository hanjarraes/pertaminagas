import React from 'react'
import EnergyCostPerYear from './EnergyCostPerYear'
import Meeting from './Meeting'
import PotentialBudgetSavings from './PotentialBudgetSavings'
import PotentialCarbonEmissionReduction from './PotentialCarbonEmissionReduction'

const ResultSection = () => {
    return (
        <div className='container result-section'>
            <div className='mb-3 md:mb-4'>
                <h1 className='title-l text-white'>Your efficiency result</h1>
                <p className='body-m text-white'>
                    Check out our analysis for you and learn how you <br /> can achieve higher efficiency with us
                </p>
            </div>
            <div className="result-card px-3 py-4 p-lg-5">
                <EnergyCostPerYear />
                <PotentialBudgetSavings />
                <PotentialCarbonEmissionReduction />
                <Meeting />
            </div>
        </div>
    )
}

export default ResultSection