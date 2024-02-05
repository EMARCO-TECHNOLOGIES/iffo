import React from 'react'

function WhoWeAre() {
    return (
        <div className='flex flex-col justify-center items-center p-10 lg:pb-0 pt-20' id='about'>
            <div className='md:w-[80%]  space-y-10'>
                <h3 className='text-black font-semibold text-xl'>
                    Cultivating the future of film in Oman, the International Film Foundation fosters creativity,
                    celebrates diversity, and connects audiences through the power of storytelling.
                    Discover a vibrant film culture, support emerging talents,
                    and experience the magic of cinema in the heart of the Middle East.
                </h3>
                <button className='p-3 bg-[#7E3F981A]  text-[#7E3F98] self-start text-lg'>
                    Who we are
                </button>
            </div>
        </div>
    )
}

export default WhoWeAre