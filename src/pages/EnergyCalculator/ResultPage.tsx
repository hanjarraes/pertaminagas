import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Footer from 'component/container/Footer'
import Header from 'component/container/Header'

import ResultSection from './components/calculation-result/ResultSection'
import { ResultRouteState } from './types/form'

const ResultPage = () => {
    const navigate = useNavigate();
    const { state } = useLocation()
    const { formData, calculatorResult }: ResultRouteState = state ?? {}


    useEffect(() => {
        if (!formData || !calculatorResult) {
            navigate('/energy-calculator')
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='result-container'>
            <Header business />
            <div className="bg-image"></div>
            {formData && calculatorResult ? <ResultSection /> : undefined}
            <Footer business />
        </div>
    )
}

export default ResultPage