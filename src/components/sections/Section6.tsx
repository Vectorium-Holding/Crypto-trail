"use client";
import React from "react";

import { Label } from "../ui/label";

import { motion } from "framer-motion";

const Section6 = () => {
  return (
    <section className="min-w-full bg-[#1b1c1d] pb-8 text-[#f2e782ff]">
      <div className="flex h-full w-full flex-col">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-32 font-prata leading-tight">
            <Label className="leading-relaxe mt-4 bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text font-serif text-9xl font-medium text-transparent md:text-[2.8rem]">
              Empowering Individuals and Businesses to <br /> Offset Their
              Footprint
            </Label>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-row px-32">
        <div className="items center flex flex-col text-left font-raleway text-[#cfcbbf]">
          <div className="mt-2 text-[20px] font-semibold">Calculate</div>
          <div className="mt-2 text-[16px] font-semibold">
            Use our AI-powered carbon footprint calculator to assess your
            impact.
          </div>
        </div>

        <div className="text-gray ml-14 rounded-[110px] rounded-br-none bg-[#535455ff] p-11 font-raleway text-xl text-[#cfcbbf]">
          1
        </div>
        <div className="text-gray ml-2 rounded-[110px] rounded-bl-none bg-[#535455ff] p-11 font-raleway text-xl text-[#cfcbbf]">
          2
        </div>

        <div className="items center flex flex-col pl-16 text-left font-raleway text-[#cfcbbf]">
          <div className="mt-2 text-[20px] font-semibold">Offset</div>
          <div className="mt-2 text-[16px] font-semibold">
            Purchase the exact amount of VCCs needed to neutralize your
            emissions.
          </div>
        </div>
      </div>

      <div className="flex flex-row px-32">
        <div className="items center flex flex-col text-left font-raleway text-[#cfcbbf]">
          <div className="mt-2 text-[20px] font-semibold">Share</div>
          <div className="mt-2 text-[16px] font-semibold">
            Showcase your commitment to <br />
            sustainability with shareable certificates and badges.
          </div>
        </div>

        <div className="text-gray ml-[149px] mt-2 rounded-l-[110px] rounded-br-[110px] bg-[#535455ff] p-11 font-raleway text-xl text-[#cfcbbf]">
          4
        </div>
        <div className="text-gray ml-2 mt-2 rounded-[110px] rounded-tl-none bg-[#535455ff] p-11 font-raleway text-xl text-[#cfcbbf]">
          3
        </div>

        <div className="items center flex flex-col pl-16 text-left font-raleway text-[#cfcbbf]">
          <div className="mt-2 text-[20px] font-semibold">Track</div>
          <div className="mt-2 text-[16px] font-semibold">
            Monitor your ongoing carbon neutrality status with our real-time
            dashboard.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
