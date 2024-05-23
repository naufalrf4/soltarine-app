"use client";

import React from "react";
import { dashboardLinks } from '@/constants';
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col px-4 justify-between border">
      <div>
        <ul className="mt-6 space-y-1">
          {dashboardLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} passHref>
                  <Button
                    variant={pathname === link.path ? 'default' : 'ghost'}
                    className="w-full text-left px-12"
                  >
                    {link.title}
                  </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
