import React from 'react'
import { getRupiahFormat } from '../../utils/currency';
import BarChart from '../shared/BarChart';

const EnergyCostPerYear = () => {
    return (
        <div className='mb-5'>
            <h5 className='title-s text-center mb-4'>Energy cost per year (Rupiah)</h5>
            <BarChart
                labels={[
                    ["Your current expenditure", "with 100 tank of 50kg LPG,", "Rp 500.000.000 Rupiah of 50kg LPG"],
                    ["Your expenditure", "with PGN natural gas"]
                ]}
                dataSource={[360000000, 150000000]}
                dataLabelFormatter={(value) => {
                    const total = getRupiahFormat({
                        value,
                    })

                    return `${total}\n per year`;
                }}
                yAxisFormatter={(value) => {
                    return getRupiahFormat({
                        value: Number(value),
                        notation: 'compact',
                        showCurrency: false
                    })
                }}
            />
        </div>
    )
}

export default EnergyCostPerYear