import React from 'react'
import { FormWrapper } from './FormWrapper'

const AddressForm = () => {
    return (
        <FormWrapper title='Installation location' description='Understanding your location will help us finding the most efficient gas delivery solutions to bring the gas to your business'>
            <div className='px-3 py-3 px-lg-7 py-lg-3'>
                <h5 className='title-s'>Input address</h5>
            </div>
        </FormWrapper>
    )
}

export default AddressForm