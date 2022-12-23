import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import AddressForm from './components/AddressForm';
import BuildingConditionForm from './components/BuildingConditionForm';
import BussinessTypeForm from './components/BussinessTypeForm';
import Button from './components/Button';
import CompanyDetailsForm from './components/CompanyDetailsForm';
import EnergyUsageForm from './components/EnergyUsageForm';
import FuelForm from './components/FuelForm';
import './styles.scss';
import { FormSchema, FormStep } from './types/form';
import { useMultistepForm } from './utils/useMultistepForm';


const INITIAL_DATA: FormSchema = {
    fuels: [],
    energyUsages: [],
    phone: undefined,
    email: undefined
}

const FORM_STEPS: FormStep[] = [
    {
        renderer: <FuelForm />,
        image: require('assets/img/steps/1.png')
    },
    {
        renderer: <EnergyUsageForm />,
        image: require('assets/img/steps/2.png')
    },
    {
        renderer: <AddressForm />,
        image: require('assets/img/steps/3.png')
    },
    {
        renderer: <BuildingConditionForm />,
        image: require('assets/img/steps/4.png')
    },
    {
        renderer: <CompanyDetailsForm />,
        image: require('assets/img/steps/5.png')
    },
    {
        renderer: <BussinessTypeForm />,
        image: require('assets/img/steps/6.png')
    },
]

const EnergyCalculator = () => {
    const {
        percentage,
        currentStep,
        isFirstStep,
        isLastStep,
        back,
        next
    } = useMultistepForm(FORM_STEPS);

    const formMethods = useForm<FormSchema>({
        mode: "onChange",
        defaultValues: INITIAL_DATA
    });

    const navigate = useNavigate()

    const onBack = () => {
        if (isFirstStep) {
            return navigate("/")
        }

        return back()
    }

    const onNext = () => {
        if (isLastStep) {
            return onSubmit()
        }

        return next()
    }

    function onSubmit() {
        if (isLastStep) {
            alert("Calculated");
        }
    }

    return (
        <FormProvider {...formMethods}>
            <form>
                <div className='calculator-container'>
                    <div className="d-flex w-100 h-100">
                        <div className="d-none d-lg-block section-left">
                            <img src={currentStep.image} alt="Thumbnail" />
                        </div>
                        <div className="section-right relative">
                            <div className="content">{currentStep.renderer}</div>
                            <div className="navigation">
                                <div className='progress-bar'>
                                    <div style={{ width: `${percentage}%` }} className="bar"></div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between px-3 py-3 px-lg-7 py-lg-4'>
                                    <Button type='secondary' onClick={onBack}>
                                        {isFirstStep ? 'Back' : 'Before'}
                                    </Button>
                                    <Button
                                        disabled={!formMethods.formState.isValid}
                                        onClick={onNext}
                                    >
                                        {isLastStep ? 'Calculate' : 'Next'}
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}

export default EnergyCalculator