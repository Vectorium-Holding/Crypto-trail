"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <section className="bg-[#1b1c1d] w-full text-gray-50 py-10 flex">
      <div className="flex flex-col md:flex-row items-center">
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
        <div className="md:w-3/5 px-5 md:px-10 -mt-20">
          <h1 className="font-serif text-4xl md:text-[2.8rem] font-medium bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-transparent leading-relaxe">
            Blockchain-Secured Transactions, Unparalleled Transparency
          </h1>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[#cfcbbf] gap-6 mt-10">
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
              <div key={index} className="flex flex-col items-left text-center text-xl font-raleway ">
                <Image
                  src={feature.icon}
                  width={60}
                  height={60}
                  alt={feature.title}
                  className="mb-3"
                />
                <h2 className="text-[30px] mt-2 font-semibold text-left">{feature.title}</h2>
                <p className="text-[20px] mt-6 text-left">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
