"use client";

import { useState, useEffect } from "react";
import { fetchDataRealTime } from "@/api/fetchData";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ApiData } from "@/constants/types"; 

const StatsCards = () => {
  const [data, setData] = useState<ApiData | null>(null);
  const [latestTimestamp, setLatestTimestamp] = useState<string | null>(null);

  useEffect(() => {
    fetchDataRealTime((newData) => {
      console.log("Fetched data:", newData); // Debugging log
      setData(newData);

      const timestamps = Object.keys(newData.data).sort((a, b) => Number(b) - Number(a));
      setLatestTimestamp(timestamps[0] || null);
    });
  }, []);

  if (!data || !latestTimestamp) {
    return <div>Loading...</div>;
  }

  const latestData = data.data[latestTimestamp];

  const currentPercentage = (latestData.current / 10) * 100; 
  const voltagePercentage = (latestData.voltage / 240) * 100; 
  const powerPercentage = (latestData.power / 100) * 100; 

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Current</CardDescription>
          <CardTitle className="text-4xl">{latestData.current} A</CardTitle>
          {/* <Progress value={currentPercentage} /> */}
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Voltage</CardDescription>
          <CardTitle className="text-4xl">{latestData.voltage} V</CardTitle>
          {/* <Progress value={voltagePercentage} /> */}
        </CardHeader>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Power</CardDescription>
          <CardTitle className="text-4xl">{latestData.power} W</CardTitle>
          {/* <Progress value={powerPercentage} /> */}
        </CardHeader>
      </Card>
    </div>
  );
};

export default StatsCards;
