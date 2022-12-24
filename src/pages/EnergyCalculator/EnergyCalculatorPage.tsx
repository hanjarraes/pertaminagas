import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import AddressForm from './components/form/AddressForm';
import BuildingConditionForm from './components/form/BuildingConditionForm';
import BussinessTypeForm from './components/form/BussinessTypeForm';
import Button from './components/shared/Button';
import CompanyDetailsForm from './components/form/CompanyDetailsForm';
import EnergyUsageForm from './components/form/EnergyUsageForm';
import FuelForm from './components/form/FuelForm';
import './styles.scss';
import { FormSchema, FormStep, ResultRouteState } from './types/form';
import { useMultistepForm } from './utils/useMultistepForm';
import { calculateEnergies, CalculateEnergyParams, CalculateEnergyResultUI } from './utils/fuel';


const INITIAL_DATA: FormSchema = {
    fuels: [],
    energyUsages: [],
    buildingCondition: undefined,
    companyName: undefined,
    name: undefined,
    phone: undefined,
    email: undefined,
    businessType: undefined,
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

const EnergyCalculatorPage = () => {
    const [isCalculating, setIsCalculating] = useState<boolean>(false)
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

    // TODO: Wire submit form to BE API
    function onSubmit(data: FormSchema) {
        if (isLastStep) {
            setIsCalculating(true)
            setTimeout(() => {
                const calculatorParams: CalculateEnergyParams[] = [];

                data.energyUsages.forEach((item) => {
                    if (item.name && item.unit && item.usageValue) {
                        calculatorParams.push({
                            name: item.name,
                            unit: item.unit,
                            usageValue: item.usageValue,
                        })
                    }
                })

                const calculatorResult: CalculateEnergyResultUI = calculateEnergies(calculatorParams);

                console.log('FORM RESULT', { data, calculatorResult });
                setIsCalculating(false)

                const resultRouteState: ResultRouteState = {
                    formData: data,
                    calculatorResult,
                }
                navigate('/energy-calculator/result', { state: resultRouteState })
            }, 1000);
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
                                    {isLastStep ? <Button
                                        disabled={!formMethods.formState.isValid || isCalculating}
                                        onClick={formMethods.handleSubmit(onSubmit)}
                                    >
                                        {isCalculating ? 'Calculating...' : 'Calculate'}
                                    </Button> : <Button
                                        disabled={!formMethods.formState.isValid || isCalculating}
                                        onClick={next}
                                    >
                                        Next
                                    </Button>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}

export default EnergyCalculatorPage