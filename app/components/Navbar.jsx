"use client"


import React, { useState } from 'react'
import Image from 'next/image'
import ContactUs from './ContactUs/ContactUs';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Abyssinica_SIL } from 'next/font/google'
const inter = Abyssinica_SIL({ subsets: ['latin'], weight: '400' })

function Navbar() {

    const navItems = [
        'HOME',
        'ABOUT',
        'EVENTS',
        'GALLERY'
    ]

    const [selected, setSelected] = useState('HOME')
    const [openModal, setOpenModal] = useState(false)
    const [isOpenNav, setOpenNavbar] = useState(false)

    return (
        // <div className='flex justify-center items-center md:py-5 px-10'>
        //     <div className='bg-white absolute md:-top-3 md:left-10 left-0 top-3 p-3 rounded-md mt-4'>
        //         <Image
        //             src={'/logo.png'}
        //             width={500}
        //             height={500}
        //             className='md:w-28 w-12 '
        //             alt='Logo'
        //         />
        //     </div>

        //     <div className='space-x-5 text-sm lg:block hidden'>
        //         <span>HOME</span>
        //         <span>ABOUT</span>
        //         <span>EVENTS</span>
        //         <span>GALLERY</span>
        //     </div>
        //     <div className='bg-white absolute md:-top-3 md:right-10 right-0 top-3 rounded-md'>
        //         <button className='bg-[#EC008D] text-white text-sm px-4 py-2 rounded-md lg:block hidden '>
        //             Contact Us
        //         </button>
        //         <FontAwesomeIcon className='w-10 '
        //             icon={faBars}
        //         />
        //     </div>
        // </div>



        <nav className="bg-white w-full z-20 top-0 start-0 " id='navbar'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                <div className='bg-transparent  rounded-lg ml-5'>

                    <a href="#banner" className="flex items-center space-x-3 rtl:space-x-reverse ">
                        <Image src="/logo.png" width={800} height={800} className="md:w-36 w-20 " alt="Flowbite Logo" />
                    </a>
                </div>
                <div className="flex md:order-2 space-x-5 md:mr-0  mr-5 md:space-x-0 rtl:space-x-reverse">
                    {!openModal ? <button onClick={() => setOpenModal(!openModal)} className={`bg-[#EC008D] text-white md:text-sm text-[12px] md:px-4 md:py-2 px-1 py-1 rounded-md hover:bg-[#9c3b75] focus:ring-4 focus:outline-none focus:ring-[#974476] ${inter.className}`}>
                        Contact Us
                    </button> : null}
                    {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}

                    <button onClick={() => setOpenNavbar(!isOpenNav)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 " aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold text-sm border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navItems.map((item, index) => (
                            <AnchorLink key={index} href={`#${item.toLowerCase() === 'home' ? 'banner' : item.toLowerCase()}`}>
                                <li onClick={() => setSelected(item)} key={index}>
                                    <a href="#" className={`block py-2 px-3 text-[#EC008D]  rounded md:bg-transparent  md:p-0 md:dark:text-[#EC008D] ${selected === item ? 'text-[#EC008D]'
                                        :
                                        'block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-[#9c3b75] md:p-0 '
                                        }`} aria-current="page">{item}</a>
                                </li>
                            </AnchorLink>
                        ))}

                    </ul>
                </div>
            </div>
            {isOpenNav ?
                (

                    <div className='bg-white md:hidden  bg-opacity-80'>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold text-sm  rounded-b-lg  space-y-5 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-100 md:dark:bg-gray-900 dark:border-gray-700">
                            {navItems.map((item, index) => (
                                <AnchorLink key={index} href={`#${item.toLowerCase() === 'home' ? 'banner' : item.toLowerCase()}`}>

                                    <li onClick={() => { setSelected(item), setOpenNavbar(false) }} key={index} className='border' >
                                        <a href="#" className={`block py-2 px-3 text-[#EC008D]  rounded md:bg-transparent  md:p-0 md:dark:text-[#EC008D] ${selected === item ? 'text-[#EC008D]'
                                            :
                                            'block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-[#9c3b75] md:p-0 '
                                            }`} aria-current="page">{item}</a>
                                    </li>
                                </AnchorLink>
                            ))}

                        </ul>
                    </div>
                ) : null
            }

            {openModal ? (
                <div className='lg:absolute lg:top-0 lg:left-[460px]'>
                    <ContactUs setOpenModal={setOpenModal} />
                </div>
            ) : null
            }
        </nav>

    )
}

export default Navbar