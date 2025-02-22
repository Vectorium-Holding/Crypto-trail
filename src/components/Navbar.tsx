import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between bg-[#1b1c1d] px-10">
      {/* Logo */}
      <Link href="/">
        <Image src="/vercel.svg" width={50} height={50} alt="Logo" priority />
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-12 text-[#C0912E]">
        {["Home", "How It Works", "Support", "Marketplace", "About", "Search"].map((name, index) => (
          <Link key={index} href={`/${name.replace(/\s/g, "-")}`}>
            <span className="cursor-pointer hover:underline">{name}</span>
          </Link>
        ))}
      </div>

      {/* Globe Icon */}
      <Link href="/Search">
        <Image src="/globe.svg" width={50} height={50} alt="Search Icon" priority />
      </Link>
    </nav>
  );
};

export default Navbar;
