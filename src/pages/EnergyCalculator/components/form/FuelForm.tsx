import React from 'react'
import { useFormContext, Controller, useFieldArray } from 'react-hook-form';
import { FormSchema } from '../../types/form';
import { fuels } from '../../utils/fuel';
import { FormWrapper } from './FormWrapper'
import { ImageSelect } from '../shared/ImageSelect';

const FuelForm = () => {
    const {
        formState: { errors },
        control
    } = useFormContext<FormSchema>();

    const { replace, } = useFieldArray({
        name: 'energyUsages',
        control,
    });

    return (
        <FormWrapper title='Current usage' description='We need to know your current energy usage to figure out how much of natural gas would fulfill your business needs'>
            <div className='px-3 py-0 px-lg-7 py-lg-3'>
                <h5 className='title-s mb-3 mb-md-4'>Select your current fuel</h5>
                <div className="mt-2">
                    <Controller
                        name="fuels"
                        defaultValue={[]}
                        rules={{
                            validate: {
                                maxLength: (value) =>
                                    value.length <= 2 || "Maximum 2 options are selected",
                                minLength: (value) =>
                                    Boolean(value.length) || "Minimum 1 option are selected"
                            }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <ImageSelect
                                multiple
                                data={fuels.map((fuel) => ({
                                    value: fuel.name,
                                    label: fuel.title,
                                    image: fuel.image
                                }))}
                                value={value}
                                onChange={(payload) => {
                                    replace(payload.map((name) => ({
                                        name,
                                        title: undefined,
                                        unit: undefined,
                                        usageValue: undefined,
                                    })))
                                    onChange(payload)
                                }}
                            />
                        )}
                    />
                    {errors.fuels?.message && <div className="invalid-feedback d-block">
                        {errors.fuels.message}
                    </div>}
                </div>
            </div>
        </FormWrapper>
    )
}

export default FuelForm