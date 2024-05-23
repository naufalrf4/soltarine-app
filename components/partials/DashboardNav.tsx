"use client";

import { useAuth } from "@/context/AuthContext";
import { signOut } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ThemeSwitch } from "./ThemeSwitcher";
import Link from "next/link";

const DashboardNavbar = () => {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <nav className="w-full bg-background border">
      <div className="flex items-center justify-between p-4 px-12">
        <span className="text-lg font-semibold">
            <Link href="/">
          <Image
            src="/images/soltarine-logo.png"
            alt="logo"
            width={64}
            height={30}
          />
          </Link>
        </span>
        <div className="flex items-center space-x-4">
          {user && <span className="text-sm">{user.email}</span>}
          <Button onClick={handleLogout} variant={"destructive"}>
            Logout
          </Button>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
