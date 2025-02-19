import React from 'react'
import { Label } from './ui/label'
import Image from 'next/image'

const Section4 = () => {
  return (
    <section className="bg-[#1b1c1d] w-full text-gray-50">
        <div className="w-full flex">
            <div className='w-2/5 p-5 h-full w-full'>
                <Image
                src="/section4img.png"
                width={500}
                height={500}
                alt="section 4 image"
                />
            </div>
            <div className='w-3/5 w-full ml-[-120] p-[5px] mt-20'>
                <div>
                    <h1 className='text-[45px] text-wrap text-[#C0912E]'>
                        Blockchain-Secured Transactions, Unparalleled Transparency
                    </h1>
                </div>
                <div id='Icon-and-text-section' className='w-full flex grid grid-cols-3 place-items-stretch gap-5 mr-5'> 
                    <div id='Icon-and-text-card-1' className='pt-5'> 
                        <div>
                            <Image
                            src="/colorShield.svg"
                            width={60}
                            height={60}
                            alt="section 4 image"
                            />
                            <h1 className='text-[30px] text-wrap pt-5' >
                                Enhanced Security
                            </h1>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[20px] text-wrap text-left'>
                                Military-grade encryption and decentralized ledger technology protect your assets and transactions.
                            </p>
                        </div>
                    </div>

                    <div id='Icon-and-text-card-2' className='pt-5'>
                        <div>
                            <Image
                            src="/colorMagnify.svg"
                            width={60}
                            height={60}
                            alt="section 4 image"
                            className='text-[#f2e782ff]'
                            />
                            <h1 className='text-[30px] text-wrap pt-5'>
                            Full Transparency
                            </h1>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[20px] text-wrap text-left'>
                                Every transaction is recorded on the blockchain, ensuring complete auditability and traceability.
                            </p>
                        </div>
                    </div>

                    <div id='Icon-and-text-card-3' className='pt-5'>
                        <div>
                            <Image
                            src="/aiSpeedIcon1.svg"
                            width={60}
                            height={60}
                            alt="section 4 image"
                            className=''
                            />
                            <h1 className='text-[30px] pt-5'>
                            Real-Time Verification
                            </h1>
                        </div>
                        <div className='mt-5'>
                            <p className='text-[20px] text-wrap text-left'>
                                Instant confirmation of trades and immediate updates to your carbon offset portfolio.
                            </p>
                        </div>
                    </div>
                </div> 
            </div>
       </div>
    </section>
  )
}

export default Section4