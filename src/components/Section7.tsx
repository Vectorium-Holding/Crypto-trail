import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
const Section7 = () => {
<!--     return (
        <section className='max-w-[1035px]'>
            <Label className="text-[51px] text-[#f2e782ff] font-prata leading-tight">
                Leveraging Crypto Finance for Sustainable Impact
            </Label>
            <div className='text-[#cfcbbf] grid grid-cols-1 md:grid-cols-2 gap-4 text-center'>
                <Card className="border-none bg-transparent text-[#cfcbbf]"> -->
  return (
    <section className="min-w-full flex items-center bg-[#1b1c1d] pt-10 text-[#f2e782ff]">
      <div className='w-full h-full flex flex-col items-center'>
        <div className='font-prata leading-tight mb-4'>

          <Label className="text-[51px] block">
            Leveraging Crypto Finance for Sustainable Impact
          </Label>
          {/* <Label className="text-[45px]"> Impact </Label> */}
        </div>
        <div className='flex items-center'>
          <Card className="border-none bg-transparent">
            <CardHeader className="text-center text-[#cfcbbf]">
              <CardTitle className="text-[59.4px] font-prata">24/7</CardTitle>
              <CardDescription className="text-[22.5px] font-prata">Always Open</CardDescription>
              <CardDescription className="text-[18px] font-raleway">Trade carbon credits around the clock, unlike traditional markets.</CardDescription>
            </CardHeader>

          </Card>

                    <CardTitle className="text-[59.4px] font-prata">24/7</CardTitle>
                    <CardDescription className="text-[22.5px] font-prata text-inherit">Always Open</CardDescription>
                    <CardDescription className="text-[18px] font-raleway text-inherit">Trade carbon credits around the clock, unlike traditional markets.</CardDescription>


                </Card>
                <Card className="border-none bg-transparent text-[#cfcbbf]">

                    <CardTitle className="text-[59.4px] font-prata">0%</CardTitle>
                    <CardDescription className="text-[22.5px] font-prata text-inherit">Zero Fees</CardDescription>
                    <CardDescription className="text-[18px] font-raleway text-inherit">Enjoy fee-free trading for the first 6 months after launch.</CardDescription>

                </Card>
                <Card className="border-none bg-transparent text-[#cfcbbf]">

                    <CardTitle className="text-[59.4px] font-prata">100+</CardTitle>
                    <CardDescription className="text-[22.5px] font-prata text-inherit">Cryptocurrencies</CardDescription>
                    <CardDescription className="text-[18px] font-raleway text-inherit">Use a wide range of cryptocurrencies to purchase VCCs.</CardDescription>

                </Card>
                <Card className="border-none bg-transparent text-[#cfcbbf]">

                    <CardTitle className="text-[59.4px] font-prata">5min</CardTitle>
                    <CardDescription className="text-[22.5px] font-prata text-inherit">Quick Setup</CardDescription>
                    <CardDescription className="text-[18px] font-raleway text-inherit">Start trading in minutes with our streamlined onboarding process.</CardDescription>

                </Card>
            </div>
        </section>
    )
}

export default Section7
