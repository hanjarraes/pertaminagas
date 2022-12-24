import React from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { NumericFormat } from "react-number-format";

import { FormSchema } from '../types/form';
import { fuels } from '../utils/fuel';
import { FormWrapper } from './FormWrapper'

const EnergyUsageForm = () => {
    const {
        register,
        watch,
        formState: { errors },
        control
    } = useFormContext<FormSchema>();
    const { fields } = useFieldArray({
        name: 'energyUsages',
        control
    });

    return (
        <FormWrapper title='Current usage' description='We need to know your current energy usage to figure out how much of natural gas would fullfill your business needs'>
            <div className='px-3 py-3 px-lg-7 py-lg-3'>
                {fields.length &&
                    fields.map((fuel, i) => {
                        const findFuel = fuels.find((item) => item.title === fuel.name);
                        if (!findFuel) {
                            return <></>
                        }

                        const isInvalidClass = errors.energyUsages?.[i]?.usageValue ? "is-invalid" : ""
                        const watchUnit = watch(`energyUsages.${i}.unit`);

                        return (
                            <div key={i} className="mb-5">
                                <h5 className='title-s mb-3'>{`How much do you use ${findFuel?.title} monthly?`}</h5>
                                <div className='w-100 w-lg-75'>
                                    <input
                                        type="hidden"
                                        {...register(`energyUsages.${i}.name`)}
                                        defaultValue={fuel.name}
                                    />
                                    <div className="input-group input-group-lg row no-gutters">
                                        <Controller
                                            name={`energyUsages.${i}.usageValue`}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "Field is required"
                                                }
                                            }}
                                            render={({ field: { onChange, name, value } }) => (
                                                <NumericFormat
                                                    className={`form-control ${isInvalidClass}`}
                                                    thousandSeparator={true}
                                                    prefix={watchUnit === "Rupiah" ? "Rp " : undefined}
                                                    decimalScale={0}
                                                    placeholder="Input your monthly usage here"
                                                    name={name}
                                                    value={value}
                                                    onValueChange={(v) => {
                                                        onChange(v.floatValue)
                                                    }}
                                                />
                                            )}
                                        />
                                        <select
                                            className="custom-select col-3 col-lg-2"
                                            id="inputGroupSelect01"
                                            {...register(`energyUsages.${i}.unit`, {
                                                required: {
                                                    value: true,
                                                    message: "Field is required"
                                                }
                                            })}
                                        >
                                            {findFuel?.units.map((unit) => (
                                                <option key={unit} value={unit}>
                                                    {unit}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.energyUsages?.[i]?.usageValue?.message && (
                                        <div className="invalid-feedback d-block">
                                            {errors.energyUsages?.[i]?.usageValue?.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </FormWrapper>
    )
}

export default EnergyUsageForm