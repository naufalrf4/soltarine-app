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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LdrLightData {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

interface FirebaseData {
  current: number;
  energy: number;
  ldr_light: LdrLightData;
  power: number;
  voltage: number;
}

interface LightChartProps {
  data: { [timestamp: string]: FirebaseData };
}

const LightChart: React.FC<LightChartProps> = ({ data }) => {
  if (!data) {
    return <div>No data available</div>;
  }

  const timestamps = Object.keys(data).sort((a, b) => Number(a) - Number(b));
  const recentTimestamps = timestamps.slice(-5); // Get the 5 most recent timestamps
  const formattedTimestamps = recentTimestamps.map(ts => dayjs(Number(ts)).format('YYYY-MM-DD HH:mm:ss'));

  const chartData = {
    labels: formattedTimestamps,
    datasets: [
      {
        label: 'LDR Bottom',
        data: recentTimestamps.map(ts => data[ts].ldr_light.bottom),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
      {
        label: 'LDR Left',
        data: recentTimestamps.map(ts => data[ts].ldr_light.left),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
      },
      {
        label: 'LDR Right',
        data: recentTimestamps.map(ts => data[ts].ldr_light.right),
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: false,
      },
      {
        label: 'LDR Top',
        data: recentTimestamps.map(ts => data[ts].ldr_light.top),
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
        text: 'LDR Data',
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LightChart;
