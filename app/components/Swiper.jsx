// "use client"

// import React from 'react'
// import { Scrollbar, Mousewheel } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

// function SwiperComponent() {

//     const items = [
//         { src: '/1.png', title: 'Ignite your passion for film!' },
//         { src: '/2.png', title: 'Ignite your passion for film!' },
//         { src: '/3.png', title: 'Ignite your passion for film!' },
//         { src: '/4.png', title: 'Ignite your passion for film!' },
//         { src: '/5.png', title: 'Ignite your passion for film!' },

//     ]

//     return (
//         <Swiper
//             modules={[Scrollbar, Mousewheel]}
//             loop={true}
//             pagination={{ clickable: true }}
//             centeredSlides={true}
//             grabCursor={true}
//             scrollbar={{ draggable: true }}
//             mousewheel={{
//                 invert: false,
//             }}
//             autoplay={{
//                 delay: 5000,
//                 stopOnLastSlide: false,
//                 disableOnInteraction: false,
//             }}
//             breakpoints={{
//                 0: {
//                     spaceBetween: 10,
//                     slidesPerView: 1,
//                 },
//                 468: {
//                     spaceBetween: 10,
//                     slidesPerView: 2,
//                 },
//                 768: {
//                     spaceBetween: 15,
//                     slidesPerView: 3,
//                 },
//                 1024: {
//                     spaceBetween: 15,
//                     slidesPerView: 4,
//                 },
//                 1280: {
//                     spaceBetween: 30,
//                     slidesPerView: 5,
//                 },
//             }}
//             className="breakpoint"
//         >
//             {items.map((item, index) => {
//                 return (
//                     <SwiperSlide key={index}>
//                         <img className="" src={item.src} alt="" />
//                     </SwiperSlide>
//                 );
//             })}
//         </Swiper>
//     )
// }

// export default SwiperComponent