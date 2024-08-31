"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const slidesData = [
    { id: 1, content: "Slide 1", color: "bg-red-300" },
    { id: 2, content: "Slide 2", color: "bg-green-300" },
    { id: 3, content: "Slide 3", color: "bg-blue-300" },
    { id: 4, content: "Slide 4", color: "bg-yellow-300" },
    // Add more slides as needed
  ];
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="bg-slate-400 ">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-slate-400">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-slate-400">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-slate-400">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-slate-400">Slide 1</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
