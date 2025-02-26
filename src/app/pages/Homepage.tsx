"use client";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Section2 from "@/components/sections/Section2";
import Section3 from "@/components/sections/Section3";
import Section4 from "@/components/sections/Section4";
import Section5 from "@/components/sections/Section5";
import Section7 from "@/components/sections/Section7";
import Section6 from "@/components/sections/Section6";
import Section8 from "@/components/sections/Section8";

const Home = () => {
  const section3Ref = useRef<HTMLDivElement | null>(null);
  const section8Ref = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Navbar section3Ref={section3Ref} section8Ref={section8Ref} />
      <HeroSection />
      <Section2 />
      <Section3 ref={section3Ref} />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 ref={section8Ref} />
    </>
  );
};

export default Home;
