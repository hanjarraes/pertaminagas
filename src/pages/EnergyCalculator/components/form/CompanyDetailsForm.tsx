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
        <FormWrapper title='Tell us about your company' description='By telling us your contact and company information, you will be able to receive the efficiency calculation result directly. You might also get some interesting offers from us.'>
            <div className='px-3 py-0 px-lg-7 py-lg-3'>
                <h5 className='title-s mb-3 mb-md-24'>Input your company details</h5>
                <div className="mb-3 mb-md-24">
                    <label htmlFor="company-name" className="has-float-label">
                        <input
                            id='company-name'
                            type="text"
                            className={["form-control form-control-lg", errors.companyName?.message && invalidErrorClass].join(' ')}
                            placeholder="Company Name"
                            {...register("companyName", {
                                required: {
                                    value: true,
                                    message: "Field is required"
                                }
                            })}
                        />
                        <span className={errors.companyName?.message && invalidErrorClass}>Company Name</span>
                    </label>
                    {errors.companyName?.message && <div className="invalid-feedback d-block ml-3">
                        {errors.companyName.message}
                    </div>}
                </div>
                <div className="mb-3 mb-md-24">
                    <label htmlFor="name" className="has-float-label">
                        <input
                            id='name'
                            type="text"
                            className={["form-control form-control-lg", errors.name?.message && invalidErrorClass].join(' ')}
                            placeholder="Name"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Field is required"
                                }
                            })}
                        />
                        <span className={errors.name?.message && invalidErrorClass}>Name</span>
                    </label>
                    {errors.name?.message && <div className="invalid-feedback d-block ml-3">
                        {errors.name.message}
                    </div>}
                </div>
                <div className="form-row">
                    <div className="col-lg-6 mb-3 mb-md-24">
                        <label htmlFor="phone" className="has-float-label">
                            <input
                                id='phone'
                                type="number"
                                className={["form-control form-control-lg", errors.phone?.message && invalidErrorClass].join(' ')}
                                placeholder="Phone"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Field is required"
                                    }
                                })}
                            />
                            <span className={errors.phone?.message && invalidErrorClass}>Phone</span>
                        </label>
                        {errors.phone?.message && <div className="invalid-feedback d-block ml-3">
                            {errors.phone.message}
                        </div>}
                    </div>
                    <div className="col-lg-6 mb-3 mb-md-24">
                        <label htmlFor="email" className="has-float-label">
                            <input
                                id='email'
                                type="email"
                                className={["form-control form-control-lg", errors.email?.message && invalidErrorClass].join(' ')}
                                placeholder="Email"
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
                            <span className={errors.email?.message && invalidErrorClass}>Email</span>
                        </label>
                        {errors.email?.message && <div className="invalid-feedback d-block ml-3">
                            {errors.email.message}
                        </div>}
                        {/* <label htmlFor="email">Email</label>
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
                        </div>} */}
                    </div>
                </div>
            </div>
        </FormWrapper>
    )
}

export default CompanyDetailsForm