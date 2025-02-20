import React from "react";
import Image from "next/image";

const Section4 = () => {
  return (
    <section className="bg-[#1b1c1d] w-full text-gray-50 py-10">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-2/5 p-5 flex justify-center">
          <Image
            src="/section4img.png"
            width={500}
            height={500}
            alt="Blockchain transparency"
            className="object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-3/5 px-5 md:px-10">
          <h1 className="text-[45px] text-[#C0912E] font-bold">
            Blockchain-Secured Transactions, Unparalleled Transparency
          </h1>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
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
              <div key={index} className="flex flex-col items-left text-center">
                <Image
                  src={feature.icon}
                  width={60}
                  height={60}
                  alt={feature.title}
                  className="mb-3"
                />
                <h2 className="text-[30px] font-semibold text-left">{feature.title}</h2>
                <p className="text-[20px] mt-2 text-left">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
