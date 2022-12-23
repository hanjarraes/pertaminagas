import React from 'react'
import { useFormContext, Controller } from 'react-hook-form';
import { FormSchema } from '../types/form';
import { fuels } from '../utils/fuel';
import { FormWrapper } from './FormWrapper'
import { ImageSelect } from './ImageSelect';

const FuelForm = () => {
    const {
        formState: { errors }
    } = useFormContext<FormSchema>();

    return (
        <FormWrapper title='Current usage' description='We need to know your current energy usage to figure out how much of natural gas would fulfill your business needs'>
            <div className='px-3 py-3 px-lg-7 py-lg-3'>
                <h5 className='title-s mb-4'>Select your current fuel</h5>
                <Controller
                    name="fuels"
                    defaultValue={[]}
                    rules={{
                        validate: {
                            maxLength: (value) =>
                                value.length <= 3 || "Maximum 3 options are selected",
                            minLength: (value) =>
                                Boolean(value.length) || "Minimum 1 option are selected"
                        }
                    }}
                    render={({ field: { onChange, value } }) => (
                        <ImageSelect
                            data={fuels.map((fuel) => ({
                                value: fuel.name,
                                label: fuel.title,
                                image: fuel.image
                            }))}
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                {errors.fuels?.message && <p className='text-danger mt-2'>{errors.fuels.message}</p>}
            </div>
        </FormWrapper>
    )
}

export default FuelForm