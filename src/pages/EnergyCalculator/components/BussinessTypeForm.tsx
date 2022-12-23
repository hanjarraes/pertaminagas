import React from 'react'
import { FormWrapper } from './FormWrapper'

const BussinessTypeForm = () => {
    return (
        <FormWrapper title='Company profile' description='By telling us your contact, you will be able to receive the efficiency calculation result directly. You might also get some interesting offers from us.'>
            <div className='px-3 py-3 px-lg-7 py-lg-3'>
                <h5 className='title-s'>Select your type of business</h5>
            </div>
        </FormWrapper>
    )
}

export default BussinessTypeForm