import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { AlignJustify } from 'lucide-react';
import { ThemeSwitch } from './ThemeSwitcher';
import Logo from './Logo';
import Nav from './Nav';

const MobileNav = () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button id="hamburger" size="icon" variant="ghost">
            <AlignJustify className="w-6 h-6 cursor-pointer" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col items-center justify-between h-full py-8">
            <div className="flex flex-col items-center gap-y-32">
            <div className="flex gap-2 items-center justify-center">
            <ThemeSwitch />
              <Logo />
            </div>
              <Nav
                containerStyles="flex flex-col items-center gap-y-4"
                linkStyles="text-xl"
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  };

export default MobileNav