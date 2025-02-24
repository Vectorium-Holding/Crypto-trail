import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[55vh] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/btc.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-left text-white">
        <div className="font-cinzel mx-auto md:max-w-5xl">
          <div className="-ml-3 mb-8 mt-16 text-[#C4A44D]">
            <h1 className="leading-relxed font-serif text-4xl font-medium md:text-[2.8rem]">
              Vectorium: Revolutionizing Sustainability with
            </h1>
            <h1 className="leading-relaxe mt-4 font-serif text-4xl font-medium md:text-[2.8rem]">
              Crypto-Powered Carbon Credits
            </h1>
          </div>
          <p className="text-md -ml-3 mt-4 max-w-[56rem] font-sans text-gray-500 md:text-[1.05rem]">
            Welcome to Vectorium, the world's first crypto marketplace for
            Voluntary Carbon Credits (VCCs). We're bridging the gap between
            carbon offset and blockchain technology.
          </p>
          <div className="-ml-3 mt-6 flex gap-4">
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
  );
};

export default HeroSection;
