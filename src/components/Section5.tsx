import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Label } from './ui/label'

const Section5 = () => {
    return (
        <section className='max-w-[1035px]'>
            <Label className="text-[51px] font-prata leading-tight mb-8 text-[#f2e782ff]">
                Democratizing Access to the Carbon Offset Market
            </Label>

            <div className="font-prata grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <Card className="bg-transparent border-none">
                    <CardContent className='px-0'>
                        <CardTitle className="text-[22.5px] font-semibold text-[#f2e782ff] mb-4">For Individuals</CardTitle>
                        <CardDescription className="text-[22px] text-[#cfcbbf]">Invest in a sustainable future with as little as $10. Our fractional credit system allows you to participate in the carbon market regardless of your budget.</CardDescription>
                    </CardContent>
                </Card>
                <Card className="bg-transparent  rounded-2xl shadow-lg border-none">
                    <CardContent className='px-0'>
                        <CardTitle className="text-[22.5px] font-semibold text-[#f2e782ff] mb-4">For Businesses</CardTitle>
                        <CardDescription className="text-[22px] text-[#cfcbbf]">Easily integrate carbon offsetting into your corporate sustainability strategy. Our API and bulk trading options cater to businesses of all sizes.</CardDescription>
                    </CardContent>
                </Card>
                <Card className="bg-transparent  rounded-2xl shadow-lg border-none">
                    <CardContent className='px-0'>
                        <CardTitle className="text-[22.5px] font-semibold text-[#f2e782ff] mb-4">For Project Developers</CardTitle>
                        <CardDescription className="text-[22px] text-[#cfcbbf]">List your certified carbon reduction projects on our platform to gain access to a global network of environmentally conscious investors.</CardDescription>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Section5
