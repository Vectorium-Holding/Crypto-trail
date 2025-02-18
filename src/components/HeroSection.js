import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[55vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/btc.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-left text-white px-4">
        <div className=" font-cinzel md:max-w-5xl mx-auto">
          <div className="text-[#C4A44D] mt-16 -ml-3 mb-8">
            <h1 className="font-serif text-4xl md:text-[2.8rem] font-medium leading-relxed">
              Vectorium: Revolutionizing Sustainability with
            </h1>
            <h1 className="font-serif text-4xl md:text-[2.8rem] font-medium leading-relaxe mt-4">
              Crypto-Powered Carbon Credits
            </h1>
          </div>
          <p className="font-sans mt-4 text-md md:text-[1.05rem] text-gray-500 max-w-[56rem] -ml-3">
            Welcome to Vectorium, the world's first crypto marketplace for
            Voluntary Carbon Credits (VCCs). We're bridging the gap between
            carbon offset and blockchain technology.
          </p>
          <div className="mt-6 flex gap-4 -ml-3 ">
            <button className="bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] hover:bg-yellow-600 text-black font-medium py-3 px-4 rounded-sm font-sans ">
              Start Trading
            </button>
            <button className="bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] hover:bg-yellow-600 text-black font-medium font-sans py-3 px-6 rounded-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
