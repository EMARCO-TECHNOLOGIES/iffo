import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <div className='md:p-10 p-3  h-screen relative md:-mt-10 -z-10' id='banner'>
            <Image
                src={'/BannerImage2.jpg'}
                width={1500}
                height={1500}
                className='w-full h-full rounded-xl'
                style={{ objectFit: "cover" }}
                alt='Banner Image'
            />
            <div className='absolute bottom-72 md:left-20 left-10'>

                <h1 className='md:text-5xl text-2xl font-bold  text-white md:w-[500px] w-[300px]'>
                    Promoting cinema's magic, nurturing Oman's future.
                </h1>
                <p className='text-white absolute text-lg'>
                    These tagline options focus on the organization's mission to promote cinema, nurture talent, and create a vibrant film culture in Oman,
                </p>
            </div>
        </div>
    )
}

export default Banner