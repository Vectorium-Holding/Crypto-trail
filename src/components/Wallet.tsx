"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Wallet = () => {
  return (
    <div className="mx-12 -mt-12 flex h-1/6 min-h-screen w-3/5 items-center justify-center bg-gradient-to-br from-[#1e1e1e] via-[#3d2900] to-[#3d2900] px-6">
      <div className="grid w-full grid-cols-1 gap-4">
        {/* Buttons Row */}
        <div className="mb-6 flex flex-wrap gap-2">
          {[...Array(6)].map((_, i) => (
            <Button
              key={i}
              variant="outline"
              className="leading-relaxe rounded-2xl border border-[#f7f595] bg-yellow-500/20 bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text px-2 py-1 text-transparent hover:text-[#f7f595]"
            >
              {["Carson Credit", "Max rev/sleep", "DMI @ 3.5ko"][i % 3]}
            </Button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-4 bg-gradient-to-br from-[#1e1e1e] via-[#3d2900] to-[#3d2900] md:flex-row">
          {/* Left Card */}
          <Card className="flex flex-1 items-center rounded-2xl border-yellow-500/30 bg-yellow-500/10 p-4 shadow-lg shadow-yellow-500/20">
            <div className="-mt-8 mr-4 rounded-full bg-yellow-500/20">
              <Image
                src="/bitcoin.jpg"
                alt="Currency"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>

            <CardContent className="flex-grow space-y-2">
              <h1 className="text-4xl font-bold text-yellow-500">
                <span className="text-white">$000,</span>350,000
              </h1>
              <p className="text-sm text-yellow-500/80">Face/Up (3.1kV)</p>

              <div className="flex space-y-1">
                <div className="mr-8 mt-1 justify-center text-white">
                  ￥: 864,798
                </div>
                <div className="justify-center text-white">￥: 81.89%</div>
              </div>
            </CardContent>
          </Card>

          {/* Right Card */}
          <Card className="w-full rounded-2xl border-yellow-500/30 bg-yellow-500/10 p-4 shadow-lg shadow-yellow-500/20 md:w-[300px]">
            <div className="mb-2 rounded-full">
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
                <h2 className="ml-4 text-lg font-semibold text-white">
                  Carbon Credit
                </h2>

                <div className="ml-4 flex">
                  <span className="mr-4 text-sm text-white">Max rev/sleep</span>
                  <span className="text-xs text-white">DMI @ 3.5ko</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Buttons */}
        <div className="-mb-72 mt-8 flex flex-wrap gap-2">
          {[...Array(3)].map((_, i) => (
            <Button
              key={i}
              variant="secondary"
              className="leading-relaxe rounded-2xl border border-[#f7f595] bg-yellow-500/20 bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text px-4 py-2 text-transparent hover:text-[#f7f595]"
            >
              {["Carson Credit", "Max rev/sleep", "DMI @ 3.5ko"][i]}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
