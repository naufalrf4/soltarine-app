"use client";

import { useAuth } from "@/context/AuthContext";
import { signOut } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ThemeSwitch } from "./ThemeSwitcher";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

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
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full overflow-hidden">
                  <Image
                    src={user.photoURL || "/images/default-user.png"}
                    alt="User Avatar"
                    width={36}
                    height={36}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-0 flex" onClick={handleLogout}>
                  <Button variant="destructive" className="w-full">Logout</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
