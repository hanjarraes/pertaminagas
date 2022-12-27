import React from 'react'
import { FormWrapper } from './FormWrapper'
import Maps from '../shared/Maps';
import { FormSchema } from 'pages/EnergyCalculator/types/form';
import { Controller, useFormContext } from 'react-hook-form';


const AddressForm = () => {
    const {
        formState: { errors },
        control
    } = useFormContext<FormSchema>();

    return (
        <FormWrapper title='Installation location' description='Understanding your location will help us finding the most efficient gas delivery solutions to bring the gas to your business'>
            <div className='px-3 py-0 px-lg-7 py-lg-3 mb-3 mb-md-4'>
                <h5 className='title-s'>Input address</h5>
            </div>
            <Controller
                name="location"
                control={control}
                rules={{
                    validate: {
                        isLocationValid: (value) => {
                            return Boolean(value?.lat && value.lng && value.address && value.city) || "Address is required"
                        }
                    }
                }}
                render={({ field: { onChange, value } }) => (
                    <Maps
                        selectedLocations={value}
                        onSelectLocation={onChange}
                        mapContainerStyle={{
                            width: '100%',
                            height: '400px'
                        }}
                        description='Make sure the location on the map matches the location of the gas installation'
                    />
                )}
            />
            {errors.location?.message && <div className="invalid-feedback d-block">
                {errors.location.message}
            </div>}
        </FormWrapper>
    )
}

export default AddressForm