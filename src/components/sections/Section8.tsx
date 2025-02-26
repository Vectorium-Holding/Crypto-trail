"use client";
import React, { forwardRef } from "react";

import { Label } from "../ui/label";

import { motion } from "framer-motion";


  const Section8 = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section ref={ref} className="min-w-full bg-[#f2e782ff] text-black">
      <div className="flex h-full w-full flex-col">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-400 p-32 font-raleway leading-tight">
            <Label className="font-serif text-9xl font-medium leading-none md:text-[2.8rem]">
              Join the Vectorium Movement: Invest in a <br /> Greener Tomorrow
            </Label>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-start pb-4 pl-[300px]">
        {/* Triangle */}
        <div className="flex flex-row">
          <div className="ml-[75px] h-0 w-0 border-b-[110px] border-l-[60px] border-r-[60px] border-solid border-b-[#555] border-l-transparent border-r-transparent">
            <div className="text-raleway my-12 text-xl text-[#cfcbbf]">1</div>
          </div>
          <div className="ml-2 mt-8 flex flex-col border-b text-black">
            <div className="font-prata text-2xl font-normal">Trade</div>
            <div className="text-lg font-normal">
              Buy and sell VCCs on our secure platform.
            </div>
          </div>
        </div>
        {/* Trapezoid 1 */}
        <div className="flex flex-row">
          <div className="ml-[20px] mt-2 h-0 w-[230px] border-b-[100px] border-l-[55px] border-r-[55px] border-solid border-b-[#555] border-l-transparent border-r-transparent">
            <div className="text-raleway my-10 text-center text-xl text-[#cfcbbf]">
              2
            </div>
          </div>
          <div className="ml-2 mt-8 flex flex-col border-b text-black">
            <div className="font-prata text-2xl font-normal">Offset</div>
            <div className="text-lg font-normal">
              Neutralize your carbon footprint with ease.
            </div>
          </div>
        </div>
        {/* Trapezoid 2 */}
        <div className="flex flex-row">
          <div className="ml-[-35px] mt-2 h-0 w-[340px] border-b-[100px] border-l-[55px] border-r-[55px] border-solid border-b-[#555] border-l-transparent border-r-transparent">
            <div className="text-raleway my-10 text-center text-xl text-[#cfcbbf]">
              3
            </div>
          </div>
          <div className="ml-2 mt-8 flex flex-col border-b text-black">
            <div className="font-prata text-2xl font-normal">Impact</div>
            <div className="text-lg font-normal">
              Support verified climate action projects globally.
            </div>
          </div>
        </div>
        {/* Trapezoid 3 */}
        <div className="flex flex-row">
          <div className="ml-[-90px] mt-2 h-0 w-[450px] border-b-[100px] border-l-[55px] border-r-[55px] border-solid border-b-[#555] border-l-transparent border-r-transparent">
            <div className="text-raleway my-10 text-center text-xl text-[#cfcbbf]">
              4
            </div>
          </div>
          <div className="ml-2 mt-8 flex flex-col text-black">
            <div className="font-prata text-2xl font-normal">Grow</div>
            <div className="text-lg font-normal">
              Participate in the rapidly expanding carbon market.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 pb-24 pl-[210px] font-raleway text-lg font-normal text-black">
        Be part of the solution to climate change. Join Vectorium today and
        trade for a sustainable future.
      </div>
    </section>
  );
});

export default Section8;
