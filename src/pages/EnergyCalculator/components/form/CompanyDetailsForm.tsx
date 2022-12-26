import React from 'react'
import { useFormContext } from 'react-hook-form';
import { FormSchema } from '../../types/form';
import { FormWrapper } from './FormWrapper'

const CompanyDetailsForm = () => {
    const {
        register,
        formState: { errors }
    } = useFormContext<FormSchema>();
    const invalidErrorClass = 'is-invalid';

    return (
        <FormWrapper title='Tell us about your company' description='Here are our efficiency calculation based on your current fuel usage and location'>
            <div className='px-3 py-0 px-lg-7 py-lg-3'>
                <h5 className='title-s mb-3 md:mb-4'>Input your company details</h5>
                <div className="mt-2 mb-3">
                    <label htmlFor="company-name">Company Name</label>
                    <input
                        type="text"
                        className={["form-control form-control-lg", errors.companyName?.message && invalidErrorClass].join(' ')}
                        id="company-name"
                        {...register("companyName", {
                            required: {
                                value: true,
                                message: "Field is required"
                            }
                        })}
                    />
                    {errors.companyName?.message && <div className="invalid-feedback d-block">
                        {errors.companyName.message}
                    </div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className={["form-control form-control-lg", errors.name?.message && invalidErrorClass].join(' ')}
                        id="name"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Field is required"
                            }
                        })}
                    />
                    {errors.name?.message && <div className="invalid-feedback d-block">
                        {errors.name.message}
                    </div>}
                </div>
                <div className="form-row">
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="number"
                            className={["form-control form-control-lg", errors.phone?.message && invalidErrorClass].join(' ')}
                            id="phone"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Field is required"
                                }
                            })}
                        />
                        {errors.phone?.message && <div className="invalid-feedback d-block">
                            {errors.phone.message}
                        </div>}
                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className={["form-control form-control-lg", errors.email?.message && invalidErrorClass].join(' ')}
                            id="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Field is required"
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email format"
                                }
                            })}
                        />
                        {errors.email?.message && <div className="invalid-feedback d-block">
                            {errors.email.message}
                        </div>}
                    </div>
                </div>
            </div>
        </FormWrapper>
    )
}

export default CompanyDetailsForm