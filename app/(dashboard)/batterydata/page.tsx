// /app/battery/page.tsx
"use client"

import React, { useEffect, useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoutes';

import { fetchDataRealTime } from '@/api/fetchData';
import { ApiData } from '@/constants/types';
import BatteryChart from '@/components/charts/batteryCharts';

const BatteryDataPage: React.FC = () => {
  const [data, setData] = useState<ApiData | null>(null);

  useEffect(() => {
    fetchDataRealTime((newData) => {
      setData(newData);
    });
  }, []);

  if (!data) {
    return (
      <ProtectedRoute>
        <div className="container min-h-screen bg-muted/40 mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Battery Data Visualization</h1>
          <div className="bg-background shadow rounded-lg p-4">
            <div>No data available</div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="container bg-muted/40 mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Visualisasi Data Baterai</h1>
        <div className="bg-card border-2 shadow rounded-lg p-4">
          <BatteryChart data={data.data} />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default BatteryDataPage;
