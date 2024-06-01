"use client";

import { useState, useEffect } from "react";
import { fetchDataRealTime } from "@/api/fetchData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const SensorDetails = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchDataRealTime((newData) => {
      setData(newData);
    });
  }, []);

  if (!data) {
    return <div>Loading... </div>;
  }

  const latestTimestamp = Object.keys(data.data).sort().pop();
  const latestData = latestTimestamp ? data.data[latestTimestamp] : null;
  const formattedTimestamp = latestTimestamp
    ? dayjs(Number(latestTimestamp)).format("dddd, DD MMMM YYYY, HH:mm:ss")
    : "N/A";

  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex mb-4 items-center gap-2 text-lg">
            <span>Data Sensor</span>
          </CardTitle>
          <CardDescription>
            Last Updated{" "}
            <time
              dateTime={
                latestTimestamp
                  ? new Date(Number(latestTimestamp)).toISOString()
                  : ""
              }
            >
              {formattedTimestamp}
            </time>
          </CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1"></div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">Sensor Details</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Current (A):</span>
              <span>{latestData.current}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Voltage (V):</span>
              <span>{latestData.voltage}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Power (W):</span>
              <span>{latestData.power}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Energy (kWh):</span>
              <span>{latestData.energy}</span>
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-3">
            <div className="font-semibold">LDR Light</div>
            <address className="grid gap-0.5 not-italic text-muted-foreground">
              <span>Bottom: {latestData.ldr_light.bottom}</span>
              <span>Left: {latestData.ldr_light.left}</span>
              <span>Right: {latestData.ldr_light.right}</span>
              <span>Top: {latestData.ldr_light.top}</span>
            </address>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SensorDetails;
