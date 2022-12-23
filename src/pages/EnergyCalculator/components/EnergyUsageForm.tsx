import React from 'react'
import { FormWrapper } from './FormWrapper'

const EnergyUsageForm = () => {
    return (
        <FormWrapper title='Current usage' description='We need to know your current energy usage to figure out how much of natural gas would fullfill your business needs'>
            <div className='px-3 py-3 px-lg-7 py-lg-3'>
                <h5 className='title-s'>How much do you use 50kg LPG monthly?</h5>
            </div>
        </FormWrapper>
    )
}

export default EnergyUsageForm