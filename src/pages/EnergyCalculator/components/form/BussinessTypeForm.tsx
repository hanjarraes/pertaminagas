import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { businessTypes } from '../../constants';
import { FormSchema } from '../../types/form';
import { FormWrapper } from './FormWrapper'
import { ImageSelect } from '../shared/ImageSelect';

const BussinessTypeForm = () => {
    const {
        formState: { errors }
    } = useFormContext<FormSchema>();

    return (
        <FormWrapper title='Company profile' description='In order to provide you with the most accurate results, please select the type of business you operate from the options below:'>
            <div className='px-3 py-0 px-lg-7 py-lg-3'>
                <h5 className='title-s mb-3 mb-md-24'>Select your type of business</h5>
                <Controller
                    name="businessType"
                    defaultValue={[]}
                    rules={{
                        required: {
                            value: true,
                            message: "Field is required"
                        }
                    }}
                    render={({ field: { onChange, value } }) => (
                        <ImageSelect
                            variant={2}
                            data={businessTypes.map((fuel) => ({
                                value: fuel.title,
                                label: fuel.title,
                                image: fuel.image
                            }))}
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                {errors.businessType?.message && <div className="invalid-feedback d-block">
                    {errors.businessType.message}
                </div>}
            </div>
        </FormWrapper>
    )
}

export default BussinessTypeForm