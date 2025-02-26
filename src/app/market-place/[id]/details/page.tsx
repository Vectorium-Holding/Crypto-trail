"use client";
import Navbar from "@/components/Navbar";
import TrendGraph from "@/components/TrendGraph";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

interface Props {
  id: string;
}

const section3Ref = React.useRef<HTMLDivElement>(null);
const section8Ref = React.useRef<HTMLDivElement>(null);

const collections = [
  {
    id: 1,
    name: "NFT #31",
    price: 0.09,
    imageUrl: "/carbon-credit-pic.jpg",
  },
  {
    id: 2,
    name: "NFT #238",
    price: 0.1,
    imageUrl: "/crypto-collection-image.jpg",
  },
  {
    id: 3,
    name: "NFT #223",
    price: 0.12,
    imageUrl: "/carbon-credit-pic.jpg",
  },
  {
    id: 4,
    name: "NFT #31",
    price: 0.09,
    imageUrl: "/crypto-collection-image.jpg",
  },
  {
    id: 5,
    name: "NFT #238",
    price: 0.1,
    imageUrl: "/carbon-credit-pic.jpg",
  },
  {
    id: 6,
    name: "NFT #223",
    price: 0.12,
    imageUrl: "/crypto-collection-image.jpg",
  },
  {
    id: 7,
    name: "NFT #31",
    price: 0.09,
    imageUrl: "/crypto-collection-image.jpg",
  },
  {
    id: 8,
    name: "NFT #238",
    price: 0.1,
    imageUrl: "/carbon-credit-pic.jpg",
  },
  {
    id: 9,
    name: "NFT #223",
    price: 0.12,
    imageUrl: "/crypto-collection-image.jpg",
  },
];

const tokenDetails = [
  {
    name: "tokenAddress",
    val: "FBVsbB...J7U",
  },
  {
    name: "owner",
    val: "8CTdQs...5uJ",
  },
  {
    name: "creatorFees",
    val: "2.5%",
  },
  {
    name: "marketplaceFees",
    val: "1.5%",
  },
  {
    name: "mutable",
    val: "yes",
  },
  {
    name: "tokenStandard",
    val: "Programmatic Non Fungible",
  },
];

const MarketPlaceDetails: React.FC<Props> = ({ id }) => {
  const [ID, setID] = useState<number>(0);
  const [isAttributesUp, setisAttributesUp] = useState<Boolean>(false);
  const [isDetailsUp, setIsDetailssUp] = useState<Boolean>(false);
  const [isTrendsGraphUp, setIsTrendsGraphUp] = useState<Boolean>(false);

  useEffect(() => {
    if (id) {
      setID(parseInt(id) - 1); // Convert string to number and adjust for zero-based index
    }
  }, [id]);

  return (
    <>
      <Navbar section8Ref={section8Ref} section3Ref={section3Ref} />
      <div className="flex items-start justify-start bg-gradient-to-br from-[#0b0b0b] via-[#212120] to-[#373636] px-10 py-52">
        <Image
          src={collections[ID]?.imageUrl}
          alt={collections[ID]?.name}
          width={450}
          height={0}
          className="rounded-2xl pr-10 shadow-md"
        />
        <div className="max-w-2xl rounded-2xl border-2 border-[#C4A44D] p-6 text-white shadow-lg shadow-[#626161]">
          <div className="flex flex-col space-y-4 px-6 text-white">
            <p className="text-4xl font-semibold">{collections[ID]?.name}</p>
            <p className="text-md">
              FBVsbBioqCYnGrS5d3pCiH8DKPtYkPGu57QUdywj6J7U
            </p>
            <Card className="rounded-xl border-gray-700 bg-gray-700 pt-4">
              <div className="grid grid-cols-2">
                <p className="text-md px-8">Price</p>
                <p className="text-md pl-44">Offer</p>
              </div>
              <CardContent>
                <div className="flex font-raleway text-lg font-semibold">
                  <Image
                    src="/solana-logo.png"
                    alt="Solana Logo"
                    width={30}
                    height={30}
                  />
                  {collections[ID]?.price}
                  <div className="grid grid-cols-2 gap-x-64">
                    <p className="p-1 text-sm text-gray-500">~ $14.27</p>
                    <p className="py-1 text-sm text-gray-500">No Offer</p>
                  </div>
                </div>
                <div className="flex justify-between pt-2">
                  <Button className="rounded-xl bg-white px-24 py-6 text-black hover:bg-white">
                    Buy
                  </Button>
                  <Button className="rounded-xl bg-white px-16 py-6 text-black hover:bg-white">
                    Place Offer
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col rounded-xl border-2 border-slate-900 bg-gradient-to-br from-[#0b0b0b] via-[#212120] to-[#373636]">
              <Button
                className="text-md flex rounded-xl bg-gray-700 py-6 pl-6 pr-32 hover:bg-gray-700"
                onClick={() => setisAttributesUp(!isAttributesUp)}
              >
                <p className="pr-60">Attributes</p>
                {isAttributesUp ? <ChevronUp /> : <ChevronDown />}
              </Button>
              {isAttributesUp ? (
                <div className="grid grid-cols-3 gap-6 p-4">
                  {[
                    { property: "Backgrounds", val: "Raf" },
                    { property: "Effects", val: "Y2K" },
                    { property: "Body", val: "Holo" },
                  ].map((elem, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-gray-600 p-4 text-center"
                    >
                      <p className="py-1 text-xs text-gray-400">
                        {elem.property}
                      </p>
                      <p className="text-sm text-white">{elem.val}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div></div>
              )}
            </Card>

            <Card className="flex flex-col rounded-xl border-2 border-slate-900 bg-gradient-to-br from-[#0b0b0b] via-[#212120] to-[#373636]">
              <Button
                className="text-md flex rounded-xl bg-gray-700 py-6 pl-6 pr-32 hover:bg-gray-700"
                onClick={() => setIsDetailssUp(!isDetailsUp)}
              >
                <p className="pr-60">Details</p>
                {isDetailsUp ? <ChevronUp /> : <ChevronDown />}
              </Button>
              {isDetailsUp ? (
                <div className="flex flex-col">
                  {tokenDetails.map((elem, index) => (
                    <div key={index} className="grid grid-cols-2 gap-8 p-4">
                      <p className="text-md p-1 text-white">{elem.name}</p>
                      <p className="p-1 text-sm text-white">{elem.val}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div></div>
              )}
            </Card>

            <Card className="flex flex-col rounded-xl border-2 border-slate-900 bg-gradient-to-br from-[#0b0b0b] via-[#212120] to-[#373636]">
              <Button
                className="text-md flex rounded-xl bg-gray-700 py-6 pl-6 pr-32 hover:bg-gray-700"
                onClick={() => setIsTrendsGraphUp(!isTrendsGraphUp)}
              >
                <p className="pr-60">Trends Graph</p>
                {isTrendsGraphUp ? <ChevronUp /> : <ChevronDown />}
              </Button>
              {isTrendsGraphUp ? <TrendGraph /> : <div></div>}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlaceDetails;
