'use client';

import { useState, useEffect } from 'react';
import { fetchDataRealTime } from '@/api/fetchData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { File } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/id'; 
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

const MonitoringTable = () => {
  const [data, setData] = useState<any>(null);
  const [filter, setFilter] = useState<'day' | 'week' | 'month'>('day');

  useEffect(() => {
    fetchDataRealTime((newData) => {
      setData(newData);
    });
  }, []);

  const getDayOfWeek = (timestamp: number) => {
    const date = new Date(timestamp);
    return daysOfWeek[date.getDay()];
  };

  const filterDataByPeriod = (data: any, periodStart: dayjs.Dayjs) => {
    return Object.keys(data.data).reduce((result: any, timestamp) => {
      const date = dayjs(Number(timestamp));
      if (date.isAfter(periodStart)) {
        result[timestamp] = data.data[timestamp];
      }
      return result;
    }, {});
  };

  const renderTable = (filteredData: any) => {
    const timestamps = Object.keys(filteredData).sort((a, b) => Number(b) - Number(a)); // Sort in descending order
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Timestamp</TableHead>
            <TableHead>Current</TableHead>
            <TableHead>Voltage</TableHead>
            <TableHead>Power</TableHead>
            <TableHead>Energy</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {timestamps.map((timestamp) => (
            <TableRow key={timestamp}>
              <TableCell>
                <strong>{getDayOfWeek(Number(timestamp))}</strong>, {dayjs(Number(timestamp)).format('DD MMMM YYYY, HH:mm:ss')}
              </TableCell>
              <TableCell>{filteredData[timestamp].current} <b>A</b>
              </TableCell>
              <TableCell>{filteredData[timestamp].voltage} <b>V</b></TableCell>
              <TableCell>{filteredData[timestamp].power} <b>W</b></TableCell>
              <TableCell>{filteredData[timestamp].energy} <b>kWh</b></TableCell>
              <TableCell>
                <Badge className="text-xs" variant="default">
                  Aktif
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  const exportToPDF = (filteredData: any) => {
    const doc = new jsPDF();
    const timestamps = Object.keys(filteredData).sort((a, b) => Number(b) - Number(a)); // Sort in descending order

    const tableData = timestamps.map((timestamp) => [
      `${getDayOfWeek(Number(timestamp))}, ${dayjs(Number(timestamp)).format('DD MMMM YYYY, HH:mm:ss')}`,
      `${filteredData[timestamp].current} A`,
      `${filteredData[timestamp].voltage} V`,
      `${filteredData[timestamp].power} W`,
      `${filteredData[timestamp].energy} kWh`,
      'Aktif',
    ]);

    autoTable(doc, {
      head: [['Timestamp', 'Current', 'Voltage', 'Power', 'Energy', 'Status']],
      body: tableData,
    });

    doc.save('monitoring_data.pdf');
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const now = dayjs();
  const dayData = filterDataByPeriod(data, now.subtract(1, 'day'));
  const weekData = filterDataByPeriod(data, now.subtract(1, 'week'));
  const monthData = filterDataByPeriod(data, now.subtract(1, 'month'));

  return (
    <Tabs defaultValue="day" onValueChange={(value) => setFilter(value as 'day' | 'week' | 'month')}>
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="day">Harian</TabsTrigger>
          <TabsTrigger value="week">Mingguan</TabsTrigger>
          <TabsTrigger value="month">Bulanan</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="h-7 gap-1 text-sm"
            onClick={() => {
              if (filter === 'day') {
                exportToPDF(dayData);
              } else if (filter === 'week') {
                exportToPDF(weekData);
              } else {
                exportToPDF(monthData);
              }
            }}
          >
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Export</span>
          </Button>
        </div>
      </div>
      <TabsContent value="day">
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Data Harian</CardTitle>
            <CardDescription>
              Data harian terbaru dari solar panel SoltarinE.
            </CardDescription>
          </CardHeader>
          <CardContent>{renderTable(dayData)}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="week">
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Data Mingguan</CardTitle>
            <CardDescription>
              Data mingguan terbaru dari solar panel SoltarinE.
            </CardDescription>
          </CardHeader>
          <CardContent>{renderTable(weekData)}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="month">
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Data Bulanan</CardTitle>
            <CardDescription>
              Data bulanan terbaru dari solar panel SoltarinE.
            </CardDescription>
          </CardHeader>
          <CardContent>{renderTable(monthData)}</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default MonitoringTable;
