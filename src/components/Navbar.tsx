"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isDropDownVisible, SetIsDropDownVisible] = useState(false);
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between bg-[#1b1c1d] px-10">
        {/* Logo */}
        <Link href="/">
          <Image src="/vercel.svg" width={50} height={50} alt="Logo" priority />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-12 text-[#C0912E]">
          {[
            "Home",
            "How It Works",
            "Support",
            "Marketplace",
            "About",
            "Search",
          ].map((name, index) => (
            <Link key={index} href={`/${name.replace(/\s/g, "-")}`}>
              <span className="cursor-pointer hover:underline">{name}</span>
            </Link>
          ))}
        </div>

        {/* Globe Icon */}
        {/* <Link href="/Search">
        <Image
          src="/globe.svg"
          width={50}
          height={50}
          alt="Search Icon"
          priority
        />
      </Link> */}
        <button
          onClick={() => {
            SetIsDropDownVisible(!isDropDownVisible);
          }}
        >
          <Image
            src="/globe.svg"
            width={50}
            height={50}
            alt="Search Icon"
            priority
          />
        </button>
      </nav>
      {isDropDownVisible ? (
        <div className="absolute right-8 top-20  bg-white flex flex-col px-3 py-3 text-center space-y-2">
          <Link href="/Login">
            <button className=" bg-gray-600 w-32 py-2 text-white font-bold ">
              SignUp/Login
            </button>
          </Link>
          <Link href="/dashboard">
            <button className=" bg-gray-600 w-32 py-2 text-white font-bold ">
              Dashboard
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
