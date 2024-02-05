"use client"

import React from 'react'
import { Abyssinica_SIL } from 'next/font/google'
const inter = Abyssinica_SIL({ subsets: ['latin'], weight: '400' })

function JoinUs() {


    return (
        <div className='fixed lg:bottom-24 lg:right-32 bottom-10 right-5 animate-bounce ' >

            <button className={`${inter.className}  text-center px-5 py-2 rounded-full bg-[#EC008D] md:text-sm text-white `}
                // style={{ fontFamily: `${inter.fontFamily} !important` }}
                onClick={() => window.location.href = 'https://wa.me/918714157908/?text=Hi, I would like to keep in touch with you'}
            >
                Join with Us
            </button>
        </div>
    )
}

export default JoinUs