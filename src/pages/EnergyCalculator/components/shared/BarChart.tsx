import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,
    ChartData,
    ChartOptions,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

type BarChartProps = {
    labels: [string[] | string, string[] | string],
    dataSource: [number, number],
    dataLabelFormatter: (value: any) => string,
    yAxisFormatter: (value: string | number) => string
}


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,
    ChartDataLabels
);

const BarChart: React.FC<BarChartProps> = ({
    labels,
    dataSource,
    dataLabelFormatter,
    yAxisFormatter
}) => {
    const options: ChartOptions<"bar"> = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    align: 'center',
                    color: "#737373",
                    font: function (context) {
                        var width = context.chart.width;
                        var size = Math.round(width / 70);

                        return {
                            weight: 'bold',
                            size: size
                        };
                    },
                }
            },
            y: {
                ticks: {
                    callback: yAxisFormatter
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                display: false,
            },
            datalabels: {
                display: true,
                color: "black",
                font: function (context) {
                    var width = context.chart.width;
                    var size = Math.round(width / 35);

                    return {
                        weight: 'bold',
                        size: size
                    };
                },
                formatter: dataLabelFormatter,
                textAlign: 'center',
            }
        },
    };

    const data: ChartData<"bar"> = {
        labels,
        datasets: [
            {
                label: 'Current',
                data: dataSource,
                backgroundColor: ['rgba(255, 82, 71, 0.24)', 'rgba(35, 193, 107, 0.24)'],
                borderRadius: 24,
            },
        ],
    };

    return (
        <Bar data={data} options={options} />
    )
}

export default BarChart