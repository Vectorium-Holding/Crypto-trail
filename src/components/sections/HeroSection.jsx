"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="relative mt-20 w-full bg-contain"
        style={{ backgroundImage: "url('/bitcoin-emerald-city.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-left text-white">
          <div className="font-cinzel mx-auto md:max-w-5xl">
            <div className="-ml-3 mb-8 mt-16 text-[#C4A44D]">
              <h1 className="bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text font-serif text-4xl font-medium leading-relaxed text-transparent md:text-[2.8rem]">
                Vectorium: Revolutionizing Sustainability with
              </h1>
              <h1 className="leading-relaxe mt-4 bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text font-serif text-4xl font-medium text-transparent md:text-[2.8rem]">
                Crypto-Powered Carbon Credits
              </h1>
            </div>
            <p className="text-md text-[##CFCBBF]-400 -ml-3 mt-4 max-w-[56rem] font-raleway text-base text-opacity-100 md:text-[1.05rem]">
              Welcome to Vectorium, the world's first crypto marketplace for
              Voluntary Carbon Credits (VCCs). We're bridging the gap between
              carbon offset and blockchain technology.
            </p>
            <div className="-ml-3 mb-10 mt-6 flex gap-4">
              <button className="rounded-sm bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] px-4 py-3 font-sans font-medium text-black hover:bg-yellow-600">
                Start Trading
              </button>
              <button className="rounded-sm bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] px-6 py-3 font-sans font-medium text-black hover:bg-yellow-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
