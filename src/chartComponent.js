import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const ChartComponent = ({ chartData, chartType, title, dataLabel, yAxisLabel }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartData && chartRef.current === null) {
            const chartCtx = document.getElementById('myChart').getContext('2d');
            const chartConfig = {
                type: chartType,
                data: {
                    labels: chartData.map(item => item.date),
                    datasets: [{
                        label: dataLabel,
                        data: chartData.map(item => item[dataLabel.toLowerCase()]), // Use dataLabel to access the correct data
                        backgroundColor: chartType === 'line' ? 'rgba(75, 192, 192, 0.2)' : 'rgba(0, 123, 255, 0.7)',
                        borderColor: chartType === 'line' ? 'rgba(75, 192, 192, 1)' : 'rgba(0, 123, 255, 1)',
                        borderWidth: 1,
                        fill: chartType === 'line',
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                         title: {
                            display: true,
                            text: title,
                            font: {
                                size: 16
                            }
                        },
                        legend: {
                            position: 'bottom'
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Date'
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: yAxisLabel
                            },
                            beginAtZero: true
                        }
                    }
                }
            };

            chartRef.current = new Chart(chartCtx, chartConfig);
        } else if (chartData && chartRef.current) {
            const chartInstance = chartRef.current;
            chartInstance.data.labels = chartData.map(item => item.date);
            chartInstance.data.datasets[0].data = chartData.map(item => item[dataLabel.toLowerCase()]);
            chartInstance.options.plugins.title.text = title;  // Update title
            chartInstance.data.datasets[0].label = dataLabel;
            chartInstance.options.scales.y.title.text = yAxisLabel;
            chartInstance.config.type = chartType;
            chartRef.current.update();
        }

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null;
            }
        };
    }, [chartData, chartType, title, dataLabel, yAxisLabel]);

    return (
        <canvas id="myChart" width="400" height="200"></canvas>
    );
};

export default ChartComponent;