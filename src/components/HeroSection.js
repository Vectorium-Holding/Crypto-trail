import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[55vh] bg-cover bg-center" style={{ backgroundImage: "url('/btc.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-left text-white px-4">
        <div className=" font-cinzel normal-case md:max-w-6xl mx-auto">
        <div className="text-[#C4A44D]">
  <h1 className="text-4xl md:text-4xl font-medium leading-relaxed">
    Vectorium: Revolutionizing Sustainability with
  </h1>
  <h1 className="text-4xl md:text-4xl font-medium leading-relaxed mt-4">
    Crypto-Powered Carbon Credits
  </h1>
</div>
        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-5xl">
          Welcome to Vectorium, the world's first crypto marketplace for Voluntary Carbon Credits (VCCs).
          We're bridging the gap between carbon offset and blockchain technology.
        </p>
        <div className="mt-6 flex gap-4 ">
          <button className="bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg">
            Start Trading
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg">
            Learn More
          </button>

        </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
