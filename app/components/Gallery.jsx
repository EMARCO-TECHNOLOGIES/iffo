import Image from 'next/image'
import React from 'react'
// import SwiperComponent from './swiper'

function Gallery() {
    return (
        <div className='lg:h-screen flex lg:flex-row flex-col justify-center items-center md:p-20 p-10 pt-20 gap-16' id='gallery'>
            <div className='flex md:flex-row flex-col gap-5 '>
                <div >
                    <Image src={'/Gallery/1.png'} width={570} height={570} className='w-full  lg:h-[500px] object-cover hover:scale-95 transition-transform' alt='img' />
                </div>
                <div className=' grid md:grid-cols-1 grid-cols-2 gap-2 justify-center items-center'>
                    <div className='lg:w-48 lg:h-28 rounded-lg'>
                        <Image src={'/Gallery/2.png'} width={500} height={500} className='w-full object-none lg:h-28 rounded-lg  hover:scale-110 transition-transform' alt='img' />
                    </div>
                    <div className='lg:w-48 lg:h-28 rounded-lg'>

                        <Image src={'/Gallery/3.png'} width={500} height={500} className='w-full lg:h-28 object-none rounded-lg  hover:scale-95 transition-transform' alt='img' />
                    </div>
                    <div className='lg:w-48 lg:h-28 rounded-lg'>

                        <Image src={'/Gallery/4.png'} width={500} height={500} className='w-full lg:h-28 object-none rounded-lg hover:scale-95 transition-transform' alt='img' />
                    </div>
                    <div className='lg:w-48 lg:h-28 rounded-lg opacity-70 cursor-pointer hover:scale-110 transition-transform '>

                        <Image src={'/Gallery/5.png'} width={500} height={500} className='w-full lg:h-28 object-none rounded-lg hover:scale-95 transition-transform  ' alt='img' />
                        <span className='absolute'>See More..</span>
                    </div>



                </div>
            </div>
            <div className='lg:w-1/3 md:w-[80%] space-y-10 text-white '>
                <div className='flex justify-between text-black items-center lg:text-lg'>
                    <hr className='h-1 border-black md:w-36 w-20' />

                    <span >24 March 2023</span>
                    <hr className='h-1 border-black md:w-36 w-20' />
                </div>
                <div className='bg-[#B03375] p-10 space-y-5 rounded-2xl font-normal md:text-[16px] lg:h-[430px]'>
                    <h3 className='font-bold text-xl'>International Film Festival 2022</h3>

                    <p>
                        Immerse yourself in a world of creativity, innovation, and cinematic brilliance.
                        Whether you're an aspiring filmmaker, a seasoned cinephile,
                        or simply someone who appreciates the power of storytelling,
                    </p>
                    <p>
                        Immerse yourself in a world of creativity, innovation, and cinematic brilliance.
                        Whether you're an aspiring filmmaker, a seasoned cinephile,
                        or simply someone who appreciates the power of storytelling
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Gallery