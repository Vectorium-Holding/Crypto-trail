"use client"
import React from 'react'

import { Label } from '../ui/label'

import { motion } from 'framer-motion'

const Section6 = () => {
  return (
      <section className="min-w-full bg-[#1b1c1d] text-[#f2e782ff] pb-8">
        <div className="w-full h-full flex flex-col">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className='font-prata p-32 leading-tight'>
                    <Label className="font-serif  text-9xl md:text-[2.8rem] font-medium bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text text-transparent leading-relaxe mt-4">
                        Empowering Individuals and Businesses to <br/> Offset Their Footprint
                    </Label>
                </div>
            </motion.div>
        </div>

        <div className='flex flex-row px-32'>
            <div className='flex flex-col items center text-left text-[#cfcbbf] font-raleway'>
                <div className='text-[20px] mt-2 font-semibold'>Calculate</div>
                <div className='text-[16px] mt-2 font-semibold'>Use our AI-powered carbon footprint calculator to assess your impact.</div>
            </div>

            <div className='text-gray text-xl bg-[#535455ff] p-11 text-[#cfcbbf] rounded-[110px] rounded-br-none font-raleway ml-14'>1</div>
            <div className='text-gray text-xl bg-[#535455ff] p-11 text-[#cfcbbf] font-raleway ml-2 rounded-[110px] rounded-bl-none'>2</div>

            <div className='flex flex-col items center text-left pl-16 text-[#cfcbbf] font-raleway'>
                <div className='text-[20px] mt-2 font-semibold'>Offset</div>
                <div className='text-[16px] mt-2 font-semibold'>Purchase the exact amount of VCCs needed to neutralize your emissions.</div>
            </div>
        </div>



        <div className='flex flex-row px-32'>
            <div className='flex flex-col items center text-left text-[#cfcbbf] font-raleway'>
                <div className='text-[20px] mt-2 font-semibold'>Share</div>
                <div className='text-[16px] mt-2 font-semibold'>Showcase your commitment to <br/>sustainability with shareable certificates and badges.</div>
            </div>

            <div className='text-gray text-xl bg-[#535455ff] p-11 text-[#cfcbbf] font-raleway ml-[149px] mt-2 rounded-l-[110px] rounded-br-[110px]'>4</div>
            <div className='text-gray text-xl bg-[#535455ff] p-11 text-[#cfcbbf] font-raleway ml-2 mt-2 rounded-[110px] rounded-tl-none'>3</div>

                <div className='flex flex-col items center text-left text-[#cfcbbf] font-raleway pl-16'>
                    <div className='text-[20px] mt-2 font-semibold'>Track</div>
                    <div className='text-[16px] mt-2 font-semibold'>Monitor your ongoing carbon neutrality status with our real-time dashboard.</div>
                </div>
        </div>
      </section>
  )
}

export default Section6