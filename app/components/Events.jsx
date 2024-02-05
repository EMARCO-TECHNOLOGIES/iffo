
import Image from 'next/image'
import React from 'react'

function Events() {

    const items = [
        { src: '/1.png', title: 'Ignite your passion for film!' },
        { src: '/2.png', title: 'Ignite your passion for film!' },
        { src: '/3.png', title: 'Ignite your passion for film!' },
        { src: '/4.png', title: 'Ignite your passion for film!' },
        { src: '/5.png', title: 'Ignite your passion for film!' },

    ]

    const glassMorphismStyle = 'bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg'

    return (
        <div className='lg:py-0 p-10 pt-20 md:px-20 space-y-5 lg:h-screen border-b border-slate-300 flex flex-col justify-center' id='events'>
            <h1 className='text-4xl font-bold'>EVENTS</h1>
            <div className='max-w-screen  overflow-x-auto flex space-x-10 scrollbar-hide'>
                {items.map((item, index) => (
                    <div key={index} className={`md:min-w-[350px] min-w-60  bg-slate-600 rounded-2xl relative flex justify-center overflow-hidden`}>
                        <div className=''>

                            <Image width={400} height={400} src={item.src} className='hover:scale-110 transition-transform' alt='img' />
                        </div>
                        <div className={`${glassMorphismStyle} h-20 w-[90%] absolute bottom-4 rounded-lg text-white   flex justify-center items-center p-5 `}>
                            <h3 className='md:text-[20px] text-xs text-center '>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Events