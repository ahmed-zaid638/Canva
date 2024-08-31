"use client";
import React, { useEffect, useRef, useState } from "react";

function AutoSlider() {
  const slider = useRef<HTMLDivElement | null>(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(0);

  // animation
  // translate

  useEffect(() => {
    const handelResize = () => {
      setScreenWidth(innerWidth);
      console.log(screenWidth);
    };

    window.addEventListener("resize", handelResize);

    const updateSliderPosition = () => {
      if (slider.current) {
        setOffset((prev) => {
          const newOffest = prev + 10;
          slider.current!.style.transform = `translateX(${newOffest}px)`;
          return newOffest;
        });

        // console.log(slider.current);
      }
    };

    const intervalId = setInterval(updateSliderPosition, 1000);

    return () => {
      //   clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex gap-10 items-center bg-slate-300 w-full h-[300px] ">
      {[1, 2, 3, 4, 5 ,6].map((item, index) => (
        <div
          key={index}
         ref = {slider}
          className="w-[200px] h-[200px] bg-red-300 text-white flex justify-center items-center text-5xl"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default AutoSlider;
