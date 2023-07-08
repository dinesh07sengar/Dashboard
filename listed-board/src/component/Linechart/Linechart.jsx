import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Piechart from '@/component/Piechart/Piechart';




ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Linechart = ({val}) => {
   
    return (
        <div>
            <Line
                data={{
                    labels: ["",'Week1', 'Week2', 'Week3', 'Week4', ""],
                    datasets: [
                        {
                            label: 'user',
                            data: val.userdata,
                            borderColor: '#9BDD7C',
                            backgroundColor: '#9BDD7C',
                            pointBorderColor: 'transparent',
                            pointBorderWidth: 1,
                            tension: 0.3

                        },
                        {
                            label: 'guest',
                            data: [134, 311, 214, 98,158],
                            borderColor: '#E9A0A0',
                            backgroundColor: '#E9A0A0',
                            pointBorderColor: 'transparent',
                            pointBorderWidth: 0.1,
                            tension: 0.3

                        },
                    ],
                }}

                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            align: 'end',
                            labels: {
                                usePointStyle: true,
                                pointStyle: 'circle',

                            }
                            // position: 'top' as const,
                        },
                        canvas: {
                            width: 800,
                            height: 400,
                        },
                       
                    },
                    scales: {
                        x: {
                            offset: false,
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            grid: {
                                display: true
                            },
                            ticks: {
                                stepSize: 100,
                            },
                        },

                    }
                }}
            />
        </div>
    )
}
export default Linechart;
