import React from "react";
import { Label } from "../ui/label";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const Section7 = () => {
  return (
    <section className="flex min-w-full items-center bg-[#1b1c1d] pb-8 pt-10 text-[#f2e782ff]">
      <div className="flex h-full w-full flex-col items-center">
        <div className="mb-4 font-prata leading-tight">
          <Label className="block text-[51px]">
            Leveraging Crypto Finance for Sustainable Impact
          </Label>
          {/* <Label className="text-[45px]"> Impact </Label> */}
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row">
            <Card className="border-none bg-transparent">
              <CardHeader className="text-center text-[#cfcbbf]">
                <CardTitle className="font-prata text-[59.4px]">24/7</CardTitle>
                <CardDescription className="font-prata text-[22.5px]">
                  Always Open
                </CardDescription>
                <CardDescription className="font-raleway text-[18px]">
                  Trade carbon credits around the clock, unlike traditional
                  markets.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none bg-transparent text-[#cfcbbf]">
              <CardHeader className="text-center text-[#cfcbbf]">
                <CardTitle className="font-prata text-[59.4px]">0%</CardTitle>
                <CardDescription className="font-prata text-[22.5px] text-inherit">
                  Zero Fees
                </CardDescription>
                <CardDescription className="font-raleway text-[18px] text-inherit">
                  Enjoy fee-free trading for the first 6 months after launch.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex flex-row">
            <Card className="border-none bg-transparent text-[#cfcbbf]">
              <CardHeader className="text-center text-[#cfcbbf]">
                <CardTitle className="font-prata text-[59.4px]">100+</CardTitle>
                <CardDescription className="font-prata text-[22.5px] text-inherit">
                  Cryptocurrencies
                </CardDescription>
                <CardDescription className="font-raleway text-[18px] text-inherit">
                  Use a wide range of cryptocurrencies to purchase VCCs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none bg-transparent text-[#cfcbbf]">
              <CardHeader className="text-center text-[#cfcbbf]">
                <CardTitle className="font-prata text-[59.4px]">5min</CardTitle>
                <CardDescription className="font-prata text-[22.5px] text-inherit">
                  Quick Setup
                </CardDescription>
                <CardDescription className="font-raleway text-[18px] text-inherit">
                  Start trading in minutes with our streamlined onboarding
                  process.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
