"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Section3: React.FC = () => {

  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="container  px-6 py-12 bg-[#1B1C1D] min-h-screen min-w-full flex items-center">
      <div className="flex flex-col md:flex-row w-full gap-12 items-center">
        {/* Left - Image */}
        <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center">
            <Image
              src="/image.jpg"
              alt="Trading Illustration"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col justify-center space-y-6">
            <h1
              className="font-serif text-4xl md:text-[2.8rem] font-medium bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-transparent leading-relaxe mt-4"
            >
              Seamless Trading for a Greener Future
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="text-[#cfcbbf] space-y-6">
                {/** Steps */}
                {[
                  {
                    title: "Register",
                    desc: "Create your Vectorium account in minutes with our user-friendly interface.",
                  },
                  {
                    title: "Fund",
                    desc: "Deposit crypto or fiat currency to start trading immediately.",
                  },
                  {
                    title: "Trade",
                    desc: "Buy, sell, or hold VCCs with real-time market data and advanced trading tools.",
                  },
                  {
                    title: "Impact",
                    desc: "Track your contribution to global carbon reduction efforts in real-time.",
                  },
                ].map((step, index) => (
                  <div key={index} className="text-xl font-raleway border-[#535455ff] border-l-8 pl-4 ml-3" 
                        style={{ marginLeft: `${(index + 1) * 25}px`}}
                  >
                    <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
                    <p className="text-xl">{step.desc}
                    </p>
                      
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Section3