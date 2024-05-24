"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { registerWithEmail } from "@/utils/auth";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { user } = useAuth();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await registerWithEmail(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (user) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <div className="w-full rounded-2xl flex flex-col items-center max-w-md p-8 space-y-8 bg-background shadow-lg">
        <Link href={"/"}>
          <Image
            src="/images/soltarine-logo.png"
            alt="logo"
            width={128}
            height={128}
          />
        </Link>
        <h1 className="font-semibold text-xl">Daftar Akun SoltarinE</h1>
        <form onSubmit={handleRegister} className="space-y-6">
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
          <Button type="submit" className="w-full">
            Register
          </Button>
          {error && <p className="text-red-500">{error}</p>}

          <div className="text-sm">
          <p className='mt-8 text-center'>
            Sudah memiliki akun?{' '}
             <Link href="/login" className="text-primary">Masuk</Link>
          </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
