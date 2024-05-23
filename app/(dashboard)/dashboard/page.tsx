'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-8 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>
        <p className="text-center">Welcome, {user?.email}</p>
        <div className="text-center">
          <Link href="/logout">
              Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
