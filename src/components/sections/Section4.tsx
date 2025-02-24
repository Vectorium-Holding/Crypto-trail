"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <section className="flex w-full bg-[#1b1c1d] py-10 text-gray-50">
      <div className="flex flex-col items-center md:flex-row">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="ml-6 flex justify-center">
            <Image
              src="/section4img.png"
              width={450}
              height={250}
              alt="Blockchain transparency"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <div className="-mt-20 px-5 md:w-3/5 md:px-10">
          <h1 className="leading-relaxe bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text font-serif text-4xl font-medium text-transparent md:text-[2.8rem]">
            Blockchain-Secured Transactions, Unparalleled Transparency
          </h1>

          {/* Feature Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 text-[#cfcbbf] md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "/colorShield.svg",
                title: "Enhanced Security",
                text: "Military-grade encryption and decentralized ledger technology protect your assets and transactions.",
              },
              {
                icon: "/colorMagnify.svg",
                title: "Full Transparency",
                text: "Every transaction is recorded on the blockchain, ensuring complete auditability and traceability.",
              },
              {
                icon: "/aiSpeedIcon1.svg",
                title: "Real-Time Verification",
                text: "Instant confirmation of trades and immediate updates to your carbon offset portfolio.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="items-left flex flex-col text-center font-raleway text-xl"
              >
                <Image
                  src={feature.icon}
                  width={60}
                  height={60}
                  alt={feature.title}
                  className="mb-3"
                />
                <h2 className="mt-2 text-left text-[30px] font-semibold">
                  {feature.title}
                </h2>
                <p className="mt-6 text-left text-[20px]">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
