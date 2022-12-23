import React from 'react'
import { FormWrapper } from './FormWrapper'

const CompanyDetailsForm = () => {
    return (
        <FormWrapper title='Tell us about your company' description='Here are our efficiency calculation based on your current fuel usage and location'>
            <div className='px-3 py-3 px-lg-7 py-lg-3'>
                <h5 className='title-s'>Input your company details</h5>
            </div>
        </FormWrapper>
    )
}

export default CompanyDetailsForm