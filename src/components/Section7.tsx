import React from 'react'
import { Label } from './ui/label'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

const Section7 = () => {
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



          <Card className="flex flex-col items-center border-none bg-transparent">
            <CardHeader className="text-center text-[#cfcbbf]">
              <CardTitle className="text-[59.4px] font-prata">0%</CardTitle>
              <CardDescription className="text-[22.5px] font-prata">Zero Fees</CardDescription>
              <CardDescription className="text-[18px] font-raleway">Enjoy fee-free trading for the first 6 months after launch.</CardDescription>
            </CardHeader>
          </Card>

        </div>

        <div className='flex items-center'>
          <Card className="flex flex-col items-center border-none bg-transparent">
            <CardHeader className="text-center text-[#cfcbbf]">
              <CardTitle className="text-[59.4px] font-prata">100+</CardTitle>
              <CardDescription className="text-[22.5px] font-prata">Cryptocurrencies</CardDescription>
              <CardDescription className="text-[18px] font-raleway">Use a wide range of cryptocurrencies to purchase VCCs.</CardDescription>
            </CardHeader>
          </Card>


          <Card className="flex flex-col items-center border-none bg-transparent">
            <CardHeader className="text-center text-[#cfcbbf]">
              <CardTitle className="text-[59.4px] font-prata">5min</CardTitle>
              <CardDescription className="text-[22.5px] font-prata">Quick Setup</CardDescription>
              <CardDescription className="text-[18px] font-raleway">Start trading in minutes with our streamlined onboarding process.</CardDescription>
            </CardHeader>
          </Card>

        </div>

      </div>

    </section>
  )
}

export default Section7
