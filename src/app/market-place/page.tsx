"use client";
import Navbar from "@/components/Navbar";
import CarbonCreditsPage from "../pages/CarbonCreditsPage";
import ButtonsTray from "@/components/ButtonsTray";
import { useState } from "react";

const MarketPlace = () => {
  const [isNFTFlag, setIsNFTFlag] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#0b0b0b] via-[#212120] to-[#373636] py-52">
        <div className="rounded-2xl border-2 border-[#C4A44D] p-6 shadow-lg shadow-[#626161]">
          <ButtonsTray setIsNFTFlag={setIsNFTFlag} isNFTFlag={false} />
          {isNFTFlag && <CarbonCreditsPage />}
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
