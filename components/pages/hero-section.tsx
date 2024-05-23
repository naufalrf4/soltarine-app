"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { heroSection } from "@/constants";

const HeroSection = () => {
  return (
    <section>
      <div className="bg-background flex flex-col-reverse justify-between gap-14 p-8 py-14 sm:p-14 md:p-16 xl:p-44 xl:py-28 lg:p-28 lg:py-24 md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center space-y-8">
          <div className="space-y-1 md:space-y-2">
            <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
                {heroSection.title} 
            </h2>
            <p className="text-sm md:text-md xl:text-base text-muted-foreground">
                {heroSection.description}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Link href={heroSection.button.path}>
              <Button variant="outline">{heroSection.button.label}</Button>
            </Link>
            <Link href={heroSection.button.path1}>
              <Button variant="link">{heroSection.button.label1}</Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end items-center">
            <Image
                src={heroSection.image.src}
                alt={heroSection.image.alt}
                width={400}
                height={400}
                priority
            />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center animate-bounce">
      </div>
    </section>
  );
};

export default HeroSection;
