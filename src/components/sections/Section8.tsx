"use client"
import React from 'react'

import { Label } from '../ui/label'

import { motion } from 'framer-motion'

const Section8 = () => {
  return (
      <section className="min-w-full text-black bg-[#f2e782ff]">
        <div className="w-full h-full flex flex-col">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className='font-raleway font-400 p-32 leading-tight'>
                    <Label className="font-serif  text-9xl md:text-[2.8rem] font-medium leading-none">
                        Join the Vectorium Movement: Invest in a <br/> Greener Tomorrow
                    </Label>
                </div>
            </motion.div>
        </div>

        <div className="flex flex-col items-start pl-[300px] pb-4">

            {/* Triangle */}
            <div className='flex flex-row'>
                <div className="w-0 h-0 border-l-[60px] border-r-[60px] border-b-[110px] border-solid border-l-transparent border-r-transparent border-b-[#555] ml-[75px]">
                    <div className='text-xl text-raleway text-[#cfcbbf] my-12'>
                        1
                    </div>
                </div>
                <div className='flex flex-col text-black mt-8 border-b ml-2'>
                    <div className='font-normal text-2xl font-prata'>Trade</div>
                    <div className='font-normal text-lg'>Buy and sell VCCs on our secure platform.</div>
                </div>
            </div>
            {/* Trapezoid 1 */}
            <div className='flex flex-row'>
                <div className="w-[230px] h-0 border-b-[100px] border-l-[55px] mt-2 border-r-[55px] border-solid border-l-transparent border-r-transparent border-b-[#555] ml-[20px]">
                    <div className='text-xl text-raleway text-[#cfcbbf] my-10 text-center'>
                        2
                    </div>
                </div>
                <div className='flex flex-col text-black mt-8 border-b ml-2'>
                        <div className='font-normal text-2xl font-prata'>Offset</div>
                        <div className='font-normal text-lg'>Neutralize your carbon footprint with ease.</div>
                </div>
            </div>
            {/* Trapezoid 2 */}
            <div className='flex flex-row'>
                <div className="w-[340px] h-0 border-b-[100px] border-l-[55px] mt-2 border-r-[55px] border-solid border-l-transparent border-r-transparent border-b-[#555] ml-[-35px]">
                    <div className='text-xl text-raleway text-[#cfcbbf] my-10 text-center'>
                        3
                    </div>
                </div>
                <div className='flex flex-col text-black mt-8 border-b ml-2'>
                        <div className='font-normal text-2xl font-prata'>Impact</div>
                        <div className='font-normal text-lg'>Support verified climate action projects globally.</div>
                </div>
            </div>
            {/* Trapezoid 3 */}
            <div className='flex flex-row'>
                <div className="w-[450px] h-0 border-b-[100px] border-l-[55px] mt-2 border-r-[55px] border-solid border-l-transparent border-r-transparent border-b-[#555] ml-[-90px]">
                    <div className='text-xl text-raleway text-[#cfcbbf] my-10 text-center'>
                            4
                    </div>
                </div>
                <div className='flex flex-col text-black mt-8 ml-2'>
                        <div className='font-normal text-2xl font-prata'>Grow</div>
                        <div className='font-normal text-lg'>Participate in the rapidly expanding carbon market.</div>
                </div>
            </div>
        </div>

        <div className='pl-[210px] text-black pb-24 mt-2 font-raleway font-normal text-lg'>Be part of the solution to climate change. Join Vectorium today and trade for a sustainable future.</div>
      </section>
  )
}

export default Section8