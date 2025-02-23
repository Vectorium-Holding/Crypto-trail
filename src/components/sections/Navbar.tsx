"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import DropDown from "../DropDown";


const Navbar = () => {

  const { isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    setIsLoggedIn(true);

  }, [isLoggedIn]);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between bg-black px-10">
      {/* Logo */}
      <Link href="/">
        <Image src="/vectorium-logo.png" width={60} height={60} alt="Logo" priority />
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-12 font-raleway text-lg bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-transparent leading-relaxe">
        {["Home", "How It Works", "Support", "Marketplace", "About", "Search"].map((name, index) => (
          <Link key={index} href={name==="Home" ? "/" : `/${name.replace(/\s/g, "-")}`}>
            <span className="cursor-pointer hover:underline">{name}</span>
          </Link>
        ))}
      </div>
      {
        isLoggedIn ? <DropDown/> :  <Button asChild variant="outline" 
                                            className="bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] 
                                            font-sans py-3 px-6 rounded-sm">  
                                        <Link href="/Login">Login / Sign Up</Link>
                
                                    </Button>
      }
    </nav>
  );
};

export default Navbar;
