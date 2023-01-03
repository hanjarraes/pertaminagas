import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { buildingConditions } from '../../constants';
import { FormSchema } from '../../types/form';
import { FormWrapper } from './FormWrapper'
import { ImageSelect } from '../shared/ImageSelect';

const BuildingConditionForm = () => {
    const {
        formState: { errors }
    } = useFormContext<FormSchema>();

    return (
        <FormWrapper title='Installation location' description='Understanding your location will help us finding the most efficient gas delivery solutions to bring the gas to your business'>
            <div className='px-3 py-0 px-lg-7 py-lg-3'>
                <h5 className='title-s'>Building condition</h5>
                <p className='body-s mb-3 mb-md-24'>Choose one of the conditions according to the conditions of the installation location</p>
                <Controller
                    name="buildingCondition"
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
                            data={buildingConditions.map((condition) => ({
                                value: condition.title,
                                label: condition.title,
                                image: condition.image
                            }))}
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                {errors.buildingCondition?.message && <div className="invalid-feedback d-block">
                    {errors.buildingCondition.message}
                </div>}
            </div>
        </FormWrapper>
    )
}

export default BuildingConditionForm