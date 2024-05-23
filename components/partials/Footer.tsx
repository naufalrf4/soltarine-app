import React from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link href="/">
          <Image
            src="/images/soltarine-logo.png"
            alt="logo"
            width={128}
            height={128}
            priority
          />
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <Button variant={"link"}>{link.title}</Button>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8"></ul>
      </div>
    </footer>
  );
};

export default Footer;
