"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import DropDown from "./DropDown";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="fixed left-0 top-0 flex h-20 w-full items-center justify-between bg-gradient-to-r from-[#373636] via-[#212120] to-[#0b0b0b] px-10">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/vectorium-logo.png"
          width={60}
          height={60}
          alt="Logo"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="text-md leading-relaxe flex gap-12 bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text font-prata text-transparent">
        {[
          "Home",
          "How It Works",
          "Support",
          "Marketplace",
          "About",
          "Search",
        ].map((name, index) => (
          <Link
            key={index}
            href={name === "Home" ? "/" : `/${name.replace(/\s/g, "-")}`}
          >
            <span className="cursor-pointer hover:underline">{name}</span>
          </Link>
        ))}
      </div>
      {isLoggedIn ? (
        <DropDown />
      ) : (
        <Button
          asChild
          variant="outline"
          className="rounded-sm bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] px-6 py-3 font-sans"
        >
          <Link href="/Login">Login / Sign Up</Link>
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
