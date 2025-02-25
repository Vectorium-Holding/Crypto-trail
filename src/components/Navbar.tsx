"use client";
import React, { RefObject } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import DropDown from "./DropDown";

interface NavbarProps {
  section3Ref: RefObject<HTMLDivElement | null>;
  section8Ref: RefObject<HTMLDivElement | null>;
}
const Navbar: React.FC<NavbarProps> = ({ section3Ref, section8Ref }) => {
  const { isLoggedIn } = useAuth();

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <nav className="fixed left-0 top-0 flex h-20 w-full items-center justify-between bg-gradient-to-r from-[#373636] via-[#212120] to-[#0b0b0b] px-10">
      <Link href="/">
        <Image
          src="/vectorium-logo.png"
          width={60}
          height={60}
          alt="Logo"
          priority
        />
      </Link>

      <div className="text-md leading-relaxe flex gap-12 bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text font-prata text-transparent">
        {[
          { name: "Home", path: "/" },
          { name: "How It Works", action: () => scrollToSection(section8Ref) },
          { name: "Support", path: "/Support" },
          { name: "Marketplace", path: "/Marketplace" },
          { name: "About", action: () => scrollToSection(section3Ref) }, // Scrolls to Section8
          { name: "Search", path: "/Search" },
        ].map((item, index) => (
          <span
            key={index}
            className="cursor-pointer hover:underline"
            onClick={
              item.action || (() => (window.location.href = item.path ?? "/"))
            }
          >
            {item.name}
          </span>
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
