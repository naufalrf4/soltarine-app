"use client"

import React, { useEffect, useState } from 'react';
import LightChart from '@/components/charts/lightCharts';
import { fetchDataRealTime } from '@/api/fetchData';

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

interface ApiData {
  data: {
    [timestamp: string]: FirebaseData;
  };
}

export default function LightDataPage() {
  const [data, setData] = useState<ApiData | null>(null);

  useEffect(() => {
    fetchDataRealTime((newData) => {
      setData(newData);
    });
  }, []);

  if (!data) {
    return (
      <div className="container min-h-screen bg-muted/40 mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Visualisasi Data LDR</h1>
        <div className="bg-background shadow rounded-lg p-4">
          <div>Tidak ada data yang tersedia</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container min-h-screen bg-muted/40 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Visualisasi Data LDR</h1>
      <div className="bg-card border-2 shadow rounded-lg p-4">
        <LightChart data={data.data} />
      </div>
    </div>
  );
}

