'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = ({val}) => {
    console.log(val)
    return (
        <div style={{height:"180px"}}>
            <Pie
                data={
                    {
                        labels: val.piedata.lab,
                        datasets: [
                            {
                                label: '# of Votes',
                                data: val.piedata.data,
                                backgroundColor: [
                                    '#98D89E',
                                    '#EE8484',
                                    '#F6DC7D',
                                   
                                ],
                              
                                borderWidth: 0,
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position:'right',
                                align: 'start',
                                
                                labels: {
                                    usePointStyle: true,
                                    pointStyle: 'circle',
    
                                }
                                // position: 'top' as const,
                            },
                           
                           
                        },
                       
                    }}
                
            />

        </div>
    )
}
export default Piechart;
