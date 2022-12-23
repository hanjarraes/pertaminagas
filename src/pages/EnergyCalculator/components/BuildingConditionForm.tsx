import React from 'react'
import { FormWrapper } from './FormWrapper'

const BuildingConditionForm = () => {
    return (
        <FormWrapper title='Installation location' description='Understanding your location will help us finding the most efficient gas delivery solutions to bring the gas to your business'>
            <div className='px-3 py-3 px-lg-7 py-lg-3'>
                <h5 className='title-s'>Building condition</h5>
                <p className='body-s'>Choose one of the conditions according to the conditions of the installation location</p>
            </div>
        </FormWrapper>
    )
}

export default BuildingConditionForm