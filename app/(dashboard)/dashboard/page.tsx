'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import StatsCards from '@/components/dashboard/StatsCards';
import ProtectedRoute from '@/components/ProtectedRoutes';
import MonitoringTable from '@/components/dashboard/MonitoringTable';
import SensorDetails from '@/components/dashboard/SensorDetails';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">
                Hello, {user?.name || 'User'}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
              <StatsCards />
              <MonitoringTable />
            </div>
            <SensorDetails />
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
