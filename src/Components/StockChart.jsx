import React from 'react';
import Chart from 'react-apexcharts';

const StockChart = ({ data }) => {
  const stockData = data
    .map((dayArr) => [Date.parse(dayArr[0]), dayArr[11].toFixed(0)])
    .sort((a, b) => a[0] - b[0]);

  console.log(stockData);

  const options = {
    chart: {
      type: 'area',
    },
    xaxis: {
      type: 'datetime',
    },
  };

  const series = [
    {
      name: 'series-1',
      data: stockData,
    },
  ];

  return <Chart type="area" width="700" options={options} series={series} />;
};

export default StockChart;
