import React from 'react'
import { Label } from './ui/label'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='w-full flex h-20 place-items-stretch fixed relative gap-10 bg-[#1b1c1d]'>
            <div className='max-w-1/10 m-5'>
            <Link
            href={{
                pathname: '/',
                query: { name: 'home' },
              }}
            >
            <Image
                src="/vercel.svg"
                width={50}
                height={50}
                alt="section 4 image"
                />
            </Link>
            </div>
            {/* <div className='w-full max-w-8/10 m-5 flex gap-5 grid grid-cols-6 place-items-stretch justify-center'> */}
            <div className='w-full max-w-5/10 m-5 px-20 flex gap-2 grid grid-cols-6 justify-center text-[#C0912E] text-center'>
                <Link
                href={{
                    pathname: '/',
                    query: { name: 'Home' },
                  }}
                >
                <div className='max-w-1/6'>Home</div>
                </Link>

                <Link
                href={{
                    pathname: '/How-It-Works',
                    query: { name: 'How It Works' },
                  }}
                >
                <div className='max-w-1/6'>How It Works</div>
                </Link>

                <Link
                href={{
                    pathname: '/Support',
                    query: { name: 'Support' },
                  }}
                >
                <div className='max-w-1/6'>Support</div>
                </Link>

                <Link
                href={{
                    pathname: '/Marketplace',
                    query: { name: 'Marketplace' },
                  }}
                >
                <div className='max-w-1/6'>Marketplace</div>
                </Link>

                <Link
                href={{
                    pathname: '/About',
                    query: { name: 'About' },
                  }}
                >
                <div className='max-w-1/6'>About</div>
                </Link>

                <Link
                href={{
                    pathname: '/Search',
                    query: { name: 'Search' },
                  }}
                >
                <div className='max-w-1/6'>Search</div>
                </Link>

            </div>
            <div className='max-w-1/10 m-5'>
            <Link
                href={{
                    pathname: '/Search',
                    query: { name: 'Search' },
                  }}
            >
            <Image
                src="/globe.svg"
                width={50}
                height={50}
                alt="section 4 image"
            />
            </Link> 
            </div>
        </div>
    )
}

export default Navbar

