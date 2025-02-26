"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  params: {
    id: string; // Change to string since URL parameters are strings
  };
}

// ... collections and tokenDetails arrays remain the same ...

const MarketPlaceDetails = ({ params }: Props) => {
  const [ID, setID] = useState<number>(0); // Initialize with 0
  const [isAttributesUp, setisAttributesUp] = useState<Boolean>(false);
  const [isDetailsUp, setIsDetailssUp] = useState<Boolean>(false);

  useEffect(() => {
    if (params.id) {
      setID(parseInt(params.id) - 1); // Convert string to number and adjust for zero-based index
    }
  }, [params.id]);

  // ... rest of the component remains the same ...
};

export default MarketPlaceDetails;
