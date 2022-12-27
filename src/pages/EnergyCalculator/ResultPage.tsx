import Footer from 'component/container/Footer'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ResultSection from './components/calculation-result/ResultSection'
import { ResultRouteState } from './types/form'

const ResultPage = () => {
    const navigate = useNavigate();
    const { state } = useLocation()
    const { formData, calculatorResult }: ResultRouteState = state ?? {}

    console.log({ formData, calculatorResult });

    useEffect(() => {
        if (!formData || !calculatorResult) {
            navigate('/energy-calculator')
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='result-container'>
            <div className="bg-image"></div>
            <ResultSection />
            <Footer />
        </div>
    )
}

export default ResultPage