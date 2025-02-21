import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Label } from './ui/label'

const Section2 = () => {
  return (
      <section className="min-w-full bg-[#1b1c1d] text-[#f2e782ff]">
          <div className="w-full h-full flex flex-col items-center">
              <div className='font-prata leading-tight mb-8'>
                  <Label className="text-[51px] block ">
                      Unlock the Power of Voluntary Carbon Credits (VCCs)
                  </Label>
              </div>
              <div className="font-prata mx-28 grid grid-cols-1 md:grid-cols-3 gap-8  ">
                  <Card className="bg-transparent border-none">
                      <CardContent >
                          <CardTitle className="text-[22.5px] font-semibold text-[#f2e782ff] mb-4">Eco-Friendly Investment</CardTitle>
                          <CardDescription className="text-[22px] text-[#cfcbbf]">VCCs represent measurable, verifiable emission reductions from certified climate action projects.</CardDescription>
                      </CardContent>
                  </Card>
                  <Card className="bg-transparent  rounded-2xl shadow-lg border-none">
                      <CardContent>
                          <CardTitle className="text-[22.5px] font-semibold text-[#f2e782ff] mb-4">Market Growth</CardTitle>
                          <CardDescription className="text-[22px] text-[#cfcbbf]">The voluntary carbon market is projected to grow 15x by 2030, reaching $50+ billion in value.</CardDescription>
                      </CardContent>
                  </Card>
                  <Card className="bg-transparent  rounded-2xl shadow-lg border-none">
                      <CardContent >
                          <CardTitle className="text-[22.5px] font-semibold text-[#f2e782ff] mb-4">Tangible Impact</CardTitle>
                          <CardDescription className="text-[22px] text-[#cfcbbf]">Each credit offsets one metric ton of carbon dioxide or equivalent greenhouse gases.</CardDescription>
                      </CardContent>
                  </Card>
              </div>
          </div>
      </section>
  )
}

export default Section2