'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { updateProfile } from '@/utils/auth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { doc, updateDoc } from 'firebase/firestore';
import { firestore } from '@/utils/firebase';

const EditProfile = () => {
  const { user, loading } = useAuth();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setPhoneNumber(user.phoneNumber.toString().replace('+62', ''));
    }
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  const handleUpdateProfile = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const userDoc = doc(firestore, 'users', user.uid);
      await updateDoc(userDoc, {
        name,
        phoneNumber: `+62${phoneNumber}`
      });

      await updateProfile(user.uid, { name });

      setSuccess('Profile updated successfully.');
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setSuccess(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <div className="w-full rounded-2xl flex flex-col items-center max-w-md p-8 space-y-8 bg-background shadow-lg">
        <h1 className="font-semibold text-xl">Edit Profile</h1>
        <form onSubmit={handleUpdateProfile} className="space-y-6">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <div className="flex">
            <span className="flex items-center px-2 bg-gray-200 border border-r-0 rounded-l-md">+62</span>
            <Input
              type="number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full p-2 border rounded-r"
            />
          </div>
          <Button type="submit" className="w-full">
            Update Profile
          </Button>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
