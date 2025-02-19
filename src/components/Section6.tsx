import React from 'react'
import { Card, CardDescription, CardTitle } from './ui/card'
import { Label } from './ui/label'
import Image from 'next/image'
const Section6 = () => {
  return (
      <section className="max-w-[1035px] mx-auto">
          
          <Label className="text-[51px] text-[#f2e782ff] font-prata leading-tight text-center">
              Empowering Individuals and Businesses to Offset Their Footprint
          </Label>

          
          <div className="grid grid-cols-2 gap-x-80 gap-y-14 mt-12 relative text-[#cfcbbf] mb-14">
              
              <div className="text-right">
                  <h3 className="text-lg font-prata text-[22.5px]">Calculate</h3>
                  <p className="text-[#cfcbbf] text-[18px] font-raleway">Use our AI-powered carbon footprint calculator to assess your impact.</p>
              </div>

              
              <div className="text-left">
                  <h3 className="text-lg font-prata text-[22.5px]">Offset</h3>
                  <p className="text-[#cfcbbf] text-[18px]">Purchase the exact amount of VCCs needed to neutralize your emissions.</p>
              </div>

             
              <div className="text-right">
                  <h3 className="text-lg font-prata text-[22.5px]">Share</h3>
                  <p className="text-[#cfcbbf] text-[18px]">Showcase your commitment to sustainability with shareable certificates and badges.</p>
              </div>

              
              <div className="text-left">
                  <h3 className="text-lg font-prata text-[22.5px]">Track</h3>
                  <p className="text-[#cfcbbf] text-[18px]">Monitor your ongoing carbon neutrality status with our real-time dashboard.</p>
              </div>

             
              <div className="absolute inset-0 flex items-center justify-center pb-2">
                  <Image src="/image.png" alt="Decorative" width={300} height={300} /> 
              </div>
          </div>
      </section>
  )
}

export default Section6
