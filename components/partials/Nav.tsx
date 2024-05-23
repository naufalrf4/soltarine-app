import React from 'react'
import { navLinks } from '@/constants';
import { navProps } from '@/constants/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Nav: React.FC<navProps> = ({
    containerStyles,
    linkStyles,
    underlineStyles,
  }) => {
    const path = usePathname();
    return (
      <nav className={`${containerStyles}`}>
        {navLinks.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`capitalize ${linkStyles} ${
                path === link.path
                  ? "text-primary font-bold"
                  : "hover:text-primary"
              }`}
            >
              {link.path === path && (
                <motion.span
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "tween" }}
                  layoutId="underline"
                  className={`${underlineStyles}`}
                />
              )}
              {link.title}
            </Link>
          );
        })}
      </nav>
    );
  };

export default Nav