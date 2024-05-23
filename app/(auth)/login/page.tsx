'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { signInWithEmail, signInWithGoogle } from '@/utils/auth';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { user } = useAuth();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (user) {
    router.push('/dashboard');
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <div className="w-full rounded-2xl flex flex-col items-center max-w-md p-8 space-y-8 bg-background shadow-lg">
        <Link href={'/'}>
        <Image src="/images/soltarine-logo.png" alt="logo" width={128} height={128} />
        </Link>
      <h1 className='font-semibold text-xl'>Masuk ke SoltarinE</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <Button type="submit" className='w-full'>
            Masuk
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
        <div className="text-center">
          <p className='mb-2'>atau</p>
          <Button onClick={handleGoogleLogin} variant={"outline"} className='w-full flex gap-2 items-center justify-center px-12'>
            <Image src="/images/google-icon.svg" alt="google" width={24} height={24} />
            Masuk dengan Google
          </Button>
          <p className='mt-8'>
            Belum memiliki akun?{' '}
             <Link href="/register" className="text-primary">Daftar</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
