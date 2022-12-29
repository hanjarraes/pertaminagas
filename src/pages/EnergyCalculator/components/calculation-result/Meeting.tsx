import { CalendarSearch, ClipboardText, ReceiptDisscount, TruckFast, WalletSearch } from 'iconsax-react'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";

import { BOOK_MEETING_URL } from 'constants/meeting'
import { FormSchema, ResultRouteState } from 'pages/EnergyCalculator/types/form'
import { CalculateEnergyResultUI, SelectedFuel } from 'pages/EnergyCalculator/utils/fuel'
import Button from '../shared/Button'


export const meetingObtains = [
    {
        icon: <ReceiptDisscount />,
        title: 'Optimization of savings according to the details of your gas usage',
    },
    {
        icon: <CalendarSearch />,
        title: 'Planning the fastest gas delivery time to your location',
    },
    {
        icon: <ClipboardText />,
        title: 'Other technical and operational arrangements',
    },
    {
        icon: <TruckFast />,
        title: 'The best mode of gas delivery to your location',
    },
    {
        icon: <WalletSearch />,
        title: 'Finding the most accommodating financial scheme',
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

const Meeting = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { state } = useLocation()
    const { formData, calculatorResult }: ResultRouteState = state ?? {}

    const onPickASchedule = () => {
        setIsLoading(true);

        fetch(
            `${process.env.REACT_APP_API_URL}/post-lead`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(constructPayload(formData, calculatorResult)),
            }
        )
            .then(response => response.json())
            .then(() => {
                window.location.href = BOOK_MEETING_URL
            }).catch((error) => {
                console.log('Failed to send lead data');
                console.log(error);
                toast('Please try again, something went wrong while directing you to the next page')
            })
            .finally(() => {
                setIsLoading(false)
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
        <div>
            <hr />
            <h5 className='title-s text-center mt-4 mt-lg-5 mb-2'>Interested? Let’s have a meeting with us!</h5>
            <p className='body-s text-center mb-3 mb-md-4'>
                Our gas expert will help you find the best technical and operational solutions for your business. <br />
                You will get your efficiency exactly the way you need.
            </p>
            <div className="row mb-3 mb-md-5">
                {meetingObtains.map((item, i) => (
                    <div key={i} className="col-6 col-lg mb-3 mb-lg-0">
                        <div className='meeting-card'>
                            <div className='icon-wrapper mb-3'>
                                {item.icon}
                            </div>
                            <p className='body-s darker mb-0'>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <Button
                    disabled={isLoading}
                    onClick={onPickASchedule}
                >
                    Pick a Schedule
                </Button>
            </div>
            <Toaster
                position='bottom-right'
                toastOptions={{
                    className: '',
                    style: {
                        borderRadius: "8px",
                        border: '1px solid #E64A40',
                        background: '#FFEEED',
                        padding: '16px 24px',
                        color: '#171717',
                        fontWeight: 500,
                    },
                }} />
        </div>
    )
}

export default Meeting