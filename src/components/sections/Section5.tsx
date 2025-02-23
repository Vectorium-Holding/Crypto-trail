"use client"
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Label } from '../ui/label'
import { motion } from 'framer-motion'

const Section5 = () => {
  return (
      <section className="min-w-full bg-[#1b1c1d] text-[#f2e782ff] pt-16">
          <div className="w-full h-full flex flex-col items-center pt-4">
            <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            >
                <div className='font-prata leading-tight mb-8'>
                    <Label className="font-serif text-4xl md:text-[2.8rem] font-medium bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-transparent leading-relaxe block ">
                        Democratizing Access to the Carbon Offset Market
                    </Label>
                    {/* <Label className="text-[45px]"> Market </Label> */}
                </div>
            </motion.div>
              <div className="font-prata mx-20 grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="bg-transparent border-none">
                        <CardContent >
                            <CardTitle className="text-[20.5px] font-semibold bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-transparent leading-relaxe mb-4">For Individuals</CardTitle>
                            <CardDescription className="text-[22px] text-[#cfcbbf]">Invest in a sustainable future with as little as $10. Our fractional credit system allows you to participate in the carbon market regardless of your budget.</CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="bg-transparent  rounded-2xl shadow-lg border-none">
                        <CardContent>
                            <CardTitle className="text-[20.5px] font-semibold bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-transparent leading-relaxe mb-4">For Businesses</CardTitle>
                            <CardDescription className="text-[22px] text-[#cfcbbf]">Easily integrate carbon offsetting into your corporate sustainability strategy. Our API and bulk trading options cater to businesses of all sizes.</CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="bg-transparent  rounded-2xl shadow-lg border-none">
                        <CardContent >
                            <CardTitle className="text-[20.5px] font-semibold bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-transparent leading-relaxe mb-4">For Project Developers</CardTitle>
                            <CardDescription className="text-[22px] text-[#cfcbbf]">List your certified carbon reduction projects on our platform to gain access to a global network of environmentally conscious investors.</CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>
              </div>
          </div>
      </section>
  )
}

export default Section5
