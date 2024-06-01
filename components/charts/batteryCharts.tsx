// /components/charts/BatteryChart.tsx
"use client"

import React from 'react';
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';
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
import { DataPoint } from '@/constants/types'; // Adjust the path as necessary

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface BatteryChartProps {
  data: { [timestamp: string]: DataPoint };
}

const BatteryChart: React.FC<BatteryChartProps> = ({ data }) => {
  if (!data) {
    return <div>No data available</div>;
  }

  const timestamps = Object.keys(data).sort((a, b) => Number(a) - Number(b));
  const recentTimestamps = timestamps.slice(-5); // Get the 5 most recent timestamps
  const formattedTimestamps = recentTimestamps.map(ts => dayjs(Number(ts)).format('dddd, HH:mm YYYY-MM-DD'));

  const chartData = {
    labels: formattedTimestamps,
    datasets: [
      {
        label: 'Voltage',
        data: recentTimestamps.map(ts => data[ts].voltage),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
      {
        label: 'Current',
        data: recentTimestamps.map(ts => data[ts].current),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
      },
      {
        label: 'Power',
        data: recentTimestamps.map(ts => data[ts].power),
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: false,
      },
      {
        label: 'Energy',
        data: recentTimestamps.map(ts => data[ts].energy),
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Battery Data',
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default BatteryChart;
