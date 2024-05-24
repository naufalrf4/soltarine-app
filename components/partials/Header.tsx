"use client";
import React, { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { ThemeSwitch } from "./ThemeSwitcher";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header ? "py-4 bg-background shadow-lg" : "py-6 bg-transparent"
      } sticky top-0 z-30 transition-all sm:px-10 md:px-10 xl:px-32 lg:px-20 ${
        pathname === "/" && "bg-background"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex flex-row gap-4">
            <div className="flex items-center gap-x-6">
              <Nav
                underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                linkStyles="relative hover:text-primary transition-all"
                containerStyles="hidden lg:flex gap-x-8 items-center"
              />
            </div>

            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center">
          <Link href="/login">
              <Button className="hidden lg:block">
                Masuk
              </Button>
            </Link>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
