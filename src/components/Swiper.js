"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Sliding = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
    >
       <SwiperSlide className="flex items-center justify-center">
  <div className="flex flex-col lg:flex-row lg:h-[600px]">
    <div className="lg:w-[1000px] bg-white-400 flex flex-col">
      <div className="w-full bg-white-300 flex flex-col lg:flex-row">
        <div className="relative group bg-white-300 p-0 w-full lg:w-1/2">
          <div className=" h-72 lg:h-[550px]">
            <img src="/image.png" alt="Image Caption 12" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative group bg-white-400 p-0 w-full lg:w-[300px] flex flex-col justify-center overflow-hidden py-8">
          <div className="relative flex-grow overflow-y-auto px-4">
            <p className="text-black font-bold mb-2 text-center">Maison</p>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-black">
                Deep, pure and harmonious plains, exquisitely worked embroideries, subtly designed prints, beautiful jacquards: our cushions combine colours, inspirations and elegance to create a unique, personal touch.
              </p>
              <button className="bg-black text-white px-4 py-2 rounded-lg mt-4">Discover the collection</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden lg:flex lg:w-[1500px] bg-white-400 flex-col">
      <div className="w-full bg-white-200 h-[550px] flex flex-row">
        <div className="relative group bg-white-100 p-0 w-full">
          <div className="relative h-full">
            <img src="/image.png" alt="Image Caption 15" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

      <SwiperSlide className="flex items-center justify-center">
  <div className="flex flex-col lg:flex-row lg:h-[600px]">
    <div className="lg:w-[1000px] bg-white-400 flex flex-col">
      <div className="w-full bg-white-300 flex flex-col lg:flex-row">
        <div className="relative group bg-white-300 p-0 w-full lg:w-1/2">
          <div className="h-72 lg:h-[550px]">
            <img src="/image.png" alt="Image Caption 12" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative group bg-white-400 p-0 w-full lg:w-[300px] flex flex-col justify-center overflow-hidden py-8">
          <div className="relative flex-grow overflow-y-auto px-4">
            <p className="text-black font-bold mb-2 text-center">Maison</p>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-black">
                Deep, pure and harmonious plains, exquisitely worked embroideries, subtly designed prints, beautiful jacquards: our cushions combine colours, inspirations and elegance to create a unique, personal touch.
              </p>
              <button className="bg-black text-white px-4 py-2 rounded-lg mt-4">Discover the collection</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden lg:flex lg:w-[1500px] bg-white-400 flex-col">
      <div className="w-full bg-white-200 h-[550px] flex flex-row">
        <div className="relative group bg-white-100 p-0 w-full">
          <div className="relative h-full">
            <img src="/image.png" alt="Image Caption 15" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide className="flex items-center justify-center">
  <div className="flex flex-col lg:flex-row lg:h-[600px]">
    <div className="lg:w-[1000px] bg-white-400 flex flex-col">
      <div className="w-full bg-white-300 flex flex-col lg:flex-row">
        <div className="relative group bg-white-300 p-0 w-full lg:w-1/2">
          <div className="h-72 lg:h-[550px]">
            <img src="/image.png" alt="Image Caption 12" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative group bg-white-400 p-0 w-full lg:w-[300px] flex flex-col justify-center overflow-hidden py-8">
          <div className="relative flex-grow overflow-y-auto px-4">
            <p className="text-black font-bold mb-2 text-center">Maison</p>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-black">
                Deep, pure and harmonious plains, exquisitely worked embroideries, subtly designed prints, beautiful jacquards: our cushions combine colours, inspirations and elegance to create a unique, personal touch.
              </p>
              <button className="bg-black text-white px-4 py-2 rounded-lg mt-4">Discover the collection</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden lg:flex lg:w-[1500px] bg-white-400 flex-col">
      <div className="w-full bg-white-200 h-[550px] flex flex-row">
        <div className="relative group bg-white-100 p-0 w-full">
          <div className="relative h-full">
            <img src="/image.png" alt="Image Caption 15" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide> 
     <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white bg-opacity-75 rounded-full p-2 cursor-pointer transition-opacity duration-300 hover:bg-opacity-100 hover:opacity-100">
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </div>
      
  <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white bg-opacity-75 rounded-full p-2 cursor-pointer transition-opacity duration-300 hover:bg-opacity-100 hover:opacity-100">
    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </div>
      
    </Swiper>
  );
};

export default Sliding;
