"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
//put useAuth for "client side component only auth for server side componet"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNavbar = () => {
  const isSignedIn = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative w-8 h-8 mr-4">
          <Image fill alt="logo" src="/favicon.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          S-Gen
        </h1>
      </Link>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
