import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import toast, { Toaster } from "react-hot-toast";

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
import {
    calculateEnergies,
    CalculateEnergyParams,
    CalculateEnergyResultUI,
    SelectedFuel
} from './utils/fuel';


const INITIAL_DATA: FormSchema = {
    fuels: [],
    energyUsages: [],
    location: undefined,
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

type SendLeadPayload = {
    submissionDate?: string;
    companyName?: string
    email?: string;
    phoneNumber?: string;
    selectedFuels?: SelectedFuel[]
    city?: string
}

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

    function onSubmit(data: FormSchema) {
        if (!isLastStep) {
            return;
        }

        setIsCalculating(true)

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

        // TODO: Hit real endpoint
        fetch(
            `${process.env.REACT_APP_API_URL}/post-lead`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(constructPayload(data, calculatorResult)),
            }
        )
            .then(() => {
                const resultRouteState: ResultRouteState = {
                    formData: data,
                    calculatorResult,
                }

                navigate('/energy-calculator/result', { state: resultRouteState })
            }).catch((error) => {
                console.log('Failed to send lead data');
                console.log(error);
                toast('Please try again, something went wrong while directing you to the next page')
            })
            .finally(() => {
                setIsCalculating(false)
            })
    }

    const constructPayload = (data: FormSchema, calculatorResult: CalculateEnergyResultUI): SendLeadPayload => {
        return {
            submissionDate: new Date().toDateString(),
            companyName: data.companyName,
            email: data.email,
            phoneNumber: data.phone,
            selectedFuels: calculatorResult.selectedFuels,
            city: data.location?.city
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
            <Toaster
                position='bottom-right'
                toastOptions={{
                    className: '',
                    style: {
                        borderRadius: "8px",
                        border: '1px solid #E64A40',
                        background: '#FFEEED',
                        color: '#171717',
                        fontWeight: 500,
                        maxWidth: "max-content",
                    },
                }} />
        </FormProvider>
    )
}

export default EnergyCalculatorPage