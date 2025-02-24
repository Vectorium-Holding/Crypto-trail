"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Wallet = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br  from-[#1e1e1e] via-[#3d2900] to-[#3d2900] w-3/5 mx-12 h-1/6 -mt-12 px-6">
      <div className="w-full grid grid-cols-1 gap-4">
        {/* Buttons Row */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {[...Array(6)].map((_, i) => (
            <Button
              key={i}
              variant="outline"
              className="bg-yellow-500/20 border border-[#f7f595] bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-transparent leading-relaxe rounded-2xl px-2 py-1 hover:text-[#f7f595]"
            >
              {["Carson Credit", "Max rev/sleep", "DMI @ 3.5ko"][i % 3]}
            </Button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-4 bg-gradient-to-br  from-[#1e1e1e] via-[#3d2900] to-[#3d2900]">
          {/* Left Card */}
          <Card className="bg-yellow-500/10 border-yellow-500/30 shadow-lg shadow-yellow-500/20 flex-1 flex items-center p-4 rounded-2xl">
            <div className="rounded-full bg-yellow-500/20 -mt-8 mr-4">
              <Image
                src="/bitcoin.jpg"
                alt="Currency"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            
            <CardContent className="flex-grow space-y-2">
              <h1 className="text-4xl font-bold text-yellow-500"><span className="text-white">$000,</span>350,000</h1>
              <p className="text-sm text-yellow-500/80">Face/Up (3.1kV)</p>
              
              <div className="space-y-1 flex">
                <div className="text-white mr-8 mt-1 justify-center">￥: 864,798</div>
                <div className="text-white justify-center">￥: 81.89%</div>
              </div>
            </CardContent>
          </Card>

          {/* Right Card */}
          <Card className="bg-yellow-500/10 border-yellow-500/30 shadow-lg shadow-yellow-500/20 w-full md:w-[300px] rounded-2xl p-4">

            <div className="rounded-full mb-2">
                <Image
                    src="/bitcoin-symbol.png"
                    alt="Currency"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
            </div>

            <div className="flex">
                <div className="rounded-full">
                    <Image
                        src="/carbon-profile-pic.png"
                        alt="Currency"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </div>
                <div className="space-y-0.5">
                    <h2 className="text-lg font-semibold text-white ml-4">
                        Carbon Credit
                    </h2>
                    
                    <div className="flex ml-4">
                        <span className="text-sm text-white mr-4">Max rev/sleep</span>
                        <span className="text-xs text-white">DMI @ 3.5ko</span>
                    </div>
                </div>
            </div>
          </Card>
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-2 mt-8 flex-wrap -mb-72">
          {[...Array(3)].map((_, i) => (
            <Button
              key={i}
              variant="secondary"
              className="bg-yellow-500/20 border border-[#f7f595] bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-transparent leading-relaxe rounded-2xl px-4 py-2 hover:text-[#f7f595]"
            >
              {["Carson Credit", "Max rev/sleep", "DMI @ 3.5ko"][i]}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wallet