import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ResultSection from './components/calculation-result/ResultSection'
import { ResultRouteState } from './types/form'

const ResultPage = () => {
    const { state } = useLocation()
    const navigate = useNavigate();
    const { formData, calculatorResults }: ResultRouteState = state ?? {}

    console.log({ formData, calculatorResults });

    useEffect(() => {
        if (!formData || !calculatorResults) {
            navigate('/energy-calculator')
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='result-container'>
            <div className="bg-image"></div>
            <ResultSection />
        </div>
    )
}

export default ResultPage