"use client"
import React from 'react'

import { Label } from '../ui/label'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'

import { motion } from 'framer-motion'
import { Square } from 'lucide-react'

const Section2 = () => {
  return (
      <section className="min-w-full bg-[#1b1c1d] text-[#f2e782ff]">
          <div className="w-full h-full flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className='font-prata leading-tight mb-8'>
                    <Label className="block p-16 font-serif text-4xl md:text-[2.8rem] font-medium bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-transparent leading-relaxe mt-4">
                        Unlock the Power of Voluntary Carbon Credits (VCCs)
                    </Label>
                </div>
            </motion.div>
              <div className="font-prata mx-28 grid grid-cols-1 md:grid-cols-3 gap-8  ">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    <Card className="bg-transparent border-none">
                            <CardContent >
                                <CardTitle className="text-[23.75px] font-semibold text-[#cfcbbf] mb-4 flex"><Square color="#535455ff" fill="#535455ff" size="30" className='mt-1 mr-3'/> Eco-Friendly Investment</CardTitle>
                                <CardDescription className="text-[22px] text-[#cfcbbf]">VCCs represent measurable, verifiable emission reductions from certified climate action projects.</CardDescription>
                            </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <Card className="bg-transparent  rounded-2xl shadow-lg border-none">
                        <CardContent>
                        <CardTitle className="text-[23.75px] font-semibold text-[#cfcbbf] mb-4 flex"><Square color="#535455ff" fill="#535455ff" size="30" className='mt-1 mr-3'/>Market Growth</CardTitle>
                            <CardDescription className="text-[22px] text-[#cfcbbf]">The voluntary carbon market is projected to grow 15x by 2030, reaching $50+ billion in value.</CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4}}
                >
                    <Card className="bg-transparent  rounded-2xl shadow-lg border-none">
                        <CardContent >
                        <CardTitle className="text-[23.75px] font-semibold text-[#cfcbbf] mb-4 flex"><Square color="#535455ff" fill="#535455ff" size="30" className='mt-1 mr-3'/>Tangible Impact</CardTitle>
                            <CardDescription className="text-[22px] text-[#cfcbbf]">Each credit offsets one metric ton of carbon dioxide or equivalent greenhouse gases.</CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>
              </div>
          </div>
      </section>
  )
}

export default Section2