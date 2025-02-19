"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Section2: React.FC = () => {
  return (
    <div className="w-full flex bg-gray-800 justify-center items-center text-center py-24">
      <div className="w-5/6">
        <div className="py-4">
          <p className="text-yellow-500 text-4xl">
            Unlock the Power of Voluntary Carbon Credits (VCCs)
          </p>
        </div>
        <div className="text-gray-200 py-6">
          <div className="flex flex-row space-x-4 text-start">
            {[
              {
                title: "Eco-Friendly Investment",
                description:
                  "VCCs represent measurable, verifiable emission reductions from certified climate action projects.",
              },
              {
                title: "Market Growth",
                description:
                  "The voluntary carbon market is projected to grow 15x by 2030, reaching $50+ billion in value.",
              },
              {
                title: "Tangible Impact",
                description:
                  "Each credit offsets one metric ton of carbon dioxide or equivalent greenhouse gases.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="flex flex-row space-x-3 p-0">
                  <div className="h-8 w-8 bg-gray-700 rounded-sm"></div>
                  <div>
                    <p className="text-2xl text-white">{item.title}</p>
                    <p className="text-lg pt-2 text-gray-300">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
