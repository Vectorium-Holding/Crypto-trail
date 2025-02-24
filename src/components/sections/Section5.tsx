"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Label } from "../ui/label";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <section className="min-w-full bg-[#1b1c1d] pt-16 text-[#f2e782ff]">
      <div className="flex h-full w-full flex-col items-center pt-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 font-prata leading-tight">
            <Label className="leading-relaxe block bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text font-serif text-4xl font-medium text-transparent md:text-[2.8rem]">
              Democratizing Access to the Carbon Offset Market
            </Label>
            {/* <Label className="text-[45px]"> Market </Label> */}
          </div>
        </motion.div>
        <div className="mx-20 mt-6 grid grid-cols-1 gap-8 font-prata md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none bg-transparent">
              <CardContent>
                <CardTitle className="leading-relaxe mb-4 bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-[20.5px] font-semibold text-transparent">
                  For Individuals
                </CardTitle>
                <CardDescription className="text-[22px] text-[#cfcbbf]">
                  Invest in a sustainable future with as little as $10. Our
                  fractional credit system allows you to participate in the
                  carbon market regardless of your budget.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-2xl border-none bg-transparent shadow-lg">
              <CardContent>
                <CardTitle className="leading-relaxe mb-4 bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-[20.5px] font-semibold text-transparent">
                  For Businesses
                </CardTitle>
                <CardDescription className="text-[22px] text-[#cfcbbf]">
                  Easily integrate carbon offsetting into your corporate
                  sustainability strategy. Our API and bulk trading options
                  cater to businesses of all sizes.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-2xl border-none bg-transparent shadow-lg">
              <CardContent>
                <CardTitle className="leading-relaxe mb-4 bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-[20.5px] font-semibold text-transparent">
                  For Project Developers
                </CardTitle>
                <CardDescription className="text-[22px] text-[#cfcbbf]">
                  List your certified carbon reduction projects on our platform
                  to gain access to a global network of environmentally
                  conscious investors.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
