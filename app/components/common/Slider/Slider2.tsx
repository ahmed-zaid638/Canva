"use client";
import { ChevronLeft, ChevronRight, Sliders } from "lucide-react";
import React, { useState } from "react";

const Slider2= () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidht = window.innerWidth 
  console.log(screenWidht)
  const prev = screenWidht / 10 ; 
  console.log(prev)
  const slides = [
    { id: 1, content: "Slide 1 Content" },
    { id: 2, content: "Slide 2 Content" },
    { id: 3, content: "Slide 3 Content" },
    { id: 4, content: "Slide 4 Content" },
    { id: 5, content: "Slide 5 Content" },
    { id: 6, content: "Slide 6 Content" },
    { id: 7, content: "Slide 7 Content" },
    { id: 8, content: "Slide 8 Content" },
    { id: 9, content: "Slide 9 Content" },
    { id: 10, content: "Slide 10 Content" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    console.log("form next", currentSlide);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    console.log("form prev", currentSlide);
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Slider Content */}
      <div className="overflow-hidden">
        <div className="flex gap-3 justify-cente transition-transform duration-500">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className=""
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="p-6 text-center bg-gray-200 rounded-lg w-[30vh] h-[300px]">
                {slide.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {false ? (
        ""
      ) : (
        <button
          onClick={prevSlide}
          disabled={currentSlide == 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
        >
          <ChevronLeft />
        </button>
      )}

      {false ? (
        ""
      ) : (
        <button
          onClick={nextSlide}
          disabled={currentSlide == slides.length-3}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
};

export default Slider2;
