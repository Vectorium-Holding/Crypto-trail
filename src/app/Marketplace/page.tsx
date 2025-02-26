"use client";
import CarbonCreditsGraph from "@/components/CarbonCreditsGraph";
import CarbonCreditsGraph2 from "@/components/CarbonCreditsGraph2";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TrendGraph from "@/components/TrendGraph";
import Wallet from "@/components/Wallet";

const Marketplace = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="bg-gradient-to-br from-[#1e1e1e] via-[#3d2900] to-[#3d2900] pb-12">
        <Wallet />
        <TrendGraph />
        <CarbonCreditsGraph />
        <CarbonCreditsGraph2 />
      </div>
    </>
  );
};

export default Marketplace;
