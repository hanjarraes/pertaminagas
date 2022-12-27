import React from 'react'
import { useLocation } from 'react-router-dom';
import { ResultRouteState } from 'pages/EnergyCalculator/types/form';
import { getEnergyUsageLabels } from 'pages/EnergyCalculator/utils/fuel';
import { getNumberFormat } from '../../utils/currency';
import BarChart from '../shared/BarChart';

const EnergyCostPerYear = () => {
    const { state } = useLocation()
    const { formData, calculatorResult }: ResultRouteState = state ?? {}

    const energyUsageLabels = getEnergyUsageLabels(formData.energyUsages)

    return (
        <div className='mb-4 mb-md-5'>
            <h5 className='title-s text-center mb-3 mb-md-4'>Energy cost per year (Rupiah)</h5>
            <BarChart
                labels={[
                    ["Your current expenditure", ...energyUsageLabels],
                    ["Your expenditure", "with PGN natural gas"]
                ]}
                dataSource={[
                    calculatorResult.currentExpenditurePerYear,
                    calculatorResult.naturalGasExpenditurePerYear
                ]}
                dataLabelFormatter={(value) => {
                    const total = getNumberFormat({
                        value,
                        style: 'currency'
                    })

                    return `${total}\n per year`;
                }}
                yAxisFormatter={(value) => {
                    return getNumberFormat({
                        value: Number(value),
                        notation: 'compact',
                    })
                }}
            />
        </div>
    )
}

export default EnergyCostPerYear